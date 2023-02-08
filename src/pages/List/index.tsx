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
    const [data, setData] = useState<IData[]>([])
    const { type } = useParams()


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
        { value: 7, label: 'Julho' },
        { value: 8, label: 'Agosto' },
        { value: 9, label: 'Setembro' },
    ]

    const years = [
        { value: 2023, label: 2023 },
        { value: 2022, label: 2022 },
        { value: 2021, label: 2021 },
    ]

    useEffect(() => {
        const response = listData.map(item => {
            return {
                description: item.description,
                amountFormatted: formatCurrent(Number(item.amount)),
                frequency: item.frequency,
                dataFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? "#4E41F0" : '#E44C4E'
            }
        })
        setData(response)
    }, [listData])

    return (
        <Styled.ContainerListPaige>
            <ContentHeader title={title} lineColor={lineColor} >
                <SelectInput options={months} />
                <SelectInput options={years} />
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