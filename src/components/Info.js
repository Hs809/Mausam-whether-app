import React from 'react'
import styled from 'styled-components'

function Info({details, title,tempconverter}) {
    
    return (
        <Container>
            <H1>{(tempconverter === "celcius")?(details[0]?.the_temp).toFixed(2) :( (details[0]?.the_temp * 1.8) + 32).toFixed(2)} 
            <span>
                {(tempconverter === "celcius")? "°C" : "°F"}    
            </span></H1>
            <Local>{details[0]?.weather_state_name}</Local>
            <Infor>
                <Today>Today . <span>{details[0]?.applicable_date} </span></Today>
                <Location> <i className="fas fa-map-marker-alt"></i> {title} </Location>
            </Infor>

        </Container>
    )
    
}

export default Info
const Container = styled.div`
   display:flex;
   flex-direction:column;
   justify-content:space-around;
   align-items:center;
   
` 
const H1 = styled.h1`
    margin-top:19px;    
    font-size: 120px;
    font-weight: 500;
    color:#fff;
    margin-top: 10px;
    margin-bottom: 0;
    span{
        font-size:50px;
        font-weight:500;
        color:#E7E7EB;
    }
`
const Local = styled.h3`
    font-size:35px;
    font-weight:600;
    color:#E7E7EB;
`
const Infor = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
`
const Today = styled.div`
    font-weight: 500;
    font-size: 25px;
    line-height: 21px;
    color: #88869D;
`
const Location = styled.div`
    margin-top:19px;
    margin-bottom:19px;
    font-size:25px;
`