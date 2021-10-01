import React from 'react'

export const Favourite = (props) => {
  
    
    const defaultImg = (e)=>{
        e.target.src = 'https://shahidafridifoundation.org/wp-content/uploads/2020/06/no-preview.jpg';
    }
    const onDelete = (mov) =>{
        
       props.setFav(
           props.fav.filter((e)=>{
               return e !== mov;
           })
       )
    }
    return (
        <div className="container">
        <div className = "card">
        <i onClick = {()=>onDelete(props.mov)} className="fas fa-heart red"></i>
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
