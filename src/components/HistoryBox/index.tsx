import React from "react";
import * as Styled from "./styles";
import { formatCurrent } from "../../utils/formatCurrent";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface HistoryBoxProps {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[];
  lineColorEntry: string;
  lineColorOutput: string;
}

export const HistoryBox: React.FC<HistoryBoxProps> = ({
  data,
  lineColorEntry,
  lineColorOutput,
}) => (
  <Styled.ContainerHistoryBox>
    <Styled.HeaderCard>
      <Styled.LabelHeader>Histórico de saldo</Styled.LabelHeader>
      <Styled.LegendContainer>
        <Styled.Legend>
          <Styled.Percentual color={lineColorEntry}>30%</Styled.Percentual>
          <Styled.Indicator>Entradas</Styled.Indicator>
        </Styled.Legend>

        <Styled.Legend>
          <Styled.Percentual color={lineColorOutput}>30%</Styled.Percentual>
          <Styled.Indicator>Saídas</Styled.Indicator>
        </Styled.Legend>
      </Styled.LegendContainer>
    </Styled.HeaderCard>
    <Styled.ChartContainer>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray={"3 3"} stroke="#CECECE" />
          <XAxis dataKey="month" stroke="#CECECE" />
          <Tooltip formatter={(value) => formatCurrent(Number(value))} />
          <Line
            type="monotone"
            dataKey="amountEntry"
            name="Entradas"
            stroke={lineColorEntry}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="amountOutput"
            name="Saídas"
            stroke={lineColorOutput}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Styled.ChartContainer>
  </Styled.ContainerHistoryBox>
);
