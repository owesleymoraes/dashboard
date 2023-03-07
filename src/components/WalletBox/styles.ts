import styled from "styled-components";

export const ContainerWalletBox = styled.div<{ color: string }>`
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

  //Iphone 6/7/8plus 414x736
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderWalletBox = styled.div``;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 500;

  //Iphone 6/7/8plus 414x736 || iphone X 375x812 || ipad 768x1024
  @media (max-width: 770px) {
    font-size: 14px;
  }
`;

export const Amount = styled.h1`
  //Iphone 6/7/8plus 414x736 || iphone X 375x812 || ipad 768x1024
  @media (max-width: 770px) {
    word-wrap: break-word;
    font-size: 20px;
  }

  //Iphone 6/7/8plus 414x736
  @media (max-width: 420px) {
    display: flex;
    align-items: center;
  }
`;

export const SymbolMoney = styled.strong`
  //Iphone 6/7/8plus 414x736 || iphone X 375x812 || ipad 768x1024
  @media (max-width: 770px) {
    display: inline-block;
    font-size: 16px;
    width: 100%;
  }

  //Iphone 6/7/8plus 414x736
  @media (max-width: 420px) {
    position: initial;
    width: auto;
    font-size: 16px;

    :after {
      display: inline-block;
      content: " ";
      width: 2px;
      
    }
  }
`;

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
