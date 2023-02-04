import React from 'react'
import * as Styled from './styles'

type ContentHeaderProps = {
    title: string,
    lineColor: string
    children: React.ReactNode
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({ title, lineColor, children }) => {



    return (
        <Styled.Container>
            <Styled.TitleContainer lineColor={lineColor}>
                {title}
            </Styled.TitleContainer>
            <Styled.Controllers>
                {children}
            </Styled.Controllers>
        </Styled.Container>
    )
}


