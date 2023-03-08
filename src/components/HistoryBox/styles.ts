import styled from "styled-components";

export const ContainerHistoryBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 340px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};
  margin: 10px 0;
  padding: 30px 20px;
  border-radius: 8px;
`;

export const HeaderCard = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1280px) {
    flex-direction: column;
  }
`;

export const LabelHeader = styled.h2`
  margin-bottom: 20px;
  padding-left: 20px;
`;

export const LegendContainer = styled.ul`
  display: flex;
  list-style: none;
  padding-right: 20px;
`;

export const Legend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  margin-left: 8px;
`;

export const Percentual = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  background-color: ${(props) => props.color};
  margin-left: 8px;

  @media (max-width: 1280px) {
    width: 36px;
    height: 36px;
  }
`;

export const Indicator = styled.span`
  margin-left: 4px;
`;

export const ChartContainer = styled.div`
  flex: 1;
  height: 260px;
`;
