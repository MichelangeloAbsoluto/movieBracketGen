import React from "react";

function Movie(props){

    return (
        <div className="movie"> 
            <h1> {props.title} </h1>
            <p> {props.year} </p>
        </div>
    )
}

export default Movie; 