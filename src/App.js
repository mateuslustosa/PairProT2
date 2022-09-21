import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
text-align: center;
width: 100vw;
height: 20vh;
background-color: aquamarine;
display: flex;
justify-content: center;
align-items: center;
`

export default function App() {
  return (
    <Header>
      <h1>Oi pessoal</h1>
    </Header>
  )
}
