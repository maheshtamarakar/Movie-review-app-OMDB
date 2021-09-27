import React, { useState } from "react";
import "./Navigation.css";

export const Navigation = (props) => {
  const searchInput =(e)=>{
      props.setInput(e.target.value)
      console.log(e.target.value);
      props.fetchData();

  }

  return (
    <div>
      <div className="header">
        <nav>
          <a href="#" className="logo">
            Movie App
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">favourite</a>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
      <form className="form">
        <input
        value ={props.input}
          onChange={searchInput}
          type="search"
          className="search"
        />
      </form>
    </div>
  );
};
