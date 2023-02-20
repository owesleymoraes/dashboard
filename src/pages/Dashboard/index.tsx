import React, { useMemo, useState } from "react";
import * as Styled from "./styles";

import listMonths from "../../utils/months";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import { WalletBox } from "../../components/WalletBox";
import { MessageBox } from "../../components/MessageBox";
import { SelectInput } from "../../components/SelectInput";
import { ContentHeader } from "../../components/ContentHeader";
import { PieChartGraph } from "../../components/PieChartGraph";

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

  const totalExpenses = useMemo(() => {
    let total: number = 0;
    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (error) {
          throw new Error("Invalid amount");
        }
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;
    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount);
        } catch (error) {
          throw new Error("Invalid amount");
        }
      }
    });
    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses;
  }, [totalGains, totalExpenses]);

  const finalResultOfAccounts = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste!",
        description: "Neste mês, você gastou mais do que deveria.",
        footerText: "Verifique seus gastos, e corte gastos desnecessários.",
        nameIcon: "sad",
      };
    } else if (totalBalance === 0) {
      return {
        title: "Ufa, por pouco!",
        description:
          "Neste mês, neste mês gastou exatamente a quantidade que ganhou.",
        footerText:
          "Tenha cuidado na próxima vez tente poupar mais seu dinheiro.",
        nameIcon: "grinning",
      };
    } else {
      return {
        title: "Muito Bem!",
        description: "Sua carteira está positiva!",
        footerText: "Continue assim. Considere investir o seu saldo!",
        nameIcon: "happy",
      };
    }
  }, [totalBalance]);

  const { title, description, footerText, nameIcon } = finalResultOfAccounts;

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;
    const gainsPercentual = (totalGains / total) * 100;
    const expensesPercentual = (totalExpenses / total) * 100;

    const data = [
      {
        name: "Entradas",
        value: totalGains,
        percent: Number(gainsPercentual.toFixed(1)),
        color: "#F7931B",
      },
      {
        name: "Saídas",
        value: totalExpenses,
        percent: Number(expensesPercentual.toFixed(1)),
        color: "#E44C4E",
      },
    ];
    return data;
  }, [totalGains, totalExpenses]);

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
          amount={totalBalance}
          footerLabel={"atualizado baseado nas entradas e saídas"}
          nameIcon={"dollar"}
          color={"#4E41F0"}
          iconHeight={160}
          iconWidth={140}
        />
        <WalletBox
          title="entradas"
          amount={totalGains}
          footerLabel={"atualizado baseado nas entradas e saídas"}
          nameIcon={"arrowUp"}
          color={"#F7931B"}
          iconHeight={170}
          iconWidth={120}
        />
        <WalletBox
          title="saídas"
          amount={totalExpenses}
          footerLabel={"atualizado baseado nas entradas e saídas"}
          nameIcon={"arrowDown"}
          color={"#FF6961"}
          iconHeight={170}
          iconWidth={120}
        />
        <MessageBox
          title={title}
          description={description}
          footerText={footerText}
          nameIcon={nameIcon}
        />
        <PieChartGraph data={relationExpensesVersusGains} />
      </Styled.ContentDashboard>
    </Styled.ContainerDashboard>
  );
};
