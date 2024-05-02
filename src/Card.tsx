
import React from "react"
export default function Card(props){
    return(
        <main className="card-profile">
            <div className="image-holder">
       <img className="card-image" alt="card" src={props.item.picture}/>
            </div>
        <div className="info-holder">
       <h3><i className="mdi mdi-map-marker map"></i>{props.item.location}  - View on  <a className="text-light" href="https://www.google.com/maps/" target="_blank">Google Maps</a></h3>
       <h1>{props.item.name}</h1>
       <h5>{props.item.date}</h5>
       <p>{props.item.description}</p>
        </div>
   </main>
    )
}