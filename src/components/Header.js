import React from 'react'
import styled from 'styled-components'
import SearchBar from './SearchBar'


function Header({setLongitude,setLattitude}) {

    const getLocation = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                showPosition,
                null,
                {
                    enableHighAccuracy:true,
                    timeout:5000,
                    maximumAge: 0
                }
            )
        }else{
            return alert("Geolocation is not supported by this browser.")
        }
    }
    function showPosition(position) {
        setLattitude(position.coords.latitude)  
        setLongitude(position.coords.longitude);  
    }

    const sliderBack = () => {
        document.getElementById('cross').style = "left:0%;"
    }
    return (
        <Container>
            <Button onClick={sliderBack}>
               <p>Search for places</p>
            </Button>
            <Loaction onClick= {getLocation}>
                <img src="images/logo.png" alt=""/>
            </Loaction>
           
        </Container>
    )
}

export default Header
const Container = styled.div`
    display:flex;
    justify-content:space-around;
    flex-direction:row;
    margin-top:19px;
`
const Button = styled.button`
    background:#6E707A;
    padding:10px 25px;
    color:#E7E7EB;
    border:none;
    transition:0.5s;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    :hover{
        background:#2E2E2E;
        transition:0.5s;
    }
    p{
        font-size:13px;
        font-weight:400;
    }
`
const Loaction = styled.button`
    width: 40px;
    border-radius: 50%;
    height: 40px;
    border: none;
    background: #E7E7EB#E7E7EB;
    display: flex;
    justify-content: center;
    align-items: center;
    transition:0.5s;
    img{
        width: 30px;
        color:white;
    }
    :hover{
        background:#BDBDBD;
        transition:0.5s;
    }

`
