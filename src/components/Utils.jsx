let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
    {
        id: createEventId(),
        title: 'All-day event',
        start: new Date("2022-01-10").toISOString().replace(/T.*$/, '') ,
        color: "#135846",
        borderColor: "#5AD07A"
    },
    {
        id: createEventId(),
        title: 'All-day event 2',
        start: todayStr,
        color: "#361C1A",
        borderColor: "#E23428"
    },
    {
        id: createEventId(),
        title: 'Timed event',
        start: todayStr + 'T12:00:00',
        color: "red"
    }
];

export const getActualEvents = (bookings)  => {

    const actual_events = [];

    for (let booking of bookings){

        if ( booking.checkIn ) {
            actual_events.push({
                id: createEventId(),
                title: `${booking.guest} check in`,
                start: new Date(booking.checkIn),
                color: "#135846",
                allDay: true,
                borderColor: "#135846"
            });
        }

        if ( booking.checkOut ) {
            actual_events.push({
                id: createEventId(),
                title: `${booking.guest} check out`,
                start: new Date(booking.checkOut),
                color: "#E23428",
                allDay: true,
                borderColor: "#E23428"
            });
        }

    }

    return actual_events;
}

export function createEventId() {
    return String(eventGuid++)
};