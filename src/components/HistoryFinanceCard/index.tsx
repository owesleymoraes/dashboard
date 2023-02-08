import React from 'react'
import * as Styled from './styles'

type HistoryFinanceCardProps = {
    tagColor: string,
    title: string,
    subtitle: string,
    amount: string

}

export const HistoryFinanceCard: React.FC<HistoryFinanceCardProps> = ({
    tagColor,
    title,
    subtitle,
    amount }) => {
    return (
        <Styled.ContainerHistoryFinanceCard >
            <Styled.Tag color={tagColor}></Styled.Tag>
            <Styled.WapperLabel>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Subtitle>{subtitle} </Styled.Subtitle>
            </Styled.WapperLabel>
            <Styled.Amount> {amount}</Styled.Amount>
        </Styled.ContainerHistoryFinanceCard>
    )
}