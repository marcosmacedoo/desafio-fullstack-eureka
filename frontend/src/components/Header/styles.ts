import styled from 'styled-components'
import { Container } from '../../GlobalStyle'

export const Wrapper = styled.header`
  padding-top: 2.4rem;
  width: 100%;
  height: 16.8rem;
  background: var(--primary);
`

export const ContainerHeader = styled(Container)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

export const Title = styled.h1`
  font-size: 3.6rem;
  color: var(--secondary-dark);
`

export const Form = styled.form`
  height: 6.4rem;
  width: 100%;
  position: absolute;
  bottom: -22%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  & > div {
    height: 100%;
    width: 80%;
    position: relative;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      height: 6rem;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    gap: 2rem;
    bottom: -75%;
  }
`

export const InputCep = styled.input`
  padding: 1rem 2.4rem 1rem 6.4rem;
  height: 100%;
  width: 100%;
  box-shadow: 0px 55px 141px rgba(138, 124, 4, 0.05),
    0px 16.5809px 42.5074px rgba(138, 124, 4, 0.0325794),
    0px 6.88685px 17.6554px rgba(138, 124, 4, 0.025),
    0px 2.49084px 6.38561px rgba(138, 124, 4, 0.0174206);
  border-radius: 6px;
  font-size: 1.8rem;
  font-weight: 400;
  color: var(--gray-1);
  transition: border 0.2s;

  &::placeholder {
    color: var(--gray-3);
  }
`

export const ImgMapPin = styled.img`
  position: absolute;
  left: 2.4rem;
  height: 2.4rem;
  width: 2.4rem;

  @media (max-width: 768px) {
    height: 2rem;
    width: 2rem;
  }
`

export const ButtonPrimary = styled.button`
  background: var(--secondary);
  height: 100%;
  width: 20%;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--white-light);
  letter-spacing: 1px;
  border-radius: 6px;
  box-shadow: 0px 112px 257px rgba(5, 6, 131, 0.11),
    0px 46.7909px 107.368px rgba(5, 6, 131, 0.079074),
    0px 25.0167px 57.4043px rgba(5, 6, 131, 0.0655718),
    0px 14.0241px 32.1804px rgba(5, 6, 131, 0.055),
    0px 7.44811px 17.0908px rgba(5, 6, 131, 0.0444282),
    0px 3.09933px 7.11185px rgba(5, 6, 131, 0.030926);
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.6);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 6rem;
  }
`
