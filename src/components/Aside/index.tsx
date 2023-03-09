import React, { useState } from "react";
import { Icon } from "../Icon";
import * as Styled from "./styles";
import { useAuth } from "../../hooks/auth";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from "react-icons/md";

export const Aside: React.FC = () => {
  const [toggleMenuIsOpen, setToggleMenuIsOpen] = useState<boolean>(false);
  const { signOut } = useAuth();

  const handleToggleMenu = () => {
    setToggleMenuIsOpen(!toggleMenuIsOpen);
  };

  return (
    <Styled.Container menuIsOpen={toggleMenuIsOpen}>
      <Styled.Header>
        <Styled.ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpen ? <MdClose /> : <MdMenu />}
        </Styled.ToggleMenu>
        {
          <Styled.LogoImg>
            <Icon name="logo" width={32} height={32} />
          </Styled.LogoImg>
        }
        <Styled.Title>Minha carteira</Styled.Title>
      </Styled.Header>
      <Styled.MenuContainer>
        <Styled.MenuItemLink href="/">
          <MdDashboard />
          Dashboard
        </Styled.MenuItemLink>
        <Styled.MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </Styled.MenuItemLink>
        <Styled.MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </Styled.MenuItemLink>
        <Styled.MenuItemLButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </Styled.MenuItemLButton>
      </Styled.MenuContainer>
    </Styled.Container>
  );
};
