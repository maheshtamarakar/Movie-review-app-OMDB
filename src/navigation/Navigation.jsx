import React, { useEffect } from "react";
import "./Navigation.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Favourite } from "../Favourite/Favourite";
import App from "../App";
export const Navigation = (props) => {
  const searchInput =(e)=>{
      props.setInput(e.target.value);
      props.setFinput(e.target.value);

  }
  const submit = (e)=>{
    e.preventDefault();
    props.fetchData();
    props.setInput('')
  }


  return (
    // <Router>
    <div>
      <div className="header">
        <nav>
          <a to="/" className="logo">
            Movie App
          </a>
          <ul>
            <li>
              <a to="/">Home</a>
            </li>
            <li>
              <a to="/favourite">favourite</a>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
      <form className="form" onSubmit = {submit}>
        <input
        value ={props.input}
          onChange={searchInput}
          type="search"
          className="search"
          placeholder = "Enter Movie Keyword"
        />
      </form>
      {/* <Switch>
          <Route path="/favorite">
            <Favourite />
          </Route>
          <Route path="/" exact>
            <App />
          </Route>
        </Switch> */}
    </div>
    // </Router>
  );
};
