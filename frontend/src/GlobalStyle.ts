import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white-dark: #FAFAF7;
    --white-light: #ffffff;
    --primary: #FFE14D;
    --primary-light: #F6EDC2;
    --primary-dark: #756209;
    --secondary: #4A4BFF;
    --secondary-dark: #0001B3;
    --gray-1: #41403E;
    --gray-2: #898987;
    --gray-3: #93928F;
    --gray-4: #A1A1A1;
  }

  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background: var(--white-dark);
  }

  input, button {
    border: 0;
  }

  input {
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    html {
      font-size: 59%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 55%;
    }
  }
`

export const Main = styled.main`
  height: 100%;
`

export const Container = styled.div`
  margin: 0 auto;
  width: min(90vw, 107rem);
`

export const SectionAddress = styled(Container)`
  margin: 20rem auto;
  overflow-x: auto;
`

export const TableAddress = styled.table`
  width: 100%;
  text-align: left;
  background: var(--white-light);
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  thead tr th {
    padding: 1.6rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: var(--gray-4);
  }

  th {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  tbody tr td {
    padding: 1.6rem;
    font-size: 1.6rem;
    color: var(--gray-1);
  }
`
