import styled from 'styled-components'

export const Container = styled.div`
grid-area: CT;
color: ${props => props.theme.colors.white};
background-color: ${props => props.theme.colors.primary};
padding: 25px;

// utilizando toda altura da tela porém retirando a altura do header
height: calc(100vh - 70px);
overflow-y: scroll;

::-webkit-scrollbar {
width: 10px;
}

// scroll interno
::-webkit-scrollbar-thumb {
background-color: ${props => props.theme.colors.secundary};
border-radius: 10px;
}

// scroll da página
::-webkit-scrollbar-track {
background-color: ${props => props.theme.colors.tertiary};
}

`