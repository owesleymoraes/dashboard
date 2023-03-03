import React from "react";
import * as Styled from './styles'

interface ButtonProps {
  nameButton: string;
}

export const Button: React.FC<ButtonProps> = ({ nameButton }) => {
  return <Styled.ContainerButton>{nameButton}</Styled.ContainerButton>;
};
