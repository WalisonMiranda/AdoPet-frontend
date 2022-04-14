import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { PetsList } from '../../components/PetsList';

import { Catdog } from '../../assets/images';
import { Container } from './styles';

import axios from '../../services/axios';
import history from '../../services/history';

export function MyPets() {
  const { user } = useSelector((state) => state.auth);

  const [userPets, setUserPets] = useState([]);

  useEffect(() => {
    async function getUserPets() {
      await axios.get(`/pets/user/${user.id}`)
      .then(response => {
        setUserPets(response.data);
      });
    }

    getUserPets()
  }, []);

  return (
    <Container>
      <Container.Aside>
        <img src={Catdog} alt="logo" />
        <div>
          <button onClick={() => history.push('/pet')}>Cadastrar novo Pet</button>
        </div>
      </Container.Aside>
      <PetsList
        pets={userPets}
      />
    </Container>
  )
}
