import React, { useContext } from 'react'
import Header from './components/Header'
import { GlobalStyle, Main, SectionAddress, TableAddress } from './GlobalStyle'
import { CepContext } from './contexts/CepContext'

function App() {
  const { dataCep } = useContext(CepContext)

  return (
    <Main>
      <Header />
      <SectionAddress>
        <TableAddress>
          <thead>
            <tr>
              <th>UF</th>
              <th>Cidade</th>
              <th>Bairro</th>
              <th>Complemento</th>
              <th>DDD</th>
              <th>IBGE</th>
              <th>GIA</th>
              <th>SIAFI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dataCep?.uf}</td>
              <td>{dataCep?.localidade}</td>
              <td>{dataCep?.bairro}</td>
              <td>{dataCep?.complemento}</td>
              <td>{dataCep?.ddd}</td>
              <td>{dataCep?.ibge}</td>
              <td>{dataCep?.gia}</td>
              <td>{dataCep?.siafi}</td>
            </tr>
          </tbody>
        </TableAddress>
      </SectionAddress>
      <GlobalStyle />
    </Main>
  )
}

export default App
