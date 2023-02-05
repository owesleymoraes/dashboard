import styled from 'styled-components'

export const ContainerListPaige = styled.div``

export const Filters = styled.div`
display: flex;
width: 100%;
justify-content: center;
margin-bottom: 30px;

`

export const ButtonFilters = styled.button<{ colorTag: string }>`
font-size: 18px;
font-weight: 500;
background: none;
color: ${props => props.theme.colors.white};
margin: 0 10px;
transition: opacity .3s;

&:hover{
    opacity: .7;
}

&::after {
    content: '';
    display: block;
    width: 55px;
    margin: 0 auto;
    border-bottom: 10px solid ${props => props.colorTag};
}
`