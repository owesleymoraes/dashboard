import React, { useMemo, useState, useEffect } from "react";
import * as Styled from './styles'
import listMonths from '../../utils/months'
import { useParams } from 'react-router-dom'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import { Content } from "../../components/Content";
import { SelectInput } from "../../components/SelectInput";
import { ContentHeader } from "../../components/ContentHeader";
import { formatCurrent, formatDate } from "../../utils/formatCurrent";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";

interface IData {
    description: string,
    amountFormatted: string,
    frequency: string,
    dataFormatted: string,
    tagColor: string
}


export const List: React.FC = () => {
    const { type } = useParams()
    const [data, setData] = useState<IData[]>([])
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1))
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()))
    const [selectedFrequency, setSelectedFrequency] = useState<string[]>(['recorrente', 'eventual'])


    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas'
    }, [type])


    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses
    }, [type])


    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E'
    }, [type])


    const months = useMemo(() => {
        return listMonths.map((months, index) => {
            return {
                value: index + 1,
                label: months,
            }

        });
    }, [])


    const years = useMemo(() => {
        let uniqueYears: number[] = [];

        listData.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)

            }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        })

    }, [listData])


    useEffect(() => {
        const dateFilter = listData.filter(item => {
            const date = new Date(item.date)
            const month = String(date.getMonth() + 1)
            const year = String(date.getFullYear())

            return month === monthSelected
                && year === yearSelected
                && selectedFrequency.includes(item.frequency)
        })

        const response = dateFilter.map(item => {

            return {
                description: item.description,
                amountFormatted: formatCurrent(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? "#4E41F0" : '#E44C4E'
            }
        })
        setData(response)
    }, [listData, monthSelected, yearSelected, selectedFrequency])


    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = selectedFrequency.findIndex(item => item === frequency)
        console.log(`${alreadySelected}`);

        if (alreadySelected >= 0) {
            const filtered = selectedFrequency.filter(item => item !== frequency)
            console.log(`${filtered}`);
            setSelectedFrequency(filtered)
        }
        else {
            // buscando o estados do useState anteriores com o prev.
            setSelectedFrequency((prev) => [...prev, frequency])
        }

    }

    return (
        <Styled.ContainerListPaige>
            <ContentHeader title={title} lineColor={lineColor} >
                <SelectInput
                    options={months}
                    onChange={(e) => setMonthSelected(e.target.value)}
                    defaultValue={monthSelected}
                />

                <SelectInput
                    options={years}
                    onChange={(e) => setYearSelected(e.target.value)}
                    defaultValue={yearSelected}
                />
            </ContentHeader>

            <Styled.Filters>
                <Styled.ButtonFilters
                    isClick={Boolean(selectedFrequency.includes('recorrente'))}
                    colorTag={'#4E41F0'}
                    onClick={() => handleFrequencyClick('recorrente')}>
                    Recorrentes
                </Styled.ButtonFilters>
                <Styled.ButtonFilters
                    isClick={Boolean(selectedFrequency.includes('eventual'))}
                    colorTag={'#E44C4E'}
                    onClick={() => handleFrequencyClick('eventual')}
                >
                    Eventuais
                </Styled.ButtonFilters>
            </Styled.Filters>

            <Content>
                {data.map((item, index) => {
                    return (
                        < HistoryFinanceCard
                            key={index}
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dataFormatted}
                            amount={item.amountFormatted}
                        />
                    )
                })}
            </Content>
        </Styled.ContainerListPaige>
    )

}