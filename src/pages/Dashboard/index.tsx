import React, { useMemo, useState } from "react";
import * as Styled from "./styles";
import listMonths from "../../utils/months";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import { WalletBox } from "../../components/WalletBox";
import { SelectInput } from "../../components/SelectInput";
import { ContentHeader } from "../../components/ContentHeader";
import { MessageBox } from "../../components/MessageBox";

export const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

  const months = useMemo(() => {
    return listMonths.map((months, index) => {
      return {
        value: index + 1,
        label: months,
      };
    });
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, []);

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error("Invalid month value. Is accept 0 - 24.");
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error("Invalid month value.");
    }
  };

  return (
    <Styled.ContainerDashboard>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />

        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>

      <Styled.ContentDashboard>
        <WalletBox
          title="saldo"
          amount={150}
          footerLabel={"atualizado baseado nas entradas e saídas"}
          nameIcon={"dollar"}
          color={"#4E41F0"}
          iconHeight={160}
          iconWidth={140}
        />

        <WalletBox
          title="entradas"
          amount={5000}
          footerLabel={"atualizado baseado nas entradas e saídas"}
          nameIcon={"arrowUp"}
          color={"#F7931B"}
          iconHeight={170}
          iconWidth={120}
        />

        <WalletBox
          title="saídas"
          amount={4850}
          footerLabel={"atualizado baseado nas entradas e saídas"}
          nameIcon={"arrowDown"}
          color={"#FF6961"}
          iconHeight={170}
          iconWidth={120}
        />
        <MessageBox
          title="Muito Bem!"
          description="Sua carteira está positiva!"
          footerText="Continue assim. Considere investir o seu saldo!"
          nameIcon="happy"
        />
      </Styled.ContentDashboard>
    </Styled.ContainerDashboard>
  );
};
