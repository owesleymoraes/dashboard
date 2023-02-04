import React from "react";
import { ContentHeader } from "../../components/ContentHeader";
import { SelectInput } from "../../components/SelectInput";
import * as Styled from './styles'

export const List: React.FC = () => {
    const options = [
        { value: 'Wesley', label: 'Wesley' },
        { value: 'Maria', label: 'Maria' },
        { value: 'Ana', label: 'Ana' },
    ]
    return (
        <Styled.ContainerListPaige>
            <ContentHeader title="Saidas" lineColor="#E44C4E" >
                <SelectInput options={options} />
            </ContentHeader>
        </Styled.ContainerListPaige>
    )

}