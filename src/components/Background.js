import React from 'react'
import styled from 'styled-components'

function Background({details}) {
    return (
        <Container>
            <Wrapper>
                <img className="background" src="images/Cloud-background.png" alt=""/>
                <img className="img" src={`https://www.metaweather.com/static/img/weather/png/${details[0]?.weather_state_abbr}.png`} />
            </Wrapper>
        </Container>
    )
}

export default Background

const Container = styled.div`
    margin-top:19px;
`
const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-item:center;

    .background{
        opacity:0.1;
        position:relative;
        left: 0px;
        top: 0px;
        display:flex;
        justify-content:center;
        align-items:center;

    }
    img{
        width:100%;
        opacity:1;
        z-index:1;
        top: 0px;
        position: relative;
    }
    .img{
        position:absolute;
        top:200px;
        width:150px;
       

    }

`
