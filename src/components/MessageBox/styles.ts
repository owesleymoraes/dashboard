import styled from "styled-components";

export const ContainerMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 48%;
  height: 240px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  border-radius: 7px;
  margin: 10px 0;
  padding: 30px 20px;

   //Iphone 6/7/8plus 414x736 || iphone X 375x812 || ipad 768x1024
   @media (max-width: 770px) {
   width: 100%;
  }

   //Iphone 6/7/8plus 414x736
   @media (max-width: 420px) {
    width: 100%;
    height: auto;
  }
`;

export const Header = styled.div``;

export const WrapperTitle = styled.div`
  display: flex;
  flex-direction: row;
`;

export const title = styled.h1`
  //Iphone 6/7/8plus 414x736 || iphone X 375x812 || ipad 768x1024
  @media (max-width: 770px) {
    font-size: 24px;
  }
`;

export const IconMessageBox = styled.div`
  margin-left: 8px;

  //Iphone 6/7/8plus 414x736
  @media (max-width: 420px) {
    margin-left: 2px;
  }
`;

export const Paragrafo = styled.p`
  font-size: 18px;

  //Iphone 6/7/8plus 414x736 || iphone X 375x812 || ipad 768x1024
  @media (max-width: 770px) {
   font-size: 14px;
  }

   //Iphone 6/7/8plus 414x736
   @media (max-width: 420px) {
   margin-bottom: 16px;
  }
`;

export const Footer = styled.div``;

export const LabelFooter = styled.span`
  //Iphone 6/7/8plus 414x736 || iphone X 375x812 || ipad 768x1024
  @media (max-width: 770px) {
   font-size: 14px;
  }
`;
