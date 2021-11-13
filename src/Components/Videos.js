import React,{useState} from 'react'
import VideoComponent from './VideoComponent';
import { videoList } from '../data';

export default function Videos(props) {
    let data = props.videoList.map((d,key)=>{
        return <VideoComponent data={d}/>;
    })
    return (
        <div>
            <div class="container">
                <div class="row row-cols-4">
                    {data}
                </div>
                </div>
            
        </div>
    )
}
