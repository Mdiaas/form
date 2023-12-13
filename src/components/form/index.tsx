import { useState } from 'react';
import {
  DivAddressContainer,
  DivInput,
  DivRow,
  FormAddressContainer,
  MainContainer,
} from './styles'
import { HouseLine } from "@phosphor-icons/react/dist/ssr";
import axios from 'axios';
export function Form() {
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [state, setState] = useState('');
  const [complement, setComplement] = useState('');
  const [number, setNumber] = useState('');

  function cleanCepInformations(){
    setCity('')
    setState('')
    setStreet('')
    setNeighborhood('')
    setComplement('')
  }
  function handleCep(){
    const formattedcep = zipCode.replace(/[^0-9]/g, '');
    if (formattedcep.length == 8) {
      axios.get("https://viacep.com.br/ws/"+formattedcep+"/json/").then((response) => {
        if(response.data.erro){
          cleanCepInformations()
          return;
        }
        setCity(response.data.localidade)
        setState(response.data.uf)
        setStreet(response.data.logradouro)
        setNeighborhood(response.data.bairro)
        setComplement(response.data.complemento)
      });
      return
    }
    cleanCepInformations()
  }
  return (
    <MainContainer>
      <FormAddressContainer>
        <DivAddressContainer>
          <h3>
            <span>
              <HouseLine size={32} />
            </span>
            Endereço
          </h3>
          <DivRow>
            <DivInput variantWidth="25%">
              <input
                type="text"
                placeholder="CEP"
                required
                onChange={event => setZipCode(event.target.value)}
                value={zipCode}
                onBlur={() => handleCep()}
              />
            </DivInput>
            <DivInput variantWidth="50%">
              <input
                type="text"
                placeholder="City"
                onChange={event => setCity(event.target.value)}
                value={city}
                required
              />
            </DivInput>
            <DivInput variantWidth="25%">
              <input
                type="text"
                placeholder="UF"
                onChange={event => setState(event.target.value)}
                required
                value={state}
              />
            </DivInput>
          </DivRow>
          <DivRow>
            <DivInput variantWidth="100%">
              <input
                type="text"
                placeholder="Neighborhood"
                onChange={event => setNeighborhood(event.target.value)}
                required
                value={neighborhood}
              />
            </DivInput>
          </DivRow>
          <DivRow>
            <DivInput variantWidth="50%">
              <input
                type="text"
                placeholder="Street"
                onChange={event => setStreet(event.target.value)}
                required
                value={street}
              />
            </DivInput>
            <DivInput variantWidth="25%">
              <input
                type="number"
                placeholder="Number"
                onChange={event => setNumber(event.target.value)}
                required
                value={number}
              />
            </DivInput>
            <DivInput variantWidth="75%">
              <input
                type="text"
                placeholder="Complement"
                onChange={event => setComplement(event.target.value)}
                value={complement}
              />
          </DivInput>
          </DivRow>
        </DivAddressContainer>
      </FormAddressContainer>
    </MainContainer>
  )
}