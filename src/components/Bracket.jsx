import React from "react";
import Matchup from "./Matchup.jsx";

// Bracket creates one matchup for every two movies
// Bracket sends the two movies as an array of two movie objects [ {movie}, {movie} ]
// React doesn't allow you to pass Javascript objects for whatever reason.  

function Bracket(props){

    let movieList = props.items;

    return (
        <div>
           { movieList.map(function(movie, index) {
                if (index === 0 || index % 2 === 0) {
                    return <Matchup entries={ [movieList[index], movieList[index + 1]] } />
                }
           }) }
        </div>
    )
}

export default Bracket;