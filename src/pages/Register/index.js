import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isEmail } from 'validator';

import * as actions from '../../store/modules/auth/actions';

import { Container } from './styles';
import { loginImage } from '../../assets/images';

export function Register() {
  const dispatch = useDispatch();

  const [signUp, setSignUp] = useState({ nome: '', email: '', password: '' });
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleSignUp = async e => {
    e.preventDefault();

    let formErrors = false;
  
    const { nome, email, password } = signUp;
  
    if (nome.length < 3 || nome.length > 120) {
      formErrors = true;
      setNameError('Nome deve ter entre 3 e 120 caracteres');
    }
  
    if (!isEmail(email)) {
      formErrors = true;
      setEmailError('Email inválido');
    }
  
    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      setPasswordError('Senha deve ter entre 6 e 50 caracteres');
    }
  
    if (formErrors) return;
  
    dispatch(actions.registerRequest({ nome, email, password }));
  };

  return (
    <Container>
      <div className='line-border'>
        <img className='login-image' src={loginImage} alt="Duas pessoas com seus pets"/>
        <main>
          <div className='text-area'>
            <h1 className='login-title'>AdoPet</h1>
            <p className='login-text'>AdoPet é uma plataforma onde você vai encontrar e cadastrar pets para adoção.</p>
          </div>
        </main>
        <aside>
          <form onSubmit={handleSignUp}>
            <p>Registrar</p>
            <label htmlFor="nome">Nome</label>
            <input
              required
              type="text"
              id="nome"
              value={signUp.nome}
              onChange={(e) => setSignUp({ ...signUp, nome: e.target.value })}
            />
            {nameError && <span className='error'>{nameError}</span>}

            <label htmlFor="email">E-mail</label>
            <input
              required
              type="email"
              id="email"
              value={signUp.email}
              onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
            />
            {emailError && <span className='error'>{emailError}</span>}

            <label htmlFor="password">Senha</label>
            <input
              required
              type="password"
              id="password"
              value={signUp.password}
              onChange={(e) => setSignUp({ ...signUp, password: e.target.value })}
            />
            {passwordError && <span className='error'>{passwordError}</span>}

            <button type="submit">Registrar</button>
          </form>

          <p>
            Possui uma conta? 
            <NavLink className='signin' to="/login"> Login!</NavLink>
          </p>    
        </aside>
      </div>
    </Container>
  )
}
