import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  position: relative;
  width: 60px;
  height: 28px;
  cursor: pointer;
  margin: 0px 7px;
`;

export const Button = styled.button`
  position: relative;
  z-index: 1;
  appearance: none;
`;

export const Span = styled.span<{ controlBackground: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.controlBackground};
  border-radius: 80px;
  transition: 0.5s;
`;

export const Icon = styled.i<{ controlMovement: number }>`
  top: 2px;
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.theme.colors.secundary};
  left: ${(props) => props.controlMovement + `px`};

  border-radius: 50px;
  transition: 0.5s;
`;
export const ToggleLabel = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
`;
