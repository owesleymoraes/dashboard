import React, { useMemo, useState, useEffect } from "react";
import * as Styled from "./styles";
import listMonths from "../../utils/months";
import { useParams } from "react-router-dom";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import { Content } from "../../components/Content";
import { SelectInput } from "../../components/SelectInput";
import { ContentHeader } from "../../components/ContentHeader";
import { formatCurrent, formatDate } from "../../utils/formatCurrent";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";

interface IData {
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

export const List: React.FC = () => {
  const { type } = useParams();
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );
  const [frequencyFilterSelected, setFrequencyFilterSelected] = useState<
    string[]
  >(["recorrente", "eventual"]);

  const infoDataPage = useMemo(() => {
    return type === "entry-balance"
      ? {
          title: "Entradas",
          lineColor: "#F7931B",
          dataList: gains,
        }
      : {
          title: "Saídas",
          lineColor: "#E44C4E",
          dataList: expenses,
        };
  }, [type]);

  const { title, lineColor, dataList } = infoDataPage;

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

    dataList.forEach((item) => {
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
  }, [dataList]);

  useEffect(() => {
    const dateFilter = dataList.filter((item) => {
      const date = new Date(item.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return (
        month === monthSelected &&
        year === yearSelected &&
        frequencyFilterSelected.includes(item.frequency)
      );
    });

    const response = dateFilter.map((item) => {
      return {
        description: item.description,
        amountFormatted: formatCurrent(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#4E41F0" : "#E44C4E",
      };
    });
    setData(response);
  }, [dataList, monthSelected, yearSelected, frequencyFilterSelected]);

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = frequencyFilterSelected.findIndex(
      (item) => item === frequency
    );

    if (alreadySelected >= 0) {
      const filtered = frequencyFilterSelected.filter(
        (item) => item !== frequency
      );
      console.log(`${filtered}`);
      setFrequencyFilterSelected(filtered);
    } else {
      // buscando o estados do useState anteriores com o prev.
      setFrequencyFilterSelected((prev) => [...prev, frequency]);
    }
  };

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
    <Styled.ContainerListPaige>
      <ContentHeader title={title} lineColor={lineColor}>
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

      <Styled.Filters>
        <Styled.ButtonFilters
          isClick={Boolean(frequencyFilterSelected.includes("recorrente"))}
          colorTag={"#4E41F0"}
          onClick={() => handleFrequencyClick("recorrente")}
        >
          Recorrentes
        </Styled.ButtonFilters>
        <Styled.ButtonFilters
          isClick={Boolean(frequencyFilterSelected.includes("eventual"))}
          colorTag={"#E44C4E"}
          onClick={() => handleFrequencyClick("eventual")}
        >
          Eventuais
        </Styled.ButtonFilters>
      </Styled.Filters>

      <Content>
        {data.map((item, index) => {
          return (
            <HistoryFinanceCard
              key={index}
              tagColor={item.tagColor}
              title={item.description}
              subtitle={item.dateFormatted}
              amount={item.amountFormatted}
            />
          );
        })}
      </Content>
    </Styled.ContainerListPaige>
  );
};
