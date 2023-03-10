import React from 'react'
import * as Styled from './styles'

type SelectInputProps = {
    options: {
        value: string | number,
        label: string | number
    }[],

    defaultValue?: string | number,

    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined
}

export const SelectInput: React.FC<SelectInputProps> = ({ options, defaultValue, onChange }) => {
    return (
        <Styled.Container>
            <Styled.Select onChange={onChange} defaultValue={defaultValue}>
                {
                    options.map((item, key) => {
                        return <Styled.Option
                            key={key}
                            value={item.value}>{item.label}
                        </Styled.Option>
                    })
                }

            </Styled.Select>
        </Styled.Container>
    )
}