import styled from "styled-components";

export const ContainerPieChart = styled.div`
  display: flex;
  width: 48%;
  height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
`;

export const SideLeft = styled.aside`
  padding: 30px 20px;
`;

export const Header = styled.h2`
  margin-bottom: 20px;
`;

export const ContainerLegend = styled.ul`
  list-style: none;
  height: 176px;
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
`;

export const Legend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const Percentual = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  background-color: ${(props) => props.color};
`;

export const Label = styled.span`
  margin-left: 8px;
`;

export const SideRight = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
`;
