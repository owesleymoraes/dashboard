import styled from 'styled-components'

export const Container = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-bottom: 25px;
`

export const TitleContainer = styled.h2<{ lineColor: string }>`

    color: ${props => props.theme.colors.white};

    &::after {
        display: block;
        content: '';
        width: 40px;
        border-bottom: 10px solid ${props => props.lineColor};
    }
`

export const Controllers = styled.div`
display: flex;
`