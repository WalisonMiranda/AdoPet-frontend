import { useState, useEffect } from 'react';

import { PetRegisterForm } from '../../components/PetRegisterForm';
import { PetsList } from '../../components/PetsList';

import { Catdog } from '../../assets/images';

import { supabase } from '../../services/supabase';

import { Container } from './styles';

export function MyPets() {
  const [isOpen, setIsOpen] = useState(false);
  const [userPets, setUserPets] = useState([]);

  const handleOpenModal = () => {
    setIsOpen(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  }

  useEffect(() => {    
    const user = supabase.auth.user();

    supabase.from('pets')
      .select('*')
      .eq('usuario_id', user.id)
      .then(({ data }) => {
        setUserPets(data);
      });

      console.log('updated')
  }, [isOpen]);

  return (
    <Container>
      {isOpen && <PetRegisterForm onClick={handleCloseModal} />}
      <Container.Aside>
        <img src={Catdog} alt="logo" />
        <div>
          <button onClick={handleOpenModal}>Cadastrar novo Pet</button>
        </div>
      </Container.Aside>
      <PetsList pets={userPets} userPets={true} />
    </Container>
  )
}
