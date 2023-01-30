import React from 'react'
import { Aside } from '../Aside'
import * as Styled from './styles'
import { Content } from '../Content'
import { MainHeader } from '../MainHeader'

export const Layout: React.FC = () => {
    return (<h1>
        <Styled.Container>
            <MainHeader />
            <Aside />
            <Content />
        </Styled.Container>
    </h1>)

}