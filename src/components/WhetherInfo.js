import React from 'react'
import styled from 'styled-components'

function WhetherInfo({details}) {
    const WindInfo = styled.div`
    width: 328px;
    height: 204px;
    background:#1E213A;
    text-align:center;
    color:#E7E7EB;
    .status{
        padding-top:19px;
        margin:0;
    }
    p{
        font-weight: 500;
        font-size: 16px;
    }
    .wind-speed{
        font-size:69px;
        margin:0;
    }
    .progress-bar{

        
        .percentage{
            display:flex;
            justify-content:space-around;
            align-items:center;
            background:transparent;
            
        }
        .bar{
            width: 240px;
            height: 8px;
            background: #E7E7EB;
            border-radius: 80px;
            margin:auto;
            
            .progress{
                width:${(details[0]?.humidity * 240 )/ 100}px;
                position:relative;
                height: 8px;
                background: #FFEC65;
                border-radius: 80px;
            }

        }
        .percentage-sign{
            display:flex;
            justify-content:flex-end;
            margin-right:50px;
        }
    }
    @media (max-width:795px){
        margin-top:19px;
    }

`
const InfoContainer = styled.div`
width: 328px;
height: 204px;
background:#1E213A;
text-align:center;
color:#E7E7EB;
.status{
    margin:0;
    padding-top:19px;
}
p{
    font-weight: 500;
    font-size: 16px;
}
.big{
    font-size:36px;
    
}
span{
    font-size:25px;
}
div{
    display:flex;
    justify-content:center;
    button{
        border:none;
        background: rgba(255, 255, 255, 0.3);
        height:30px;
        width:30px;
        border-radius:50%;
        margin-right: 19px;
        transform: rotate(${Math.round(details[0]?.wind_direction)}deg);
    }
}

`
    return (
        <Container>
            <H1>Today's Highlight</H1>
            <InfoWrapper1>
                <InfoContainer>
                    <p className="status">Wind Status</p>
                    <p className="big">{details[0]?.wind_speed.toFixed(2)} <span>mph</span></p>
                    <div>
                    <button><i className="fas fa-location-arrow"></i></button>
                    {details[0]?.wind_direction_compass}
                    </div>
                </InfoContainer>
                <WindInfo>
                    <p className="status">Humidity</p>
                    <p className="wind-speed "> <span>{details[0]?.humidity}</span> %</p>
                    <div className="progress-bar">
                        <div className="percentage">
                            <span>0</span>
                            <span>50</span>
                            <span>100</span>
                        </div>
                        <div className="bar">
                            <div className="progress"></div>
                        </div>
                        <div className="percentage-sign">%</div>
                    </div>
                </WindInfo>
            </InfoWrapper1>
            <InfoWrapper1>
                <Visibility>
                    <h1>Visibility</h1>
                    <p>{details[0]?.visibility.toFixed(2)} <span>miles</span></p>
                </Visibility>
                <AirPressure>
                    <h1>Air Pressure</h1>
                    <p>{details[0]?.air_pressure} <span>mb</span></p>
                </AirPressure>
            </InfoWrapper1>
        </Container>
    )
}
export default WhetherInfo
const Container = styled.div`
@media (max-width:795px){
    display:grid;
    text-align:center;
}
`
const H1 = styled.div`
    font-weight: bold;
    font-size: 24px;
    color: #E7E7EB;
    display: flex;
    justify-content: flex-start;
    margin: 19px;
    @media (max-width:795px){
        display: flex;
        justify-content: center;
    }
    
`
const InfoWrapper1 = styled.div`
    display:flex;
    justify-content:space-around;
    margin-bottom:19px;
    @media (max-width:795px){
        display:grid;
        grid-template-columns:1fr ;
        margin:auto;
        margin-bottom:19px;
    }
`


const Visibility = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    width: 328px;
    height: 159px;
    background: #1E213A;
    color:#E7E7EB;
`
const AirPressure = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    width: 328px;
    height: 159px;
    background: #1E213A;
    color:#E7E7EB;
    @media (max-width:795px){
        margin-top:19px;
    }

`