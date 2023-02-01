import styled from 'styled-components'

export const Container = styled.div`
display: flex;
align-items: center ;

`

export const Label = styled.label`
position: relative;
width: 82px;
height: 41px;
cursor: pointer;
margin: 0px 7px;
`

export const Input = styled.input`
position: relative;
z-index: 1;
appearance: none;

:checked ~ span {
    background-color: ${props => props.theme.colors.info};
}

:checked ~ span i {
    background-color: ${props => props.theme.colors.secundary};
    left: 40px;
}

`

export const Span = styled.span`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: ${props => props.theme.colors.warning};
border-radius: 80px ;
transition: 0.5s ;

`

export const Icon = styled.i`
top: 2px;
left: 4px;
position: absolute ;
width: 36px;
height: 36px;
background-color: ${props => props.theme.colors.secundary};
border-radius: 50px;
transition: 0.5s;
`

export const ToggleLabel = styled.div`
font-size: 24px ;
color: ${props => props.theme.colors.white} ;
`