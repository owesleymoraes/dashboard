import styled from "styled-components";

export const ContainerMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
  height: 260px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  margin: 10px 0;
  padding: 30px 20px;
`;

export const Header = styled.div``;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const title = styled.h1``;

export const IconMessageBox = styled.div`
margin-left: 4px;
`;

export const Paragrafo = styled.p`
  font-size: 18px;
`;

export const Footer = styled.div``;

export const LabelFooter = styled.span``;
