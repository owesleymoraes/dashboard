import React, { useMemo } from 'react'
import * as Styled from './styles'
import emojis from '../../utils/emojis'

export const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice]

    }, [])

    return (<Styled.Container>
        <h1>Toogle</h1>
        <Styled.Profile>
            <Styled.Welcome>
                Olá,{emoji}
            </Styled.Welcome>
            <Styled.UserName>Wesley Moraes</Styled.UserName>
        </Styled.Profile>
    </Styled.Container>)
}