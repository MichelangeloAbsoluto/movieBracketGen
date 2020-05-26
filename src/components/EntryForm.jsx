import React, { useState } from "react";



function EntryForm(props){

    let [textValue, setTextValue] = useState("");

    // Updates value
    function handleChange(event){
        setTextValue(event.target.value);
    }

    // Transforms entries into an array & sends to submitEntries function in App.js
    function handleSubmit(event){
        let arrayOfEntries = textValue.split('\n');
        props.submitEntries(arrayOfEntries);
        event.preventDefault();
    }
    
    return (
    <form onSubmit={handleSubmit}>
        <label> Enter movies, one per line:
        <br></br>
        <textarea id="userEntries" rows="16" cols="50" value={textValue} onChange={handleChange} />
        <input type="submit" value="Submit" />
        </label>
    </form>
    )
}

export default EntryForm;