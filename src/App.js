import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./card/Card";
import { Navigation } from "./navigation/Navigation";

function App() {
  const [input, setInput] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get(
      ` http://www.omdbapi.com/?t=${input}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data);
    setMovie([data]);
  };
  const [movie, setMovie] = useState([]);
  return (
    <div>
      <Navigation fetchData={fetchData} input={input} setInput={setInput} />
      {movie &&
        movie.map((mov) => (
          <Card
            img_src={mov.Poster}
            title={mov.Title}
            imdbrating={mov.imdbRating}
            type={mov.Type}
            genre={mov.Genre}
            plot={mov.Plot}
            year = {mov.Year}
          />
        ))}
    </div>
  );
}

export default App;
