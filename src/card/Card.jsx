import React from 'react'
import './Card.css'

export const Card = (props) => {
    return (
        <div className="container">


        <div className = "card">
            <img src={props.img_src} alt="" />
            <div className="content">
                <h1>{props.title}</h1>
                
                <p><strong>IMDB rating: &nbsp;</strong>{props.imdbrating} </p>
                <p>{props.plot}</p>
                <p><strong>Type: &nbsp;</strong>{props.type}</p>
                <p><strong>Genre: &nbsp;</strong>{props.genre}</p>
                <p><strong>Year: &nbsp;</strong>{props.year}</p>


            </div>
            
        </div>
        </div>
    )
}
