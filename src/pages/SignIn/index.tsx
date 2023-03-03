import React from "react";
import * as Styled from "./styles";
import { Input } from "./component/input";
import { Button } from "./component/button";
import { Logo } from "../../components/Icon/Icons/Logo";

export const SignIn: React.FC = () => {
  return (
    <Styled.ContainerSignIn>
      <Styled.LogoLogin>
        <Logo width={36} height={36} />
        <Styled.LabelLogo>Minha carteira</Styled.LabelLogo>
      </Styled.LogoLogin>
      <Styled.Form onSubmit={() => {}}>
        <Styled.FormTitle>Entrar</Styled.FormTitle>
        <Input type="email" required placeholder="email" />
        <Input type="password" required placeholder="senha" />
        <Button nameButton="Acessar"/>
      </Styled.Form>
    </Styled.ContainerSignIn>
  );
};
