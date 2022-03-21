import { LoginForms } from '../../components';

import { Container } from './styles';
import { loginImage } from '../../assets/images';

export function LoginPage() {
  return (
    <Container>
      <div className='line-border'>
        <img className='login-image' src={loginImage} alt="Duas pessoas com seus pets"/>
        <main>
          <div className='text-area'>
            <h1 className='login-title'>AdoPet</h1>
            <p className='login-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Ut augue lacus, scelerisque volutpat porttitor vel, 
              convallis vel enim.
            </p>
          </div>
        </main>
        <aside>
          <LoginForms />
        </aside>
      </div>
    </Container>
  )
}
