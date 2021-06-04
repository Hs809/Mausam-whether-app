import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import SideBar from './components/SideBar';
import MainBar from './components/MainBar';
import {useState, useEffect} from 'react';
import Axios from 'axios'

function App() {
  const [details, setDetails] = useState({});
  const [title, setTitle] = useState("");
  const [getinput, setGetinput] = useState("");
  const [tempconverter, setTempconverter] = useState("");
  const [lattitude, setLattitude] = useState("");
  const [longitude, setLongitude] = useState("");
  let api_url = "https://www.metaweather.com/api/"

  const fetchDetail = async() => {
    if(getinput){
      const {data} = await Axios.get(api_url + `location/search/?query=${getinput}`)
      
      
        const woeid = data[0]?.woeid
        if(woeid){
          const {data} = await Axios.get(api_url + `location/${woeid}/`)
          const {consolidated_weather, title} = data;
          setTitle(title);
          
          setDetails(consolidated_weather)
          console.log(details);
          console.log(title);
         
  
        }
     
      

    }
    if(lattitude && longitude){
      const {data} = await Axios.get(api_url + `location/search/?lattlong=${lattitude},${longitude}`)
      const woeid = data[0].woeid
      if(woeid){
        const {data} = await Axios.get(api_url + `location/${woeid}/`)
        const {consolidated_weather, title} = data;
        setTitle(title);
        
        setDetails(consolidated_weather)
        console.log(details);
        console.log(title);
       

      }
    }

  }

  

  useEffect(() => {
    console.log("Input"+ getinput);
    fetchDetail()
    console.log(lattitude, longitude);
  },[getinput,tempconverter,lattitude,longitude])
  
  




  return (
    <div className="App">
      <Router>
        <Container>
          <SideBar setGetinput = {setGetinput} details = {details} title ={title} tempconverter = {tempconverter} setLattitude = {setLattitude} setLongitude= {setLongitude} />
          <MainBar details = {details}  setTempconverter = {setTempconverter} tempconverter = {tempconverter}/>
        </Container>

      </Router>
    </div>
  );
}

export default App;
const Container = styled.div`
  display:grid;
  grid-template-columns:30rem 1fr;
  height:100vh;
  @media (max-width:1078px){
    display:grid;
    grid-template-columns:1fr;
  }
`
