import React from 'react'
import users from '../data/users'
import { StyledData, StyledHeader, StyledTable } from './BookingList'

export function UsersList() {
    return (
    <StyledTable>
            <StyledHeader>
                <th class='header-table-sector'>Id</th>
                <th class='header-table-sector'>Name</th>
                <th class='header-table-sector'>Mail</th>
                <th class='header-table-sector'>Hash</th>
            </StyledHeader>
            {users.map(user => (
                <StyledData>
                    <td className='data-element'>{user.id}</td>
                    <td className='data-element'>{user.name}</td>
                    <td className='data-element'>{user.mail}</td>
                    <td className='data-element'>{user.hash}</td>
                </StyledData>
            ))}
    </StyledTable>
    )
}
