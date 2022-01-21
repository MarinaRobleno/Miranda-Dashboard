import FullCalendar, { EventContentArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';
import styled from 'styled-components';

import { getActualEvents } from './Utils';
import { selectBookings } from "../features/slices/bookingsSlice";
// import bookings_data from "../../../data/bookings_data";
import { useSelector } from 'react-redux';

const FullCalendarContainer = styled.div`
    .fc-daygrid {   
        height: 400px;
        margin: 10px;
         
        .fc-scrollgrid{
            border: none ;
            .fc-scrollgrid-section{
                .fc-scrollgrid-section{
                    & > td{
                        .fc-scroller-harness{
                            .fc-scroller{
                                .fc-daygrid-body{                                   
                                }
                            }
                        }
                    }
                }
            }
            td, tr, th {          
                border: none;
                
                .fc-daygrid-day-frame {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1rem;
                    border-radius: 6px;
                    // border: 2px solid transparent;
                    &:hover{
                        border: none;
                        background-color: ${props => props.theme.colors.border_grey_light};
                        // border: 2px solid orange;
                        cursor: pointer;
                    }
                }
            }
            .fc-daygrid-day.fc-day-today {
                border-radius: 6px;
                // background-color: #7a1f5c;
                cursor: pointer;
                background: none;
                &:hover{
                    background-color: ${props => props.theme.colors.border_grey_light};
                }
            }
            .fc-daygrid-day-frame{
                .fc-daygrid-day-events{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                    padding: 1px;
                    .fc-daygrid-day-top{
                        position: relative;
                        z-index: 20;
                    }
                    .fc-daygrid-event-harness{
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        top: 0;
                        left: 0;
                        visibility: visible !important;
                        border-radius: 6px;
                        // border: 1px solid #5AD07A;
                        // background-color: ${ props => props.theme.green_std };
                        // z-index: 201;
                        .fc-daygrid-event{
                            background: none;
                            // border: none;
                            border-width: 2px;
                            border-radius: 6px;
                            width: 100%;
                            height: 100%;
                            position: relative;
                            z-index: 2;
                        }
                    }
                    .fc-daygrid-day-bottom{
                        position: relative;
                        z-index: 2;
                    }
                    a, i{
                        color: transparent !important;
                    }
                }
                
            }
        }
        .fc-highlight{
            border-radius: 6px;
            color: #fff;
            border: 2px solid  ${props => props.theme.colors.border_grey_light};
            background-color: rgba(104, 104, 104, 0.2);
        }
        .fc-daygrid-day-events{
            
        }
        .fc-scroller{
            overflow: hidden !important; 
        }
    }
`;

export function Calendar({ setActualDate, changeCheckInCount, changeCheckOutCount }) {
    
    const myBookings = useSelector(selectBookings);
    const bookings = myBookings.booking;
    const [calEvents, setCalEvents] = useState(getActualEvents(bookings));

    let checkIns = myBookings.booking.map((book) => {
      return book.checkIn;
    });
    let checkOuts = myBookings.booking.map((book) => {
      return book.checkIn;
    });
  
    changeCheckInCount(checkIns.length);
    changeCheckOutCount(checkOuts.length);
  

    const clickEventHandler = () => {
        console.log("====clickEventHandler====");
    
    }

    const setEventsHanlder = () => {
        console.log("====setEventsHanlder====");
    
    }
    
    const dateSelectHandler = (e) => {
        console.log("====dateSelectHandler====");
        for (let el in e) {
            console.log(`${ el }: ${ e[el] }`);
        }
    
    }

    const addEventHandler = (e) => {
        console.log("====addEventHandle====");
    
    }

    const changeEventHandler = (e) => {
        console.log("====changeEventHandler====");
    
    }

    const removeEventHandler = (e) => {
        console.log("====removeEventHandler====");
    
    }

    const datesSetHandler = (e) => {
        console.log("====datesSetHandler====");
        let month = e.end.getMonth();
        if (month === 0) month = 12;
        setActualDate(e.end);
    }

    const renderEventContent = (eventContent) => {
        return (
          <>
            <b>{eventContent.timeText}</b>
            <i>{eventContent.event.title}</i>
          </>
        )
      }
    
    return (
        <FullCalendarContainer>
            <FullCalendar 
                plugins={[ dayGridPlugin, timeGridPlugin ,interactionPlugin ]} 
                headerToolbar={{
                    left: 'prev today',
                    center: 'title',
                    right: 'next',
                    // 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView = "dayGridMonth" 
                // editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                events={calEvents}

                datesSet={datesSetHandler}
                select={dateSelectHandler}
                eventContent={renderEventContent}
                eventClick={clickEventHandler}
                eventsSet={setEventsHanlder}
                eventAdd={addEventHandler}
                eventChange={changeEventHandler}
                eventRemove={removeEventHandler}
            />
        </FullCalendarContainer>
    );
}