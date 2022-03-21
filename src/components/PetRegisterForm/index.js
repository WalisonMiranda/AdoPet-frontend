import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { useAuth } from '../../hooks/useAuth'; 
import { supabase } from '../../services/supabase';

import CloseIcon from '@material-ui/icons/Close';

import { Container } from './styles';

export const PetRegisterForm = ({ onClick }) => {
  const { user } = useAuth();

  const [newPet, setNewPet] = useState({
    nome_pet: '',
    tipo: 'Cachorro',
    sexo: 'Femea',
    idade: '',
    raca: '',
    contato: '',
  });
  const [petFotoPerfil, setPetFotoPerfil] = useState(undefined);

  const handleInputChange = e => {
    const value = e.target.value;

    setNewPet({
      [e.target.name]: value,
      ...newPet,
    });
  }

  const handleFileChange = e => {
    setPetFotoPerfil(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const getId = uuid();

    await supabase.from('pets').insert({
      id: getId,
      usuario_id: user.id,
      pet_foto: `https://qfmdekjbitqslmekqgpy.supabase.in/storage/v1/object/public/avatars/${getId}`,
      ...newPet,
    });

    await supabase.storage.from('avatars').upload(`${getId}`, petFotoPerfil);

    setNewPet({
      nome_pet: '',
      tipo: 'Cachorro',
      sexo: 'Femea',
      idade: '',
      raca: '',
      contato: '',
    });
    onClick();
  }
  
  return (
    <Container>
      <div></div>
        <CloseIcon className='closeIcon' onClick={onClick} />
        <h2>Cadastrar novo pet</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="pet_foto_perfil">Foto de perfil*</label>
            <input
              className='file'
              required
              name="pet_foto_perfil"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="nome_pet">Nome do pet</label>
            <input 
              // required
              name="nome_pet"
              type="text" 
              onChange={(e) => handleInputChange(e)}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="tipo">Tipo</label>
            <select onChange={handleInputChange} name="tipo">
              <option value="Ccachorro">Cachorro</option>
              <option value="Gato">Gato</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="sexo">Sexo</label>
            <select onChange={handleInputChange} name="sexo">
              <option value="Femea">femea</option>
              <option value="Macho">macho</option>
            </select>
          </fieldset>

          <fieldset>
            <label htmlFor="idade">Idade</label>
            <input
              placeholder="ex: 1.0"
              name="idade"
              type="number"
              min={0.1} 
              step={0.1} 
              onChange={(e) => handleInputChange(e)}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="raca">Raça</label>
            <input
              name="raca"
              type="text" 
              onChange={(e) => handleInputChange(e)}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="contato">Contato*</label>
            <input
              required
              name="contato"
              type="text" 
              onChange={(e) => handleInputChange(e)}
            />
          </fieldset>
          <button type='submit'>Cadastrar</button>
        </form>
    </Container>
  );
};

