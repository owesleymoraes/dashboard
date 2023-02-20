import React from "react";
import * as Styled from "./styles";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

interface PieChartGraphProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

export const PieChartGraph: React.FC<PieChartGraphProps> = ({ data }) => (
  <Styled.ContainerPieChart>
    <Styled.SideLeft>
      <Styled.Header>Relação</Styled.Header>
      <Styled.ContainerLegend>
        {data.map((item, index) => {
          return (
            <Styled.Legend key={index}>
              <Styled.Percentual color={item.color}>
                {item.percent}
              </Styled.Percentual>
              <Styled.Label>{item.name}</Styled.Label>
            </Styled.Legend>
          );
        })}
      </Styled.ContainerLegend>
    </Styled.SideLeft>
    <Styled.SideRight>
      <ResponsiveContainer>
        <PieChart>
         <Pie data={data} dataKey='percent'>
         {data.map((item, index) => (
              <Cell key={index} fill={item.color} />
            ))}
          
         </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Styled.SideRight>
  </Styled.ContainerPieChart>
);
