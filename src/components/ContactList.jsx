import React from 'react'
import contact from '../data/contact'

export function ContactList() {
    return (
        <table className='data-table'>
            <tr className='header-table'>
                <th className='header-table-sector'>Id</th>
                <th className='header-table-sector'>Date</th>
                <th className='header-table-sector'>Customer</th>
                <th className='header-table-sector'>Mail</th>
                <th className='header-table-sector'>Phone</th>
                <th className='header-table-sector'>Comment</th>
            </tr>
            {contact.map(contact => (
                <tr className='data-card'>
                    <td className='data-element'>{contact.id}</td>
                    <td className='data-element'>{contact.date}</td>
                    <td className='data-element'>{contact.customer}</td>
                    <td className='data-element'>{contact.mail}</td>
                    <td className='data-element'>{contact.phone}</td>
                    <td className='data-element'>{contact.comment}</td>
                </tr>
            ))}
        </table>
    )
}
