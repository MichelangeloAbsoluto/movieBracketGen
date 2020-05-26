import React, { State, useState } from 'react';
import '../App.css';
import Movie from "./Movie.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Bracket from "./Bracket.jsx";
import EntryForm from "./EntryForm.jsx";


function App() {
  
// The list of items for bracket. Default value is a list of example objects. //
const [itemList, setItemList] = useState([
  {title: "Example", isWinner: true, id: 0, key:  0},
  {title: "Other Example", isWinner: true, id: 1, key:  1},
  {title: "Big Example", isWinner: true, id: 2, key:  2},
  {title: "Underdog Example", isWinner: true, id: 3, key:  3}
]);

const [isInputVisible, setInputVisibility] = useState(true);

// Populates ItemList with entries from textarea. --//
function populateBracket(array){
  let newItemList = [];
  for (var i = 0; i < array.length; i++) {
    newItemList.push({
      title: array[i],
      isWinner: true,
      id: i,
      key: i
    });
  }
  setItemList(newItemList);  
  setInputVisibility(false);
}

  return (
    <div className="App">
      <Header />
      { isInputVisible ? <EntryForm submitEntries={populateBracket}/> : null }
      <Bracket items={itemList} />
      <Footer />
    </div>
  ) 

}

export default App;
