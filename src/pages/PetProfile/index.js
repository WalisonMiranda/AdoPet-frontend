import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container, PetInfo, PhotosGrid } from './styles';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Back } from '../../assets/images';

import axios from '../../services/axios';
import history from '../../services/history';

export function PetProfile() {
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();

  const [pet, setPet] = useState({});
  const [imageLoading, setImageLoading] = useState(true);

  const handleDeletePet = async id => {
    await axios.delete(`/pets/${id}`);
    history.push('/meus-pets');
  }

  const handleDeleteConfirm = () => {
    
  }

  const handleEditPet = async id => {
    history.push(`/pet/${id}/edit`);
  }
  
  useEffect(() => { 
    async function getPetData() {
      await axios.get(`/pets/${id}`)
      .then(response => {
        setPet(response.data);
      });
    }

    setTimeout(() => {
      setImageLoading(false);
    }, 100);

    getPetData();
  },[]);

  return (
    <Container>
      <p onClick={() => history.goBack()}>Voltar<img src={Back} alt="voltar" /></p>
      <PetInfo>
        {/* <img src={imageLoading ? '' : pet.Fotos[0].foto_url} alt={pet.nome} /> */}
        <div className="info">
        {user.id === pet.user_id && 
            <div>
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
          <p><strong>Nome: </strong>{pet.nome}</p>
          <p><strong>Sexo: </strong>{pet.sexo}</p>
          <p><strong>Idade: </strong>{pet.idade}</p>
          <p><strong>Raça: </strong>{pet.raca}</p>
          <p><strong>Contato: </strong>{pet.contato}</p>
        </div>
      </PetInfo>
      <PhotosGrid>
        <p className="photos-title">Fotos</p>
      </PhotosGrid>
    </Container>
  )
}

