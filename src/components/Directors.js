import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    <div>
      {directors.map((director)=>{
        return (
          <div>
            <h1>{director.name}</h1>
            <ul>{director.movies.map((movie)=>{
              return (
                <li>{movie}</li>
              )
            })}</ul>
          </div>
        )
      })}
    </div>
  </div>;
}

export default Directors;
