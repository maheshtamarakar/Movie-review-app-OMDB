import axios from "axios";
import {  useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import { Card } from "./card/Card";
import { Favourite } from "./Favourite/Favourite";
import { Navigation } from "./navigation/Navigation";


function App() {
  const [input, setInput] = useState('');
  const [finput, setFinput] = useState('')

  const fetchData = async () => {
    const { data } = await axios.get(
      ` http://www.omdbapi.com/?s=${input}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    setMovie(data.Search);
  };
  const [movie, setMovie] = useState([]);
  return (
    // <Router> 
    <div>
      <Navigation setFinput = {setFinput} fetchData={fetchData} input={input} setInput={setInput} />
      {/* <Switch> */}
          {/* <Route path="/" exact>
            <App />
          </Route> */}
          {/* <Route path="/favourite" component ={Favourite}/> */}
      
        <h1 className = "search-head">Movies with keyword "{finput}"</h1>
      <div className="movies-list">

      {movie &&
        movie.map((mov) =>(
            <Card
            img_src={mov.Poster}
            title={mov.Title}
            type={mov.Type}
            year = {mov.Year}
            key = {mov.imdbID}
          />
          )
        )}
      </div>
    </div>
    // </Router>
  );
}

export default App;
