import { Wrapper } from './styles';

import { loginImage } from "../../assets/images";

export function Page404() {
  return (
    <Wrapper>
      <img src={loginImage} alt="Duas pessoas com seus pets" />
      <div>
        <h2>404</h2>
        <h4>Página não encontrada!</h4>
      </div>
    </Wrapper>
  )
}
