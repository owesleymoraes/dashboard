import React from 'react'
import * as Styled from './styles'

type SelectInputProps = {
    options: {
        value: string | number,
        label: string | number
    }[]
}

export const SelectInput: React.FC<SelectInputProps> = ({ options }) => {
    return (
        <Styled.Container>
            <Styled.Select>
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