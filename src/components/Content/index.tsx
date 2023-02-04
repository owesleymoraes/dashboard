import React from 'react'
import * as Styled from './styles'

type ContentProps = {
    children: React.ReactNode
}

export const Content: React.FC<ContentProps> = ({ children }) => {
    return (
        <Styled.Container>
            {children}
        </Styled.Container>
    )

}