import React from 'react';
import Card from "./card";
import cards from "./cardlist3";

import "../style2.css"
function Day3() {

    return (
        <div className="cards-col">
            {cards.map((card) => {
                return (
                    <Card
                        key={card.id}
                        heading={card.heading}
                        time={card.time}
                        paragraph={card.paragraph}
                        img={card.img}
                    />
                )
            })}
        </div>

    )

}


export default Day3;