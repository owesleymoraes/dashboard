import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secundary};
  border-right: 1px solid ${(props) => props.theme.colors.gray};
  padding-left: 20px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const LogoImg = styled.img``;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: ${(props) => props.theme.colors.info};
  text-decoration: none;
  transition: opacity 0.3s;
  margin: 7px 0;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 24px;
    margin-right: 8px;
  }
`;
export const MenuItemLButton = styled.button`
  font-size: 16px;
  display: flex;
  align-items: center;
  font-size: 16px;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.info};
  transition: opacity 0.3s;
  margin: 7px 0;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 24px;
    margin-right: 8px;
  }
`;

export const Title = styled.h4`
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;
`;
