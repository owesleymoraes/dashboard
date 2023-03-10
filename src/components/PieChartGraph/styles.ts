import styled, { keyframes } from "styled-components";

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

export const ContainerPieChart = styled.div`
  display: flex;
  width: 48%;
  height: 240px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  animation: ${animate} .5s;

  //Iphone 6/7/8plus 414x736 || iphone X 375x812 || ipad 768x1024
  @media (max-width: 770px) {
    display: flex;
    width: 100%;
  }
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;

  @media (max-width: 1345px) {
    padding: 0 16px 4px;
    margin-bottom: 8px;
  }
`;

export const Header = styled.h2`
  margin-bottom: 20px;

  @media (max-width: 1345px) {
    margin-top: 16px;
    margin-bottom: 8px;
  }

  @media (max-width: 420px) {
    margin-bottom: 8px;
    padding-top: 16px;
  }
`;

export const ContainerLegend = styled.ul`
  list-style: none;
  height: 160px;
  padding-right: 16px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  // scroll interno
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secundary};
    border-radius: 10px;
  }

  // scroll da página
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.tertiary};
  }

  @media (max-width: 1345px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Legend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  @media (max-width: 1345px) {
    font-size: 12px;
    margin: 4px 0;
  }
`;

export const Percentual = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  background-color: ${(props) => props.color};

  @media (max-width: 1345px) {
    height: 36px;
    width: 36px;
    line-height: 36px;
  }
`;

export const Label = styled.span`
  margin-left: 8px;

  @media (max-width: 1345px) {
    margin-left: 8px;
  }
`;

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;

  @media (max-width: 1345px) {
    height: 100%;
  }
`;
