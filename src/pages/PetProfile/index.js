import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container, PetInfo } from './styles';

import { Back } from '../../assets/images';

import { supabase } from '../../services/supabase';

export function PetProfile() {
  const { id } = useParams();
  const history = useNavigate();

  const [pet, setPet] = useState({});
  
  useEffect(() => {     
    supabase.from('pets')
    .select('*')
    .eq('id', id)
    .then(({ data }) => {
      setPet(data[0]);
    });
  }, []);

  const handleNavigateBack = () => {
    history(-1);
  }

  return (
    <Container>
      <p onClick={handleNavigateBack}>Voltar<img src={Back} alt="voltar" /></p>
      <PetInfo>
        <img src={pet.pet_foto} alt={pet.nome_pet} />
        <div className="info">
          <p><strong>Nome: </strong>{pet.nome_pet}</p>
          <p><strong>Idade: </strong>{pet.idade}</p>
          <p><strong>Sexo: </strong>{pet.sexo}</p>
          <p><strong>Raça: </strong>{pet.raca}</p>
          <p><strong>Contato: </strong>{pet.contato}</p>
        </div>
      </PetInfo>
    </Container>
  )
}

