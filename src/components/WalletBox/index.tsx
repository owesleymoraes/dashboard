import React from "react";
import { Icon } from "../Icon";
import * as Styled from "./styles";
import CountUp from "react-countup";

interface WalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  nameIcon: "arrowDown" | "arrowUp" | "dollar";
  color: string;
  iconHeight?: number;
  iconWidth?: number;
}

export const WalletBox: React.FC<WalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  color,
  nameIcon,
  iconHeight,
  iconWidth,
}) => {
  //wallet
  return (
    <Styled.ContainerWalletBox color={color}>
      <Styled.HeaderWalletBox>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Amount>
          <Styled.SymbolMoney>R$ </Styled.SymbolMoney>
          <CountUp end={amount} separator={"."} decimal="," decimals={2} />
        </Styled.Amount>
      </Styled.HeaderWalletBox>
      <Styled.Icon>
        <Icon name={nameIcon} height={iconHeight} width={iconWidth} />
      </Styled.Icon>
      <Styled.FooterLabel>{footerLabel}</Styled.FooterLabel>
    </Styled.ContainerWalletBox>
  );
};
