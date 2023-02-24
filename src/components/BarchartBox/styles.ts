import styled from "styled-components";

export const ContainerBarchartBox = styled.div`
  display: flex;
  width: 48%;
  min-height: 260px;
  margin: 10px 0;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
`;

export const SideLeft = styled.aside`
  flex: 1;
  padding: 30px 20px;
`;

export const LabelBarchart = styled.h2`
  padding-left: 20px;
  margin-bottom: 10px;
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
  padding-left: 20px;
`;

export const Percentual = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  background-color: ${(props) => props.color};
`;

export const Label = styled.span`
  margin-left: 8px;
`;

export const SideRight = styled.main`
  display: flex;
  justify-content: center;
  padding-top: 36px;
  flex: 1;
  min-height: 150px;
`;
