import React from "react";
import * as Styled from "./styles";
import { useTheme } from "../../hooks/theme";

export const Toggle: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const controllBackgroundToggle =
    theme.title === "light" ? "#252A48" : "#F7933B";
  const controllMoveToggle = theme.title === "light" ? 2 : 34;

  return (
    <Styled.Container>
      <Styled.ToggleLabel>Light</Styled.ToggleLabel>
      <Styled.Label>
        <Styled.Button onClick={toggleTheme} />
        <Styled.Span controllBackground={controllBackgroundToggle}>
          <Styled.Icon controllMovement={controllMoveToggle} />
        </Styled.Span>
      </Styled.Label>
      <Styled.ToggleLabel>Dark</Styled.ToggleLabel>
    </Styled.Container>
  );
};
