import React from "react";
import * as Styled from "./styles";
import { useTheme } from "../../hooks/theme";

interface ToggleProps {
  labelLeft?: string;
  labelRight?: string;
}

export const Toggle: React.FC<ToggleProps> = ({ labelLeft, labelRight }) => {
  const { toggleTheme, theme } = useTheme();
  const controlBackgroundToggle =
    theme.title === "light" ? "#252A48" : "#F7933B";
  const controlMoveToggle = theme.title === "light" ? 2 : 34;

  return (
    <Styled.Container>
      <Styled.ToggleLabel>{labelLeft}</Styled.ToggleLabel>
      <Styled.Label>
        <Styled.Button onClick={toggleTheme} />
        <Styled.Span controlBackground={controlBackgroundToggle}>
          <Styled.Icon controlMovement={controlMoveToggle} />
        </Styled.Span>
      </Styled.Label>
      <Styled.ToggleLabel>{labelRight}</Styled.ToggleLabel>
    </Styled.Container>
  );
};
