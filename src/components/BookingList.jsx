import React from 'react'
import booking from '../data/booking'

export function BookingList() {
    return (
        <table class='data-table'>
            <tr class='header-table'>
                <th class='header-table-sector'>Id</th>
                <th class='header-table-sector'>Guest</th>
                <th class='header-table-sector'>Order date</th>
                <th class='header-table-sector'>Check in</th>
                <th class='header-table-sector'>Check out</th>
                <th class='header-table-sector'>Special Request</th>
                <th class='header-table-sector'>Room Type</th>
            </tr>
            {booking.map(book => (
                <tr className='data-card'>
                    <td className='data-element'>{book.id}</td>
                    <td className='data-element'>{book.guest}</td>
                    <td className='data-element'>{book.orderDate}</td>
                    <td className='data-element'>{book.checkIn}</td>
                    <td className='data-element'>{book.checkOut}</td>
                    <td className='data-element'>{book.special}</td>
                    <td className='data-element'>{book.roomType}</td>
                </tr>
            ))}
        </table>
    )
}
