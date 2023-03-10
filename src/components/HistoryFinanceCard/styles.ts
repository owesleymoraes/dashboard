import styled,{keyframes} from 'styled-components'

const animate = keyframes`
  0% {
    // lado direito da tela
      transform: translateX(100px);
      opacity: 0;
}
  50% {
      opacity: .3;
}

  100% {
    transform: translateX(0px);
      opacity: 1;
}
`;

export const ContainerHistoryFinanceCard = styled.li`
display: flex;
position: relative;
justify-content: space-between;
align-items: center;
background-color: ${props => props.theme.colors.tertiary};
border-radius: 10px;
margin: 10px 0;
padding: 12px 10px;
list-style: none;
cursor: pointer;
transition: all .3s;
animation: ${animate} .5s;

&:hover {
    opacity: .7;
    transform: translateX(10px);
}

`

export const Tag = styled.div<{ color: string }>`
position: absolute;
left: 0;
width: 15px;
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
font-size: 16px;
font-weight: 500;
`

export const Subtitle = styled.small``

export const Amount = styled.h3``


