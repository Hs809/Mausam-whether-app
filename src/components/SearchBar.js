import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import ContainData from './ContainData'



function SearchBar({setGetinput}) {

    const [input,setInput] = useState('');


    const slider = () => {
        document.getElementById('cross').style = "left:-100%;"
    }
    const getData = (e) => {
        e.preventDefault();
        if(!input) return;
        setGetinput(input)
        setInput("")
      }
        
        // // Axios.get(`https://www.metaweather.com/api/location/search/?query=${input}`)
        // // .then((response) => {
        // //     setData(response)
        // //     console.log(data.title);
        // // })
        // console.log(data);

        
    
    
    
   

    
    

    return (
        <Container id="cross">
        <Cross ><i className="fas fa-times" onClick={slider}></i></Cross>
        <Search>
            <form  >
            <div className="wrapper">
                    <i className="fas fa-search" ></i>
                    <input type="text" placeholder="search location"  id="inputvalue" onChange={(e) => setInput(e.target.value)} value={input} />
                </div>
                <button onClick={(e) => getData(e) }>Search</button>
            </form>
        </Search>
        <DataElement>
            {/* {
                data.length > 0 &&   data.map((item) => {
                    <ContainData title = {item.title} />
                    console.log(item.title);
                })
            } */}
            
                
        </DataElement>
        </Container>
    )
}

export default SearchBar

const Container = styled.div`
    position:absolute;
    top:0;
    left:0%;
    width:30rem;
    transition:0.5s;
    height:100vh;
    background:#1F232B;
    z-index:10;
    

`
const Cross = styled.div`
    display: flex;
    justify-content: flex-end;
    margin:2rem;
    .fas{
        font-size:25px;
        color:#fff;
    }
`
const Search = styled.div`
    form{
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
    button{
        width: 86px;
        height: 48px;
        font-weight: 400;
        font-size: 16px;
        color:#E7E7EB;
        background:#3C47E9;
        border:none;
        transition:0.5s;
        :hover{
            background:#3C37F9;
            transition:0.5s;
        }

    }


    .wrapper{
        border:1px solid #fff;
        width: 268px;
        height: 48px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .fas{
            font-size:17px;
            color:#fff;
        }
        input{
            background:transparent;
            border:none;
            font-size:16px;
            color: #616475;
        }
        input:focus{
            outline:none;
        }
        
    }

`
const DataElement = styled.div`
    margin:19px;
    .container{
        display:flex;
        justify-content:space-around;
        align-items:center;
        color:#E7E7EB;
        transition:0.5s;
        width: 367px;
        height: 64px;
        margin-top:50px;
        margin-left:10px;
        span{
            font-size:20px;
        }
        :hover{
            border:1px solid #fff;
            transition:0.5s;
        }
    }


`