import React, { InputHTMLAttributes } from "react";
import * as Styled from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <Styled.ContainerInput {...rest} />;
};
