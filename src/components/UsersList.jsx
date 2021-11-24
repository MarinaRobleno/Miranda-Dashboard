import React from 'react'
import users from '../data/users'

export function UsersList() {
    return (
    <div class='data-table'>
            <ul class='header-table'>
                <li class='header-table-sector'>Id</li>
                <li class='header-table-sector'>Name</li>
                <li class='header-table-sector'>Mail</li>
                <li class='header-table-sector'>Hash</li>
            </ul>
            {users.map(user => (
                <div class='data-card'>{Object.values(user)}</div>
            ))}
    </div>
    )
}
