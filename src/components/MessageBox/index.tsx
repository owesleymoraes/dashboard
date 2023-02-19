import React from "react";
import { Icon } from "../Icon";
import * as Styled from "./styles";

interface MessageBoxProps {
  title: string;
  description: string;
  footerText: string;
  nameIcon: string;
}

export const MessageBox: React.FC<MessageBoxProps> = ({
  title,
  description,
  footerText,
  nameIcon,
}) => {
  return (
    <Styled.ContainerMessageBox>
      <Styled.Header>
        <Styled.WrapperTitle>
          <Styled.title>{title}</Styled.title>
          <Styled.IconMessageBox>
            <Icon name={nameIcon as any} />
          </Styled.IconMessageBox>
        </Styled.WrapperTitle>

        <Styled.Paragrafo>{description}</Styled.Paragrafo>
      </Styled.Header>
      <Styled.Footer>
        <Styled.LabelFooter>{footerText}</Styled.LabelFooter>
      </Styled.Footer>
    </Styled.ContainerMessageBox>
  );
};
