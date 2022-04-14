import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

import { Nav } from './styles';

export const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { nome } = useSelector((state) => state.auth.user);

  const handleSignOut = () => {
    dispatch(actions.loginFailure());
    history.push('/login');
  }

  const Navbar = () => {
    return (
      <Nav>
        <ul>
          <NavLink className="link" activeClassName='active' exact to="/">HOME</NavLink>
          <span></span>
          <NavLink className="link" activeClassName='active' exact to="/meus-pets">MEUS PETS</NavLink>
        </ul>
        <div>
          <p>Bem vindo(a) {nome.split(' ')[0]}</p>
          <button onClick={handleSignOut}>Sair</button>
        </div>
      </Nav>
    )
  }

  return isLoggedIn && <Navbar />    
}
