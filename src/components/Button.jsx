import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background : ${props => props.background};
    border: none;
    border-radius: 12px;
    width: 120px;
    height: 48px;
    color: ${props => props.color};
    font: normal normal normal 14px/21px Poppins;
    font-weight: ${props => props.weight};
    cursor: pointer;
`

export function Button(props) {
    return (
        <StyledButton weight={props.weight} color={props.color} background={props.background}>{props.name}</StyledButton>
    )
}
