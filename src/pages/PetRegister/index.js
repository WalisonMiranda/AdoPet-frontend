import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { get } from "lodash";

import { Container } from './styles';

import { Back } from '../../assets/images';

import axios from '../../services/axios';
import history from '../../services/history';

export function PetRegister({ match }) {
  const id = get(match, 'params.id', 0);
  const user = useSelector((state) => state.auth.user);

  const [newPet, setNewPet] = useState({
    nome: '',
    tipo: 'Cachorro',
    sexo: 'Femea',
    idade: '',
    raca: '',
    contato: '',
  });
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    if (!id) return;

    const getPetData = async () => {
      try {
        const { data } = await axios.get(`/pets/${id}`);

        setNewPet({
          nome: data.nome,
          tipo: data.tipo,
          sexo: data.sexo,
          idade: data.idade,
          raca: data.raca,
          contato: data.contato,
        });
      } catch (err) {
        if (err.status === 400) {
          console.log(err.error);
        }
      }
    }

    getPetData();
  }, [id]);

  const handleFileChange = e => {
    const foto = e.target.files[0];
    setPhoto(foto);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (id) {
        axios.put(`/pets/${id}`, newPet);

        const formData = new FormData();
        formData.append('pet_id', id);
        formData.append('foto', photo);

        await axios.post('/fotos', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        history.goBack();
      } else {
        const { data } = await axios.post('/pets', { ...newPet, user_id: user.id });

        const formData = new FormData();

        formData.append('pet_id', data.id);
        formData.append('foto', photo);

        await axios.post('/fotos', formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        history.goBack();
      }

      setNewPet({
        nome: '',
        tipo: 'Cachorro',
        sexo: 'Femea',
        idade: '',
        raca: '',
        contato: '',
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <p onClick={() => history.goBack()}>Voltar<img src={Back} alt="voltar" /></p>
      <form onSubmit={handleSubmit}>

        <h2>Cadastrar novo pet</h2>

            <label htmlFor="nome">
              Nome do pet
              <input
                name="nome"
                value={newPet.nome}
                // required
                type="text" 
                onChange={(e) => setNewPet({ ...newPet, nome: e.target.value })}
              />
            </label>

            <div className="select-inputs">
              <label htmlFor="tipo">
                Tipo
                <select onChange={(e) => setNewPet({ ...newPet, tipo: e.target.value })} name="tipo">
                  <option value="Cachorro">Cachorro</option>
                  <option value="Gato">Gato</option>
                </select>
              </label>

              <label htmlFor="sexo">
                Sexo
                <select onChange={(e) => setNewPet({ ...newPet, sexo: e.target.value })} name="sexo">
                  <option value="Femea">Femea</option>
                  <option value="Macho">Macho</option>
                </select>
              </label>
            </div>

          <label htmlFor="idade">
            Idade
              <input
                name="idade"
                value={newPet.idade}
                placeholder="ex: 1, 1.2"
                type="number"
                min={0.1} 
                step={0.1} 
                onChange={(e) => setNewPet({ ...newPet, idade: e.target.value })}
              />
          </label>

          <label htmlFor="raca">
            Raça
            <input
              name="raca"
              value={newPet.raca}
              type="text" 
              onChange={(e) => setNewPet({ ...newPet, raca: e.target.value })}
            />
          </label>

          <label htmlFor="contato">
            Contato*
            <input
              name="contato"
              value={newPet.contato}
              required
              type="text" 
              onChange={(e) => setNewPet({ ...newPet, contato: e.target.value })}
            />
          </label>

          <label htmlFor="foto">
            Fotos*
            <input
              name="foto"
              required
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e)}
            />
          </label>

          <div className="buttons">
            <button type="sumbit">{id ? 'Salvar' : 'Cadastrar'}</button>
            <button onClick={() => history.goBack()}>Cancelar</button>
          </div>
        </form>
    </Container>
  )
}

