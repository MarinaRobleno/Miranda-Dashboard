import React from 'react'
import styled from 'styled-components'

export default styled.button`
display: flex;
align-items: center;
justify-content: center;
    background : ${props => props.checkIn ? '#5AD07A' : props.checkOut ? '#E23428' : props.inProgress ? '#FF9C3A' : props.noNotes ? '#FFFFFF' : '#F8F8F8'};
    border: ${props => props.noNotes ? '1px solid #799283' : 'none'};
    border-radius: 12px;
    width: 120px;
    height: 45px;
    color: ${props => props.archive ? '#E23428' : props.notes ? '#212121' : props.noNotes ? '#799283' : props.contact ? '#135846' : '#FFFFFF'};
    font: normal normal normal 14px/21px Poppins;
    font-weight: ${props => props.weight};
    cursor: pointer;
    &:hover{
        background : ${props => props.notes ? '#212121' : props.contact ? '#135846' : props.noNotes ? '#FFFFFF' : '#F8F8F8'};
        color: ${props => props.notes ? '#FFFFFF' : props.noNotes ? '#799283' : props.contact ? '#FFFFFF' : props => props.checkIn ? '#5AD07A' : props.checkOut ? '#E23428' : props.inProgress ? '#FF9C3A': '#FFFFFF'};
        border: 1px solid;
        borderColor: ${props => props.checkIn ? '#5AD07A' : props.checkOut ? '#E23428' : props.inProgress ? '#FF9C3A': props.noNotes ? '#799283' : '#FFFFFF'};
    }
`


