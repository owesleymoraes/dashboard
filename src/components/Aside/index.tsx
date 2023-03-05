import React from "react";
import { Icon } from "../Icon";
import * as Styled from "./styles";
import { useAuth } from "../../hooks/auth";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

export const Aside: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Styled.Container>
      <Styled.Header>
        <Icon name="logo" width={32} height={32} />
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
