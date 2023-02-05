import styled from 'styled-components'

export const ContainerHistoryFinanceCard = styled.li`
display: flex;
position: relative;
justify-content: space-between;
align-items: center;
background-color: ${props => props.theme.colors.tertiary};
border-radius: 5px;
margin: 10px 0;
padding: 12px 10px;
list-style: none;
cursor: pointer;
transition: all .3s;

&:hover {
    opacity: .7;
    transform: translateX(10px);
}

`

export const Tag = styled.div<{ color: string }>`
position: absolute;
left: 0;
width: 10px;
height: 60%;
background-color: ${props => props.color};

`

export const WapperLabel = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 10px;
;
`

export const Title = styled.span`

`

export const Subtitle = styled.small``

export const Amount = styled.h3``


