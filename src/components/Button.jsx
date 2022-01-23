import React from 'react'
import styled from 'styled-components'

export default styled.button`
display: flex;
align-items: center;
justify-content: center;
    background : ${props => props.checkIn ? '#5AD07A' : props.checkOut ? '#E23428' : props.inProgress ? '#FF9C3A' : props.noNotes ? '#FFFFFF' : '#F8F8F8'};
    border: ${props => props.noNotes ? '1px solid #ABCFB9' : 'none'};
    border-radius: 12px;
    width: 90px;
    height: 40px;
    color: ${props => props.archive ? '#E23428' : props.notes ? '#212121' : props.noNotes ? '#ABCFB9' : props.contact ? '#135846' : '#FFFFFF'};
    font: normal normal 500 12px/21px Poppins;
    font-weight: ${props => props.weight};
    cursor: pointer;
    &:hover{
        background : ${props => props.notes ? '#212121' : props.contact ? '#135846' : props.noNotes ? '#FFFFFF' : '#F8F8F8'};
        color: ${props => props.notes ? '#FFFFFF' : props.noNotes ? '#ABCFB9' : props.contact ? '#FFFFFF' : props => props.checkIn ? '#5AD07A' : props.checkOut ? '#E23428' : props.inProgress ? '#FF9C3A' : '#FFFFFF'};
        border: 1px solid;
        borderColor: ${props => props.checkIn ? '#5AD07A' : props.checkOut ? '#E23428' : props.inProgress ? '#FF9C3A' : props.noNotes ? '#ABCFB9' : '#FFFFFF'};
    }
`


