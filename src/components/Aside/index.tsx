import React from 'react'
import * as Styled from './styles'
import logoImg from '../../../public/assets/logo.svg'
import { Icon } from '../Icon'



export const Aside: React.FC = () => {
    return (
        <Styled.Container>
            <Styled.Header>
                <Icon name='logo' />
            </Styled.Header>
            <Styled.MenuContainer>
                <Styled.MenuItemLink href='#'>
                    dashboard
                </Styled.MenuItemLink>
            </Styled.MenuContainer>
        </Styled.Container>
    )

}