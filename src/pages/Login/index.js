import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as actions from "../../store/modules/auth/actions";

import { Container } from "./styles";
import { loginImage, Google, Facebook } from "../../assets/images";

export function Login() {
  const dispatch = useDispatch();

  const [signIn, setSignIn] = useState({ email: "", password: "" });

  const handleSignIn = (e) => {
    e.preventDefault();

    const { email, password } = signIn;

    dispatch(actions.loginRequest({ email, password }));

    setSignIn({
      email: "",
      password: "",
    });
  };

  return (
    <Container>
      <div className="line-border">
        <img
          className="login-image"
          src={loginImage}
          alt="Duas pessoas com seus pets"
        />
        <main>
          <div className="text-area">
            <h1 className="login-title">AdoPet</h1>
            <p className="login-text">
              AdoPet é uma plataforma onde você vai encontrar e cadastrar pets
              para adoção.
            </p>
          </div>
        </main>
        <aside>
          <form className="form-login" onSubmit={handleSignIn}>
            <p>Login</p>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={signIn.email}
              required
              onChange={(e) => setSignIn({ ...signIn, email: e.target.value })}
            />

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              value={signIn.password}
              required
              onChange={(e) =>
                setSignIn({ ...signIn, password: e.target.value })
              }
            />

            <button type="submit">Entrar</button>
          </form>

          <p>
            Não possui uma conta?{" "}
            <NavLink className="signup" to="/register">
              {" "}
              Registre-se!
            </NavLink>
          </p>

          {/* <div className="social-login">
        <p>Ou entre com</p>
        <div className="social-buttons">
          <button>
            <img src={Google} alt="google" />
          </button>

          <button>
            <img src={Facebook} alt="facebook" />
          </button>
        </div>
      </div> */}
        </aside>
      </div>
    </Container>
  );
}
