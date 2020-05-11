import React from "react";
import Movie from "./Movie.jsx";

// Matchup receives an array of two movie objects from Bracket // 
// A movie object looks like {title: "", year: ""} //

function Matchup(props){
    return (
        <div className="matchup"> 
            <Movie title={props.entries[0].title} year={props.entries[0].year}/>
            <p> Versus </p>
            <Movie title={props.entries[1].title} year={props.entries[1].year}/>
        </div>
    )
   
}

export default Matchup;

