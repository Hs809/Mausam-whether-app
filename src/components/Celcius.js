import React from 'react'
import styled from 'styled-components'


function Celcius({setTempconverter}) {

    const handleTemperature = (temp) => {
        setTempconverter(temp)
    }
    return (
        <Container>
            <ButtonC onClick = {() => handleTemperature("celcius")}><span>°C</span></ButtonC>
            <ButtonF onClick = {() => handleTemperature("fahrenheit")}><span>°F</span></ButtonF>
        </Container>
    )
}

export default Celcius
const Container = styled.div`
    display:flex;
    justify-content:flex-end;
    margin-top:19px;
    margin-right:19px;
    

`
const ButtonC = styled.button`
    background: #E7E7EB;
    border-radius: 50%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight: 600;
    font-size: 18px;
    transition:0.5s;
    width:40px;
    height:40px;
    border:none;
    margin-right:19px;
    :hover{
        background:#585676;
        transition:0.5s;
        color:#FFF;
    }
`
const ButtonF = styled.button`
    background: #E7E7EB;
    border-radius: 50%;
    display:flex;
    justify-content:center; 
    align-items:center;
    font-weight: bold;
    font-size: 18px;
    transition:0.5s;
    width:40px;
    height:40px;
    border:none;
    :hover{
        background:#585676;
        transition:0.5s;
        color:#FFF;
    }
`
