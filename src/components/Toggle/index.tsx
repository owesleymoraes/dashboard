import React, { useState } from "react";
import * as Styled from "./styles";
import { useTheme } from "../../hooks/theme";

export const Toggle: React.FC = () => {
  const { toggleTheme} = useTheme();
 
  return (
    <Styled.Container>
      <Styled.ToggleLabel>Light</Styled.ToggleLabel>
      <Styled.Label>
        <Styled.Input type="checkbox" onChange={toggleTheme} />
        <Styled.Span>
          <Styled.Icon />
        </Styled.Span>
      </Styled.Label>
      <Styled.ToggleLabel>Dark</Styled.ToggleLabel>
    </Styled.Container>
  );
};
