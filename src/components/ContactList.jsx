import React from 'react'
import contact from '../data/contact'
import styled from 'styled-components'
import { StyledData, StyledDataElement, StyledHeader, StyledTable } from './BookingList'
import Button from './Button'

export function ContactList() {
    return (
        <StyledTable>
            <StyledHeader>
                <th className='header-table-sector'>Id</th>
                <th className='header-table-sector'>Date</th>
                <th className='header-table-sector'>Customer</th>
                <th className='header-table-sector'>Mail</th>
                <th className='header-table-sector'>Phone</th>
                <th className='header-table-sector'>Comment</th>
                <th className='header-table-sector'>Action</th>
            </StyledHeader>
            {contact.map(contact => (
                <StyledData>
                    <td className='data-element'>{contact.id}</td>
                    <td className='data-element'>{contact.date}</td>
                    <td className='data-element'>{contact.customer}</td>
                    <td className='data-element'>{contact.mail}</td>
                    <td className='data-element'>{contact.phone}</td>
                    <td className='data-element'>{contact.comment}</td>                    
                    <StyledDataElement>
                        <Button archive background='none'>Archive</Button>
                    </StyledDataElement>                    
                </StyledData>
            ))}
        </StyledTable>
    )
}
