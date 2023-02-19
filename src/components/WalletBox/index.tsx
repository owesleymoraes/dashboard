import React from "react";
import CountUp from 'react-countup';
import { Icon } from "../Icon";
import * as Styled from "./styles";

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
  return (
    <Styled.ContainerWallitBox color={color}>
      <Styled.HeaderWallitBox>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Amount>
          <CountUp
            end={amount}
            prefix={"R$ "}
            separator={"."}
            decimal=","
            decimals={2}
          />
        </Styled.Amount>
      </Styled.HeaderWallitBox>
      <Styled.Icon>
        <Icon name={nameIcon} height={iconHeight} width={iconWidth} />
      </Styled.Icon>
      <Styled.FooterLabel>{footerLabel}</Styled.FooterLabel>
    </Styled.ContainerWallitBox>
  );
};
