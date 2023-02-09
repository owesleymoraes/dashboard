import React, { useMemo, useState, useEffect } from "react";
import * as Styled from './styles'
import { useParams } from 'react-router-dom'
import gains from '../../repositories/gains'
import expenses from '../../repositories/expenses'
import { Content } from "../../components/Content";
import { SelectInput } from "../../components/SelectInput";
import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { formatCurrent, formatDate } from "../../utils/formatCurrent";

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


    const title = useMemo(() => {
        return type === 'entry-balance' ? 'Entradas' : 'Saídas'
    }, [type])


    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses
    }, [type])


    const lineColor = useMemo(() => {
        return type === 'entry-balance' ? '#F7931B' : '#E44C4E'
    }, [type])

    const months = [
        { value: 1, label: 'Janeiro' },
        { value: 4, label: 'Maio' },
        { value: 7, label: 'Julho' },

    ]

    const years = [
        { value: 2019, label: 2019 },
        { value: 2018, label: 2018 },
        { value: 2020, label: 2020 },
    ]

    useEffect(() => {
        const dateFilter = listData.filter(item => {
            const date = new Date(item.date)
            const month = String(date.getMonth() + 1)
            const year = String(date.getFullYear())

            return month === monthSelected
                && year === yearSelected
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
    }, [listData, monthSelected, yearSelected])

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
                <Styled.ButtonFilters colorTag={'#E44C4E'}>
                    Recorrentes
                </Styled.ButtonFilters>
                <Styled.ButtonFilters colorTag={'#4E41F0'}>
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