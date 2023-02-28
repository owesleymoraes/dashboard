import React, { useMemo } from 'react'
import * as Styled from './styles'
import emojis from '../../utils/emojis'
import { Toggle } from '../Toggle'

export const MainHeader: React.FC = () => {

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice]

    }, [])

    return (<Styled.Container>
        <Toggle />
        <Styled.Profile>
            <Styled.Welcome>
                Olá,{emoji}
            </Styled.Welcome>
            <Styled.UserName>Wesley Sousa</Styled.UserName>
        </Styled.Profile>
    </Styled.Container>)
}