import { useState, useCallback } from 'react';
import { RoomListCard } from './RoomListCard';
import update from 'immutability-helper';
const style = {
    width: 400,
};
export const RoomList = () => {
    {
        const [cards, setCards] = useState([{
          "id": 1,
          "roomName": "Hekou",
          "price": "$245.10"
        }, {
          "id": 2,
          "roomName": "Lý Sơn",
          "price": "$4843.94"
        }, {
          "id": 3,
          "roomName": "Libertador General San Martín",
          "price": "$8265.05"
        }, {
          "id": 4,
          "roomName": "Sepit",
          "price": "$243.53"
        }, {
          "id": 5,
          "roomName": "Vila Alva",
          "price": "$9208.88"
        }, {
          "id": 6,
          "roomName": "Arras",
          "price": "$5555.61"
        }, {
          "id": 7,
          "roomName": "Numata",
          "price": "$7509.18"
        }, {
          "id": 8,
          "roomName": "Boleiros",
          "price": "$4621.70"
        }, {
          "id": 9,
          "roomName": "Aiquile",
          "price": "$9811.38"
        }, {
          "id": 10,
          "roomName": "Dandu",
          "price": "$8275.37"
        }]);
        const moveCard = useCallback((dragIndex, hoverIndex) => {
            const dragCard = cards[dragIndex];
            setCards(update(cards, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
            }));
        }, [cards]);
        const renderCard = (card, index) => {
            return (<RoomListCard key={card.id} index={index} id={card.id} price={card.price} roomName={card.roomName} moveCard={moveCard}/>);
        };
        return (<>
				<div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
			</>);
    }
};