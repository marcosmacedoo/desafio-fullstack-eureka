import { createContext, useState, useEffect } from 'react'
import CepProviderPropsType from '../types/CepProviderPropsType'
import DataCepType from '../types/DataCepType'

type CepContextProps = {
  dataCep: DataCepType | undefined
  updateDataCep: (newDataCep: DataCepType) => void
}

export const CepContext = createContext({} as CepContextProps)

export function CepProvider({ children }: CepProviderPropsType) {
  const [dataCep, setDataCep] = useState<DataCepType>()

  useEffect(() => console.log(dataCep), [dataCep])


  function updateDataCep(newDataCep: DataCepType) {
    setDataCep(newDataCep)
  }

  return (
    <CepContext.Provider value={{ dataCep, updateDataCep }}>
      { children }
    </CepContext.Provider>
  )
}
