import React from "react";

function Card(props) {

    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <div className="img"><img src={props.img} alt="" /></div>
                    <div className="cardText">
                        <div>
                            <h3>{props.heading}</h3>
                        </div>
                        <div className="time">{props.time}</div>
                    </div>
                </div>
                <div className="card-back">
                    <div className="cardText">
                        <div>
                            <p>{props.paragraph}</p>
                        </div>
                        <button className="cta">
                            <span>Register</span>
                            <svg width="15px" height="10px" viewBox="0 0 13 10">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div >

        // <figure className="image-block">
        //     <h1>The Beach</h1>
        //     <img src={props.img} alt="" />
        //     <figcaption>
        //         <h3>
        //             {props.heading}
        //         </h3>
        //         <p>{props.paragraph}</p>
        //         <button>
        //             More Info
        //         </button>
        //     </figcaption>
        // </figure>
    )

}
export default Card;