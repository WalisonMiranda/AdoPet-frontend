import { useState, useEffect } from 'react';

import { Container } from './styles';
import { Dog, Cat, Catdog } from '../../assets/images';

import { supabase } from '../../services/supabase'
import { PetsList } from '../../components/PetsList';

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
    const fetchPets = async () => {
      const { data } = await supabase.from('pets')
      .select('*')
      .then(data => {
        return data;
      });

      setPets(data);
    }
    
    fetchPets();
  }, []);

  useEffect(() => {
    switch (petType) {
      case 'Cachorro':
        supabase.from('pets')
        .select('*')
        .eq('tipo', petType)
        .then(({data}) => {
          setPets(data);
          console.log(data);
        });

        break;

      case 'Gato':
        supabase.from('pets')
        .select('*')
        .eq('tipo', petType)
        .then(({data}) => {
          setPets(data);
          console.log(data);
        });

        break;
    
      case '':
        supabase.from('pets')
        .select('*')
        .then(({data}) => {
          setPets(data);
        });

        break;

      default:
      break;
    }

    console.log('updated');
    console.log(petGender)
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
                <option value="macho">macho</option>
                <option value="femea">fêmea</option>
              </select>
          </div>
        </Container.Panel>
      </Container.Aside>
      <PetsList pets={pets} />
    </Container>
  );
}
