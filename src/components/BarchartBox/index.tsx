import React from "react";
import * as Styled from "./styles";
import { formatCurrent } from "../../utils/formatCurrent";
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";

interface BarchartBoxProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

export const BarchartBox: React.FC<BarchartBoxProps> = ({ title, data }) => {
  return (
    <Styled.ContainerBarchartBox>
      <Styled.SideLeft>
        <Styled.LabelBarchart>{title}</Styled.LabelBarchart>
        <Styled.ContainerLegend>
          {data.map((item, index) => {
            return (
              <Styled.Legend key={index}>
                <Styled.Percentual color={item.color}>
                  {item.percent}%
                </Styled.Percentual>
                <Styled.Label>{item.name}</Styled.Label>
              </Styled.Legend>
            );
          })}
        </Styled.ContainerLegend>
      </Styled.SideLeft>

      <Styled.SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey={"amount"} name="valor">
              {data.map((indicator, index) => {
                return (
                  <Cell key={index} cursor="pointer" fill={indicator.color} />
                );
              })}
            </Bar>
            <Tooltip
              cursor={{ fill: "none" }}
              formatter={(value) => formatCurrent(Number(value))}
            />
          </BarChart>
        </ResponsiveContainer>
      </Styled.SideRight>
    </Styled.ContainerBarchartBox>
  );
};
