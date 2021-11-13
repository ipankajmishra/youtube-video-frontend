import React, { useState } from 'react'
import SearchModal from './SearchModal'
import "./VideoComponent.css"
import { Input } from 'antd';
import Search from 'antd/lib/input/Search';
import { queryAllByAltText } from '@testing-library/dom';


export default function Footer(props) {
    const [query,setQuery] = useState(undefined);
    const onSearch=(e)=>{
        console.log(e);
        setQuery(e);
        props.fetchVideoFromSource(e,1);
    }
    return (
        <div style={{marginTop:"10px"}}>
            {props.prev && <button onClick={(e)=>props.fetchVideoFromSource(query,props.prev)} className="btn btn-primary" style={{float:'left',marginLeft:"40px",backgroundColor:"#F5A623",position:"relative",marginTop:"360px"}}>{"<"}</button>}
            {/* <SearchModal/> */}
            <Search style={{width:"75%"}} placeholder="input search text" onSearch={onSearch} enterButton />
            <button  onClick={(e)=>props.fetchVideoFromSource(query,props.next)} className="btn btn-primary" style={{float:'right',marginRight:'40px',backgroundColor:"#F5A623",position:"relative",marginTop:"360px"}}>{">"}</button>
        </div>
    )
}
