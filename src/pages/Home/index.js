import { useState, useEffect } from 'react';

import { Container } from './styles';
import { Dog, Cat, Catdog } from '../../assets/images';

import { PetsList } from '../../components';

import axios from '../../services/axios';

export function Home() {
  const [pets, setPets] = useState([]);
  const [petType, setPetType] = useState('');
  const [petGender, setPetGender] = useState('');

  const handlePetTypeChange = (type) => {
    if(petType === type) {
      setPetType('');
    } else {
      setPetType(type);
    }
  };

  useEffect(() => {    
    async function getFilteredData() {
      const response = await axios.get('/pets');

      if (petType !== '') {
        if (petGender !== '') {
          setPets(response.data.filter(pet => pet.tipo === petType && pet.sexo === petGender));
        } else {
          setPets(response.data.filter(pet => pet.tipo === petType));
        }
      } else {
        if (petGender !== '') {
          setPets(response.data.filter(pet => pet.sexo === petGender));
        } else {
          setPets(response.data);
        }
      }
    }
    getFilteredData()
  }, [petType, petGender]);

  return (
    <Container>
      <Container.Aside>
        <img src={Catdog} alt="logo" />
        <Container.Panel>
          <div className="type-field">
            <div 
              onClick={() => handlePetTypeChange('Cachorro')}
              className={petType === 'Cachorro' ? 'selected' : ''}
            >
              <span>Cachorros</span>
              <img src={Dog} alt='Todos os cachorros' />
            </div>
            <div 
              onClick={() => handlePetTypeChange('Gato')} 
              className={petType === 'Gato' ? 'selected' : ''}
            >
              <span>Gatos</span>
              <img src={Cat} alt='Todos os gatos' />
            </div>
          </div>
          <div className="input-field">
              <label>Sexo</label>
              <select onChange={(e) => setPetGender(e.target.value)}>
                <option value="">todos</option>
                <option value="Macho">macho</option>
                <option value="Femea">fêmea</option>
              </select>
          </div>
        </Container.Panel>
      </Container.Aside>
      <PetsList pets={pets} />
    </Container>
  );
}
