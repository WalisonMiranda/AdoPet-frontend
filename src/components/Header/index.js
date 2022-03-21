import { NavLink } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { Nav } from './styles';

export const Header = () => {
  const { user, handleSignOut } = useAuth();

  return (
    <Nav>
      <ul>
        <NavLink className={({isActive}) =>(isActive ? "link active" : "link inactive")} to="/home">HOME</NavLink>
        <span></span>
        <NavLink className={({isActive}) =>(isActive ? "link active" : "link inactive")} to="/meus-pets">MEUS PETS</NavLink>
      </ul>
      <div>
        <span onClick={() => console.log('toggle on/off')}></span>
        <button onClick={handleSignOut}>Sair</button>
      </div>
    </Nav>
  )
}
