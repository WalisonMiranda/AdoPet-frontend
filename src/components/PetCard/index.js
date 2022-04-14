import history from '../../services/history';

import { Card } from "./styles";

export const PetCard = ({ pet, children }) => {
  const { Fotos, nome } = pet;

  const handleShowPet = id => {
    history.push(`/pet/${id}`);
  }

  return (
    <Card onClick={() => handleShowPet(pet.id)}>
      <img
        src={Fotos.length > 0 ? Fotos[Fotos.length - 1].foto_url : ''}
        alt={nome} 
      />
      <div>
          <p>{nome}</p>
          { children }
      </div> 
    </Card>
  );
}
