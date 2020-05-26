import React, { useState } from "react";
import Matchup from "./Matchup.jsx";

// Bracket creates one matchup for every two movies  
// {title: "Boogie Nights", isWinner: true, id: 0} //

function Bracket(props){

    function changeIsWinner(id){
        // Called inside of each matchup 
        // Receives an ID of losing object, sets isWinner to false. 
        let movieToChange = movieList[id];
        movieToChange.isWinner = false; 
    }

    // VARIABLES: List of all items, list of advancing items, midpoint of advancing items.
    let movieList = props.items;
    let nextRound = movieList.filter(movie => movie.isWinner === true)
    let middle = nextRound.length / 2;

    // Creates Bracket with items evenly divided into a Left & Right Side //
    return (
        <div className="round">
            <div className="leftSide">
            { nextRound.map(function(movie, index) {
                    if (index < middle) {
                        if (index === 0 || index % 2 === 0) {
                            return <Matchup 
                                entries={[nextRound[index], nextRound[index + 1]]} 
                                key={movie.id} 
                                id={movie.id} 
                                handleLoser={changeIsWinner} 
                            />
                        }
                    }
            }) }
            </div>

            <div className="rightSide">
            { nextRound.map(function(movie, index) {
                    if (index >= middle) {
                        if (index === 0 || index % 2 === 0) {
                            return <Matchup 
                                entries={[nextRound[index], nextRound[index + 1]]} 
                                key={movie.id} 
                                id={movie.id} 
                                handleLoser={changeIsWinner} 
                            />
                        }
                    }
            }) }
            </div>
        </div>
    )
}

export default Bracket;