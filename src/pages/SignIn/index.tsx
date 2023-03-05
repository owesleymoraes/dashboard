import React, { useState } from "react";
import * as Styled from "./styles";
import { Input } from "./component/input";
import { Button } from "./component/button";
import { Logo } from "../../components/Icon/Icons/Logo";
import { useAuth } from "../../hooks/auth";

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();

  return (
    <Styled.ContainerSignIn>
      <Styled.LogoLogin>
        <Logo width={36} height={36} />
        <Styled.LabelLogo>Minha carteira</Styled.LabelLogo>
      </Styled.LogoLogin>
      <Styled.Form onSubmit={() => signIn(email, password)}>
        <Styled.FormTitle>Entrar</Styled.FormTitle>
        <Input
          type="email"
          required
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          required
          placeholder="senha"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button nameButton="Acessar" />
      </Styled.Form>
    </Styled.ContainerSignIn>
  );
};
