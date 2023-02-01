import React from 'react'
import * as Styled from './styles'

export const Toggle = () => {
    return (
        <Styled.Container>
            <Styled.ToggleLabel>Light</Styled.ToggleLabel>
            <Styled.Label>
                <Styled.Input type='checkbox' />
                <Styled.Span>
                    <Styled.Icon />
                </Styled.Span>
            </Styled.Label>
            <Styled.ToggleLabel>Dark</Styled.ToggleLabel>
        </Styled.Container>






    )
}