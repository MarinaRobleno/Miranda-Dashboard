import React from 'react'
import styled from 'styled-components'

export default styled.button`
display: flex;
align-items: center;
justify-content: center;
    background : ${props => props.checkIn ? '#5AD07A' : props.checkOut ? '#E23428' : props.inProgress ? '#FF9C3A' : '#F8F8F8'};
    border: none;
    border-radius: 12px;
    width: 120px;
    height: 45px;
    color: ${props => props.archive ? '#E23428' : props.notes ? '#212121' : props.contact ? '#135846' : '#FFFFFF'};
    font: normal normal normal 14px/21px Poppins;
    font-weight: ${props => props.weight};
    cursor: pointer;
    &:hover{

    }
`


