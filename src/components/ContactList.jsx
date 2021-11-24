import React from 'react'
import contact from '../data/contact'

export function ContactList() {
    return (
        <div class='data-table'>
            <ul class='header-table'>
                <li class='header-table-sector'>Id</li>
                <li class='header-table-sector'>Date</li>
                <li class='header-table-sector'>Customer</li>
                <li class='header-table-sector'>Mail</li>
                <li class='header-table-sector'>Phone</li>
                <li class='header-table-sector'>Comment</li>
            </ul>
            {contact.map(contact => (
                <div class='data-card'>{Object.values(contact)}</div>
            ))}
        </div>
    )
}
