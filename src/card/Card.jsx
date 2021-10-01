import React from 'react'
import './Card.css'

export const Card = (props) => {
    const defaultImg = (e)=>{
        e.target.src = 'https://shahidafridifoundation.org/wp-content/uploads/2020/06/no-preview.jpg';
    }
    const makered = (e) =>{
        e.target.classList.toggle('red');
        props.favourite(props.mov);
    }
    return (
        <div className="container">


        <div className = "card">
        <i onClick = {makered} className="fas fa-heart"></i>
            <img onError ={defaultImg} src={props.img_src} alt="not found"/>
            <div className="content">
                <h1><strong> {props.title}</strong></h1>
                <p><strong>Type: &nbsp;</strong>{props.type}</p>
                <p><strong>Year: &nbsp;</strong>{props.year}</p>
            </div>
            
        </div>
        </div>
    )
}
