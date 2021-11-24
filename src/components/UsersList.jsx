import React from 'react'
import users from '../data/users'

export function UsersList() {
    return (
    <table class='data-table'>
            <tr class='header-table'>
                <th class='header-table-sector'>Id</th>
                <th class='header-table-sector'>Name</th>
                <th class='header-table-sector'>Mail</th>
                <th class='header-table-sector'>Hash</th>
            </tr>
            {users.map(user => (
                <tr className='data-card'>
                    <td className='data-element'>{user.id}</td>
                    <td className='data-element'>{user.name}</td>
                    <td className='data-element'>{user.mail}</td>
                    <td className='data-element'>{user.hash}</td>
                </tr>
            ))}
    </table>
    )
}
