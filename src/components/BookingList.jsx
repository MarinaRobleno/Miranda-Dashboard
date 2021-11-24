import React from 'react'
import booking from '../data/booking'

export function BookingList() {
    return (
        <div class='data-table'>
            <ul class='header-table'>
                <li class='header-table-sector'>Id</li>
                <li class='header-table-sector'>Guest</li>
                <li class='header-table-sector'>Order date</li>
                <li class='header-table-sector'>Check in</li>
                <li class='header-table-sector'>Check out</li>
                <li class='header-table-sector'>Special Request</li>
                <li class='header-table-sector'>Room Type</li>
            </ul>
            {booking.map(book => (
                <div class='data-card'>{Object.values(book)}</div>
            ))}
        </div>
    )
}
