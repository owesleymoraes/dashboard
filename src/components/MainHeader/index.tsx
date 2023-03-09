import React, { useMemo } from "react";
import * as Styled from "./styles";
import { Toggle } from "../Toggle";
import emojis from "../../utils/emojis";

export const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Styled.Container>
      <Styled.WrapperToggle>
        <Toggle labelLeft="Light" labelRight="Dark" />
      </Styled.WrapperToggle>
      <Styled.Profile>
        <Styled.Welcome>Olá,{emoji}</Styled.Welcome>
        <Styled.UserName>Wesley Sousa</Styled.UserName>
      </Styled.Profile>
    </Styled.Container>
  );
};
