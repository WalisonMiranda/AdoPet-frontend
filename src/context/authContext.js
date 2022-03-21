import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { supabase } from '../services/supabase';

export const Context = createContext();

export function ContextProvider({children}) {
  const history = useNavigate();

  const [user, setUser] = useState(undefined);
  const [signIn, setSignIn] = useState({ email: "", senha: "" });
  const [signUp, setSignUp] = useState({ nome: "", email: "", senha: "" });
  const [userError, setUserError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async e => {
    e.preventDefault();

    let { user, error } = await supabase.auth.signIn({
      email: signIn.email,
      password: signIn.senha,
    });

    if (error) {
      setUserError(true);
      setSignIn({
        email: "",
        senha: "",
      });
      return;
    }

    setUser(user);
    history('/home');
    
    setSignIn({
      email: "",
      senha: "",
    });
  };

  const handleSignUp = async e => {
    e.preventDefault();

    let { user, error } = await supabase.auth.signUp({
      name: signUp.nome,
      email: signUp.email,
      password: signUp.senha,
    });
    
    if (error) {
      
      return;
    }

    await supabase.from('profiles').upsert({
      id: user.id,
      username: signUp.nome,
      updated_at: new Date(),
    });

    setUser(user);
    history('/home');
      
    setSignUp({
      nome: "",
      email: "",
      senha: ""
    });
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
      return;
    }

    setUser(undefined);
    history('/');
  };

  useEffect(() => {
    const user = supabase.auth.user();

    if (user) setUser(user);
  }, []);

  return (
    <Context.Provider value={{ 
                        user, 
                        setUser ,
                        signIn,
                        setSignIn,
                        signUp,
                        setSignUp,
                        userError,
                        loading,
                        handleSignIn,
                        handleSignUp,
                        handleSignOut,
                      }}>
      { children }
    </Context.Provider>
  )
}
  
