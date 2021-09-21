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

function Header() {
  const [cep, setCep] = useState('')
  const { updateDataCep } = useContext(CepContext)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!cepIsValid(cep)) {
      alert('Por favor, insira o CEP com 8 dígitos (somente números)')
    } else {
      let dataCepApi: DataCepType = {}

      try {
        const responseApi = await api
          .get(`cep/${cep}`)

        dataCepApi = responseApi.data

        // Caso a API não encontre o CEP buscado, ira retornar um objeto { erro: true }
        if (dataCepApi?.erro) {
          alert(`CEP ${cep} não encontrado`)
        } else {
          updateDataCep(dataCepApi)
        }
      } catch {
        alert('Erro ao realizar consulta de CEP')
        console.error('Erro ao consultar a API')
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
