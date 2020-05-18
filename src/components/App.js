import React from 'react';
import '../App.css';

// -- These are the 3 modules I created -- //
import Movie from "./Movie.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Bracket from "./Bracket.jsx";

// -- A hardcoded list of movies to use -- //
const movieList = [
  {title: "Boogie Nights", year: 1997},
  {title: "The Notebook", year: 2004},
  {title: "Zoolander", year: 2001},
  {title: "Grown Ups", year: 2010},
  {title: "Grown Ups 2", year: 2013},
  {title: "Goodfellas", year: 1990},
  {title: "Gladiator", year: 2000},
  {title: "Sisterhood of the Traveling Pants", year: 2005},
  {title: "Sisterhood of the Traveling Pants 2", year: 2008},
  {title: "In the Mood For Love", year: 2000},
  {title: "Carlito's Way", year: 1993},
  {title: "Lord of the Rings: The Return of the King", year: 2003}
]

function App() {
  return (
    <div className="App">
      <Header />
      <Bracket items={movieList}/>
      <Footer />
    </div>
  );
}

export default App;
