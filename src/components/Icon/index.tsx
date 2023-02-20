import React from "react";
import { Sad } from "./Icons/Sad";
import { Logo } from "./Icons/Logo";
import { Happy } from "./Icons/Happy";
import { Dollar } from "./Icons/Dollar";
import { ArrowUp } from "./Icons/ArrowUp";
import { ArrowDown } from "./Icons/ArrowDown";

export interface IconsProps {
  /**
   * Variável referente a altura do ícone
   */
  height?: number;
  /**
   * Variável referente a altura do ícone
   */
  width?: number;

  /**
   * Variavel de nomes de cada ícone.
   */
  name:
    | "arrowDown"
    | "arrowUp"
    | "dollar"
    | "happy"
    | "sad"
    | "logo"
    | "grinning";
}

export const Icon: React.FC<IconsProps> = ({
  name,
  width = 32,
  height = 32,
}) => {
  switch (name) {
    case "arrowDown":
      return <ArrowDown width={width} height={height} />;

    case "arrowUp":
      return <ArrowUp width={width} height={height} />;

    case "dollar":
      return <Dollar width={width} height={height} />;

    case "happy":
      return <Happy width={width} height={height} />;

    case "sad":
      return <Sad width={width} height={height} />;

    case "grinning":
      return <Sad width={width} height={height} />;

    case "logo":
      return <Logo width={width} height={height} />;

    default:
      return <div>icon not found</div>;
  }
};
