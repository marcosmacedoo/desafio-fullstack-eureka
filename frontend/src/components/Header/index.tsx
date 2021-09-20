import React, { ChangeEvent, FormEvent, useState, useContext } from 'react'
import {
  Wrapper,
  Title,
  Form,
  ContainerHeader,
  InputCep,
  ButtonPrimary,
  ImgMapPin,
} from './styles'
import MapPinImg from '../../assets/map-pin.svg'
import api from '../../services/api'
import DataCepType from '../../types/DataCepType'
import { CepContext } from '../../contexts/CepContext'
import { cepIsValid } from '../../utils/cepIsValid'
import { handleEmptyData } from '../../utils/handleEmptyData'


function Header() {
  const [cep, setCep] = useState('')
  const { updateDataCep } = useContext(CepContext)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!cepIsValid(cep)) {
      alert('Por favor, insira o CEP com 8 dígitos (números)')
    } else {
      const responseApi: DataCepType = await api
        .get(`${cep}/json/unicode`)
        .then((response) => response.data)

      // Caso a API não encontre o CEP buscado, ira retornar um objeto { erro: true }
      if (responseApi?.erro) {
        alert(`CEP ${cep} não encontrado`)
      } else {
        const formattedResponseApi: DataCepType = handleEmptyData(responseApi)

        updateDataCep(formattedResponseApi)
      }

    }
  }

  function handleChangeInputCep(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target

    setCep(value)
  }

  return (
    <Wrapper>
      <ContainerHeader>
        <Title>ViaCEP</Title>
        <Form onSubmit={handleSubmit}>
          <div>
            <InputCep
              type="text"
              placeholder="Digite um CEP (somente números) para pesquisar"
              onChange={handleChangeInputCep}
              value={cep}
              maxLength={8}
              size={8}
              required
            />
            <ImgMapPin src={MapPinImg} alt="Localização" />
          </div>
          <ButtonPrimary type="submit">BUSCAR</ButtonPrimary>
        </Form>
      </ContainerHeader>
    </Wrapper>
  )
}

export default Header
