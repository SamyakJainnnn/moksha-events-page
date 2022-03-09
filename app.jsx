import React, { useEffect, useState } from "react";
import Card from "./card";
import cards from "./cardlist";

import "../style2.css"

import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Navbar from "./navbarInternal"
import Day1 from "./Day1";
import Day2 from "./Day2";
import Day3 from "./Day3";

function App() {
    useEffect(() => {
        var spanText = function spanText(text) {
            var string = text.innerText;
            var spaned = '';
            for (var i = 0; i < string.length; i++) {
                if (string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
                else spaned += '<span>' + string.substring(i, i + 1) + '</span>';
            }
            text.innerHTML = spaned;
        }


        var headline = document.querySelector("h1");

        spanText(headline);
    }, [])

    return (
        <div className="main">
            <div class="container">
                <h1>
                    Events Iternary
                </h1>
            </div>
            <div class="head">
                <div class="title">
                    <h1>Events</h1>
                </div>
                <div class="line"></div>
            </div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Day1 />} />
                    <Route path='/Day2' element={<Day2 />} />
                    <Route path='/Day3' element={<Day3 />} />
                </Routes>
            </Router>
            {/* <div className="cards-col">
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

            </div> */}


        </div>

    )

}


export default App;
