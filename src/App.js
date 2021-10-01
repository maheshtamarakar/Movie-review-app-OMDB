import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Card } from "./card/Card";
import { Favourite } from "./Favourite/Favourite";
import { Navigation } from "./navigation/Navigation";

function App() {
  let inIt;
  if(!localStorage.getItem('movies')){
    inIt = [];
    console.log('working?');
  }else{
    inIt = JSON.parse(localStorage.getItem('movies'));
  }
  const [input, setInput] = useState("");
  const [finput, setFinput] = useState("");
  const [fav, setFav] = useState(inIt);
  const favourite = (mov)=>{
    let myMovie = {
      Poster:mov.Poster,
      Title:mov.Title,
      Year:mov.Year,
      Type:mov.Type,
      imdbID:mov.imdbID,
    }
    setFav([...fav, myMovie]);
  }
  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(fav)); 
  }, [fav])

  const fetchData = async () => {
    const { data } = await axios.get(
      ` http://www.omdbapi.com/?s=${input}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    setMovie(data.Search);
  };
  const [movie, setMovie] = useState([]);
  return (
    <Router>
      <div>
        <Navigation
          setFinput={setFinput}
          fetchData={fetchData}
          input={input}
          setInput={setInput}
        />
        <Switch>
          <Route
          exact
            path="/"
            render={() => {
              return (
                <>
                  <h1 className="search-head">
                    Movies with keyword "{finput}"
                  </h1>
                  <div className="movies-list">
                    {!movie?<h1 style = {{color:"red",fontWeight:"bold"}}>Please check your keyword and try again</h1> :
                      movie.map((mov) => (
                        <Card
                          img_src={mov.Poster}
                          title={mov.Title}
                          type={mov.Type}
                          year={mov.Year}
                          key={mov.imdbID}
                          mov = {mov}
                          favourite = {favourite}
                        />
                      ))
                      }
                  </div>
                </>
              );
            }}
          ></Route>
          <Route exact path="/favourite"render={() => {
              return (
                <>
                  <h1 className="search-head">
                    Favourites
                  </h1>
                  <div className="movies-list">
          {fav &&
                      fav.map((mov) => (
                        <Favourite
                          img_src={mov.Poster}
                          title={mov.Title}
                          type={mov.Type}
                          year={mov.Year}
                          key={Math.random()*1000}
                          mov = {mov}
                          setFav = {setFav}
                          fav ={fav}

                        />
                      ))}
                      </div>
                </>
              );
            }}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
