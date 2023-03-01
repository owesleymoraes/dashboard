import React from "react";
import { Aside } from "../Aside";
import * as Styled from "./styles";
import { Content } from "../Content";
import { MainHeader } from "../MainHeader";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Styled.Container>
      <MainHeader />
      <Aside />
      <Content children={children} />
    </Styled.Container>
  );
};
