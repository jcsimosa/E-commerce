import React, { useState } from "react";


function StarRating ({star}){

    
    
    
    return (
        <div>
            {[...Array(star)].map((index) => {
        index += 1;
        
        return (
          <button
            type="button"
            key={Math.random(15151352)}
            className="star"
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
            <p>{star} out of 5</p>
        </div>
    )
}
export default StarRating

