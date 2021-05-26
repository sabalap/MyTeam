import React, { useState } from "react";
const DirectorCard = ({ director }) => {
    const [flipped, setFlipped] = useState(false);
    return (
        <div className="director">
            <div className={`${flipped ? "card front-side hidden" : "card front-side show"}`}>
                <img src={director.img} alt="" />
                <h4>{director.name}</h4>
                <p>{director.job}</p>
                <div className="plus-button" onClick={() => setFlipped(!flipped)}>
                </div>
            </div>
            <div className={`${flipped ? "card back-side show" : "card back-side hidden"}`}>
                <h4>{director.name}</h4>
                <p>
                    {director.quote}
                </p>
                <div className="icons">
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
                <div className="minus-button" onClick={() => setFlipped(!flipped)}>
                </div>
            </div>
        </div>
    )
}
export default DirectorCard;