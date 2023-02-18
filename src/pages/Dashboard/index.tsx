import React, { useMemo, useState } from "react";
import * as Styled from "./styles";
import listMonths from '../../utils/months'
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import { SelectInput } from "../../components/SelectInput";
import { ContentHeader } from "../../components/ContentHeader";

export const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );

  const options = [
    { value: "Wesley", label: "Wesley" },
    { value: "Maria", label: "Maria" },
    { value: "Ana", label: "Ana" },
  ];

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
    <Styled.Container>
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
    </Styled.Container>
  );
};
