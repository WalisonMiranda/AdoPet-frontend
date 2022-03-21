import { useState } from "react";

import { useAuth } from "../../hooks/useAuth";

import { Content } from "./styles";
import { Google, Facebook } from "../../assets/images";

export const LoginForms = () => {
  const {
    signIn,
    signUp,
    setSignIn,
    setSignUp,
    handleSignIn,
    handleSignUp,
    userError,
  } = useAuth();

  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <Content>
          <form className="form-login" onSubmit={(e) => handleSignIn(e)}>
            <p>Login</p>
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              value={signIn.email}
              required
              onChange={(e) => setSignIn({ ...signIn, email: e.target.value })}
            />

            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={signIn.senha}
              required
              onChange={(e) => setSignIn({ ...signIn, senha: e.target.value })}
            />

            <button type="submit">Entrar</button>

            {userError && (
              <span style={{ color: "red" }}>Email ou senha incorretos</span>
            )}
          </form>

          <p>
            Não possui uma conta?{" "}
            <span onClick={() => setIsLogin(false)}>Registre-se!</span>
          </p>

          <div className="social-login">
            <p>Ou entre com</p>
            <div className="social-buttons">
              <button>
                <img src={Google} alt="google" />
              </button>

              <button>
                <img src={Facebook} alt="facebook" />
              </button>
            </div>
          </div>
        </Content>
      ) : (
        <Content>
          <form className="form-login" onSubmit={(e) => handleSignUp(e)}>
            <p>Registrar</p>
            <label htmlFor="nome">Nome</label>
            <input
              required
              type="text"
              id="nome"
              value={signUp.nome}
              onChange={(e) => setSignUp({ ...signUp, nome: e.target.value })}
            />

            <label htmlFor="email">E-mail</label>
            <input
              required
              type="email"
              id="email"
              value={signUp.email}
              onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
            />
            {userError && (
              <span style={{ color: "red" }}>Email já cadastrado</span>
            )}

            <label htmlFor="senha">Senha</label>
            <input
              required
              type="password"
              id="senha"
              value={signUp.senha}
              onChange={(e) => setSignUp({ ...signUp, senha: e.target.value })}
            />

            <button type="submit">Registrar</button>
          </form>

          <p>
            Possui uma conta? 
            <span onClick={() => setIsLogin(true)}> Login!</span>
          </p>
        </Content>
      )}
    </>
  );
};
