import { PetCard } from '../index';

import { ResultList } from './styles';

export const PetsList = ({ pets, userPets }) => {

  return (
    <ResultList>
        <p className="list-title">Pets</p>
          {pets.length > 0 ?
            pets.map((pet) => {
              return (
                <PetCard key={pet.id} pet={pet} userPets={userPets} />
                )
              })
            : 
            <p>Nenhum pet encontrado</p>
          }
      </ResultList>
  )
}
