import React from 'react'
import logo from '../logo.svg';
import "./VideoComponent.css"
export default function VideoComponent(props) {
    return (
        <div class="col main-card">
            <div class="card" style={{"width": "inherit"}}>
            <img  class="card-img-top" src={props.data.snippet.thumbnails.medium.url} alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{props.data.snippet.title}</h5>
                <p class="card-text">{props.data.snippet.description.length>65?props.data.snippet.description.substr(0,69)+" ...":props.data.snippet.description}</p>
            </div>
            </div>
        </div>
    )
}
