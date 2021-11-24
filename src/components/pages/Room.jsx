import React from 'react'
import { RoomList } from '../RoomList'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export function Room() {
    return (
        <div id='room'>
            <DndProvider backend={HTML5Backend}>
				<RoomList />
            </DndProvider>
        </div>
    )
}
