import React, { useMemo, useState } from "react";
import * as Styled from "./styles";

import listMonths from "../../utils/months";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";

import { WalletBox } from "../../components/WalletBox";
import { HistoryBox } from "../../components/HistoryBox";
import { MessageBox } from "../../components/MessageBox";
import { SelectInput } from "../../components/SelectInput";
import { ContentHeader } from "../../components/ContentHeader";
import { PieChartGraph } from "../../components/PieChartGraph";
import { BarchartBox } from "../../components/BarchartBox";

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

  // Situação gráfica interativa de como anda as contas
  const finalResultOfAccounts = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste!",
        description: "Neste mês, você gastou mais do que deveria.",
        footerText: "Verifique seus gastos, e corte gastos desnecessários.",
        nameIcon: "sad",
      };
    } else if (totalBalance === 0 && totalExpenses === 0) {
      return {
        title: "Ufa, não houve despesa!",
        description: "Neste mês, você não possui nem despesas nem receitas.",
        footerText: "Procure ter mais receitas em meses com menos despesas.",
        nameIcon: "grinning",
      };
    } else if (totalBalance === 0) {
      return {
        title: "Ufa, por pouco!",
        description:
          "Neste mês, você gastou exatamente a quantidade que ganhou.",
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
  }, [totalBalance, totalExpenses]);

  const { title, description, footerText, nameIcon } = finalResultOfAccounts;

  //gráfico de pizza
  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses;
    const gainsPercentual = (totalGains / total) * 100;
    const expensesPercentual = (totalExpenses / total) * 100;

    const percentGains = Number(gainsPercentual.toFixed(1));
    const percentExpenses = Number(expensesPercentual.toFixed(1));

    const data = [
      {
        name: "Entradas",
        value: totalGains,
        percent: percentGains ? percentGains : 0,
        color: "#F7931B",
      },
      {
        name: "Saídas",
        value: totalExpenses,
        percent: percentExpenses ? percentExpenses : 0,
        color: "#E44C4E",
      },
    ];
    return data;
  }, [totalGains, totalExpenses]);

  // gráfico de linhas
  const historyData = useMemo(() => {
    return listMonths
      .map((_, indexMonth) => {
        let amountEntry = 0;
        gains.forEach((gain) => {
          const date = new Date(gain.date);
          const gainMonth = date.getMonth();
          const gainYear = date.getFullYear();

          if (gainMonth === indexMonth && gainYear === yearSelected) {
            try {
              amountEntry += Number(gain.amount);
            } catch {
              throw new Error("amountEntry invalid.");
            }
          }
        });

        let amountOutput = 0;
        expenses.forEach((expenses) => {
          const date = new Date(expenses.date);
          const expensesMonth = date.getMonth();
          const expensesYear = date.getFullYear();

          if (expensesMonth === indexMonth && expensesYear === yearSelected) {
            try {
              amountOutput += Number(expenses.amount);
            } catch {
              throw new Error("amountOutput invalid.");
            }
          }
        });
        return {
          monthNumber: indexMonth,
          month: listMonths[indexMonth].substring(0, 3),
          amountEntry,
          amountOutput,
        };
      })
      .filter((item) => {
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();

        return (
          (yearSelected === currentYear && item.monthNumber <= currentMonth) ||
          yearSelected < currentYear
        );
      });
  }, [yearSelected]);

  // gráfico de barras - Saídas
  const relationExpensevesRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    expenses
      .filter((expenses) => {
        const date = new Date(expenses.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return month === monthSelected && year === yearSelected;
      })
      .forEach((expenses) => {
        if (expenses.frequency === "recorrente") {
          return (amountRecurrent += Number(expenses.amount));
        }

        if (expenses.frequency === "eventual") {
          return (amountEventual += Number(expenses.amount));
        }
      });

    const total = amountRecurrent + amountEventual;
    const percentCurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
    const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent,
        percent: percentCurrent ? percentCurrent : 0,
        color: "#F7931B",
      },

      {
        name: "Eventual",
        amount: amountEventual,
        percent: percentEventual ? percentEventual : 0,
        color: "#E44C4E",
      },
    ];
  }, [monthSelected, yearSelected]);

  // gráfico de barras - Entradas
  const relationGainsRecurrentVersusEventual = useMemo(() => {
    let amountRecurrent = 0;
    let amountEventual = 0;

    gains
      .filter((gains) => {
        const date = new Date(gains.date);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return month === monthSelected && year === yearSelected;
      })
      .forEach((gains) => {
        if (gains.frequency === "recorrente") {
          return (amountRecurrent += Number(gains.amount));
        }

        if (gains.frequency === "eventual") {
          return (amountEventual += Number(gains.amount));
        }
      });

    const total = amountRecurrent + amountEventual;
    const percentCurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
    const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

    return [
      {
        name: "Recorrentes",
        amount: amountRecurrent,
        percent: percentCurrent ? percentCurrent : 0,
        color: "#F7931B",
      },

      {
        name: "Eventual",
        amount: amountEventual,
        percent: percentEventual ? percentEventual : 0,
        color: "#E44C4E",
      },
    ];
  }, [monthSelected, yearSelected]);

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
        <HistoryBox
          data={historyData}
          lineColorEntry="#F7931B"
          lineColorOutput="#E44C4E"
        />
        <BarchartBox
          data={relationExpensevesRecurrentVersusEventual}
          title="Saídas"
        />

        <BarchartBox
          data={relationGainsRecurrentVersusEventual}
          title="Entradas"
        />
      </Styled.ContentDashboard>
    </Styled.ContainerDashboard>
  );
};
