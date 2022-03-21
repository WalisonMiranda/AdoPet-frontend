import { useNavigate } from 'react-router-dom';

import { supabase } from '../../services/supabase';

import { Card } from "./styles";

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export const PetCard = ({ pet, userPets }) => {
  const history = useNavigate();

  const handleShowPet = id => {
    history(`/pet/${id}`);
  }

  const handleEditPet = id => {
    console.log(id);
  }

  const handleDeletePet = async id => {
    await supabase
      .from('pets')
      .delete()
      .eq('pet.id', id);
  }

  return (
    <Card>
      <img
        src={pet.pet_foto}
        alt={pet.nome_pet} 
        onClick={() => handleShowPet(pet.id)}
      />
      <Card.Description>
          <p>Nome: {pet.nome_pet}</p>
          <p>Sexo: {pet.sexo}</p>
          <p>Idade: {pet.idade}</p>
          <p>Contato: {pet.contato}</p>
          <p>Raça: {pet.raca}</p>
          { userPets &&
            <div className="buttons">
              <EditIcon 
                color='primary'
                onClick={() => handleEditPet(pet.id)}
              />
              <DeleteIcon 
                color='error'
                onClick={() => handleDeletePet(pet.id)}
              />
            </div>
          }
      </Card.Description> 
    </Card>
  );
}
