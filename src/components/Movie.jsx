import React from "react";

function Movie(props){

    const winnerStyle = {
        color: 'green',
        borderStyle: 'dotted', 
    };

    return (
        <div className="movie" style={ props.isWinner ? winnerStyle : null }> 
            <h1> {props.title} </h1>
        </div>
    )
}

export default Movie; 