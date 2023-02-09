import React from "react";
import { ContentHeader } from "../../components/ContentHeader";
import { SelectInput } from "../../components/SelectInput";
import * as Styled from './styles'

export const Dashboard: React.FC = () => {
    const options = [
        { value: 'Wesley', label: 'Wesley' },
        { value: 'Maria', label: 'Maria' },
        { value: 'Ana', label: 'Ana' },
    ]
    return (
        <Styled.Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B" >
                <SelectInput options={options} onChange={() => { }} />
            </ContentHeader>
        </Styled.Container>
    )
}