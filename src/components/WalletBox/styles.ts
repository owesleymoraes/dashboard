import styled from "styled-components";

export const ContainerWallitBox = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 32%;
  height: 150px;
  margin: 10px 0;
  background-color: ${(color) => color.color};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  padding: 10px 20px;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderWallitBox = styled.div``;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const Amount = styled.h1``;

export const FooterLabel = styled.small`
  font-size: 12px;
  position: absolute;
  bottom: 10px;
`;

export const Icon = styled.div`
  position: absolute;
  top: -10px;
  right: -30px;
  opacity: 0.3;
`;
