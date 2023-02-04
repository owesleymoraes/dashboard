import React from 'react'
import { Icon } from '../Icon'
import * as Styled from './styles'
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md'


export const Aside: React.FC = () => {
    return (
        <Styled.Container>
            <Styled.Header>
                <Icon name='logo' width={40} height={40} />
                <Styled.Title>
                    Minha carteira
                </Styled.Title>
            </Styled.Header>
            <Styled.MenuContainer>
                <Styled.MenuItemLink href='#'>
                    <MdDashboard />
                    Dashboard
                </Styled.MenuItemLink>
                <Styled.MenuItemLink href='#'>
                    <MdArrowUpward />
                    Entradas
                </Styled.MenuItemLink>
                <Styled.MenuItemLink href='#'>
                    <MdArrowDownward />
                    Saidas
                </Styled.MenuItemLink>
                <Styled.MenuItemLink href='#'>
                    <MdExitToApp />
                    Sair
                </Styled.MenuItemLink>
            </Styled.MenuContainer>
        </Styled.Container>
    )

}