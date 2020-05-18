import React, { useState } from "react";
import Movie from "./Movie.jsx";

// Matchup receives an array of two movie objects from Bracket // 
// A movie object looks like {title: "", year: ""} //

// --- IMPLEMENTING VOTING LOGIC --- //
// xEach matchup should have points for each movie. 
// xIt should have a button for each movie
// xThe button should increment the points for its movie
// xThe matchup should keep track of the points for each movie
// xThe Bracket component should have a WINNER button. 
// xEach matchup should have a calculateWinner function that calculates which movie has more points.
// The function should change the display of the higher scoring movie.


function Matchup(props){
    
    const btnStyle = {
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "left",
    };

    const [topPoints, setTopPoints] = useState(0);
    const [bottomPoints, setBottomPoints] = useState(0);

    function increaseTopScore(){
        setTopPoints( prevCount => prevCount + 1);
    }
    
    function increaseBottomScore(){
        setBottomPoints( prevCount => prevCount + 1);
    }

    // DOES NOT handle ties. 
    function calculateWinner(){
        if (topPoints > bottomPoints){
            console.log("The winner is " + props.entries[0].title);
        } else {
            console.log("The winner is " + props.entries[1].title);
        }
    }
    
    return (
        
        <div className="matchup"> 
            <button onClick={calculateWinner}> Get Winner </button>
            
            <div className="topMovie">
                <button style={btnStyle} onClick={increaseTopScore}>+</button>
                <Movie 
                    title={props.entries[0].title} 
                    year={props.entries[0].year}
                    />
                <p> {topPoints} </p>
            </div>

            <p> Versus </p>
            
            <div className="bottomMovie">
                <button style={btnStyle} onClick={increaseBottomScore}>+</button>
                <Movie 
                    title={props.entries[1].title} 
                    year={props.entries[1].year}
                    />
                <p> {bottomPoints} </p>
            </div>
        
        </div>
    )

}

export default Matchup;

