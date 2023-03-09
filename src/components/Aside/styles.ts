import styled, { css } from "styled-components";

export const Container = styled.div<{ menuIsOpen: boolean }>`
  position: relative;
  grid-area: AS;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secundary};
  border-right: 1px solid ${(props) => props.theme.colors.gray};
  padding-left: 20px;

  @media (max-width: 600px) {
    padding-left: 8px;
    position: fixed;
    z-index: 2;
    height: ${(props) => (props.menuIsOpen ? "100vh" : "70px")};
    overflow: hidden;
    width: 170px;

    ${(props) =>
      !props.menuIsOpen &&
      css`
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.gray};
      `}
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70px;
`;

export const LogoImg = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

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
  margin-left: 8px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ToggleMenu = styled.button`
  display: none;
  width: 32px;
  height: 32px;
  border-radius: 5px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.warning};
  color: ${(props) => props.theme.colors.white};

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  @media(max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }


`;
