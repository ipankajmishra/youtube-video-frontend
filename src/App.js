import logo from './logo.svg';
import './App.css';
import Videos from './Components/Videos';
import Footer from './Components/Footer';
import globalbg from './global-bg.webp';
import 'antd/dist/antd.css';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [videoList, setVideoList] = useState([]);
  const [prev, setPrev] = useState([]);
  const [next, setNext] = useState([]);
  const fetchVideoFromSource=(query,pageNumber)=>{
    let url = "https://fampay-video-api-pankaj.herokuapp.com/videos/keyword/"+pageNumber;
    url = url.replace("keyword",query);
    axios.get(url).then(data=>{
      setVideoList(data.data.data);
      setPrev(data.data.prev)
      setNext(data.data.next)
    })
  }
  return (
    <>
    {/* <img className="global-bg" src={globalbg}></img> */}
    <div className="App">
    <Footer fetchVideoFromSource={fetchVideoFromSource} next={next} prev={prev}/>
     <Videos videoList={videoList}/>
     {/* <Footer/> */}
    </div>
    </>
  );
}

export default App;
