import React, { useState } from "react";
import Movie from "./Movie.jsx";
import Button from '@material-ui/core/Button';
import IosTrophyOutline from 'react-ionicons/lib/IosTrophyOutline';

// Matchup receives an array of two movie objects from Bracket // 
// A movie object looks like {title: "Name of Movie", isWinner: true, id: uniqueID} //

function Matchup(props){
    
    const btnStyle = {
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "left",
    };

    // Keeps track of which movie is checked (winning)
    const [checkedMovie, setCheckedMovie] = useState("Nothing");

    // Keeps track of if matchup has been decided yet.
    const [isMatchupOpen, setMatchup] = useState(true);

    function handleBoxCheck(e){
        setCheckedMovie(e.target.value);
    }

    // Calls handleLoser which changes isWinner property of losing item to false & closes mathcup. 
    function calculateWinner(){
        if (checkedMovie === props.entries[0].title) {
            props.handleLoser(props.entries[1].id);
        } else {
            props.handleLoser(props.entries[0].id);
        }
        setMatchup(false);
    }

    return (

        
        <div className="matchup"> 
            <Button variant="contained" color="primary" onClick={calculateWinner}> <IosTrophyOutline/> Get Winner </Button> 
            
            <div>
                <input 
                    style={btnStyle} 
                    type="radio"
                    onChange={handleBoxCheck} 
                    name={props.id} 
                    value={props.entries[0].title} />
                <Movie 
                    title={props.entries[0].title} 
                    isWinner={ isMatchupOpen ? false : props.entries[0].isWinner } 
                />
            </div>

            { isMatchupOpen ? <p> Versus </p> : <p> Winner is {checkedMovie}</p> }
            
            <div>
                <input 
                    style={btnStyle} 
                    type="radio" 
                    onChange={handleBoxCheck} 
                    name={props.id} 
                    value={props.entries[1].title} />
                <Movie 
                    title={props.entries[1].title}
                    isWinner={ isMatchupOpen ? false : props.entries[1].isWinner } 
                />
            </div>
        
        </div>
    )

}

export default Matchup;