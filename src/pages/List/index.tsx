import React from "react";
import * as Styled from './styles'
import { Content } from "../../components/Content";
import { SelectInput } from "../../components/SelectInput";
import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";

export const List: React.FC = () => {
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

    return (
        <Styled.ContainerListPaige>
            <ContentHeader title="Saídas" lineColor="#E44C4E" >
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
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/02/2023"
                    amount="R$ 130,00 "
                />
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/02/2023"
                    amount="R$ 130,00 "
                />
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/02/2023"
                    amount="R$ 130,00 "
                />
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/02/2023"
                    amount="R$ 130,00 "
                />
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/02/2023"
                    amount="R$ 130,00 "
                />
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/02/2023"
                    amount="R$ 130,00 "
                />
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/02/2023"
                    amount="R$ 130,00 "
                />
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/02/2023"
                    amount="R$ 130,00 "
                />
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/02/2023"
                    amount="R$ 130,00 "
                />
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subtitle="05/02/2023"
                    amount="R$ 130,00 "
                />


            </Content>
        </Styled.ContainerListPaige>
    )

}