import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background : ${props => props.color};
    border: none;
    border-radius: 12px;
    width: 125px;
    height: 48px;
    color: white;
    cursor: pointer;
`

export function Button(props) {
    return (
        <StyledButton color={props.color}>{props.name}</StyledButton>
    )
}
