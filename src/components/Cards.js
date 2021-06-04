import React from "react";
import styled from "styled-components";

function Cards({ details, tempconverter }) {
  return (
    <Container>
      <CardWrapper>
        <p>Tommorow</p>
        <img
          src={`https://www.metaweather.com/static/img/weather/ico/${details[1]?.weather_state_abbr}.ico`}
          alt=""
        />
        <div className="info">
          <p>
            {" "}
            {tempconverter === "celcius"
              ? details[1]?.min_temp.toFixed(2)
              : (details[1]?.min_temp * 1.8 + 32).toFixed(2)}{" "}
            <span> {tempconverter === "celcius" ? "°C" : "°F"} </span>
          </p>
          <p>
            {" "}
            {tempconverter === "celcius"
              ? details[1]?.max_temp.toFixed(2)
              : (details[1]?.max_temp * 1.8 + 32).toFixed(2)}{" "}
            <span> {tempconverter === "celcius" ? "°C" : "°F"} </span>
          </p>
        </div>
      </CardWrapper>
      <CardWrapper>
        <p>{details[2]?.applicable_date}</p>
        <img
          src={`https://www.metaweather.com/static/img/weather/ico/${details[2]?.weather_state_abbr}.ico`}
          alt=""
        />
        <div className="info">
          <p>
            {" "}
            {tempconverter === "celcius"
              ? details[2]?.min_temp.toFixed(2)
              : (details[2]?.min_temp * 1.8 + 32).toFixed(2)}{" "}
            <span> {tempconverter === "celcius" ? "°C" : "°F"} </span>
          </p>
          <p>
            {" "}
            {tempconverter === "celcius"
              ? details[2]?.max_temp.toFixed(2)
              : (details[2]?.max_temp * 1.8 + 32).toFixed(2)}{" "}
            <span> {tempconverter === "celcius" ? "°C" : "°F"} </span>
          </p>
        </div>
      </CardWrapper>
      <CardWrapper>
        <p>{details[3]?.applicable_date}</p>
        <img
          src={`https://www.metaweather.com/static/img/weather/ico/${details[3]?.weather_state_abbr}.ico`}
          alt=""
        />
        <div className="info">
          <p>
            {" "}
            {tempconverter === "celcius"
              ? details[3]?.min_temp.toFixed(2)
              : (details[3]?.min_temp * 1.8 + 32).toFixed(2)}{" "}
            <span> {tempconverter === "celcius" ? "°C" : "°F"} </span>
          </p>
          <p>
            {" "}
            {tempconverter === "celcius"
              ? details[3]?.max_temp.toFixed(2)
              : (details[3]?.max_temp * 1.8 + 32).toFixed(2)}{" "}
            <span> {tempconverter === "celcius" ? "°C" : "°F"} </span>
          </p>
        </div>
      </CardWrapper>
      <CardWrapper>
        <p>{details[4]?.applicable_date}</p>
        <img
          src={`https://www.metaweather.com/static/img/weather/ico/${details[4]?.weather_state_abbr}.ico`}
          alt=""
        />
        <div className="info">
          <p>
            {" "}
            {tempconverter === "celcius"
              ? details[4]?.min_temp.toFixed(2)
              : (details[4]?.min_temp * 1.8 + 32).toFixed(2)}{" "}
            <span> {tempconverter === "celcius" ? "°C" : "°F"} </span>
          </p>
          <p>
            {" "}
            {tempconverter === "celcius"
              ? details[4]?.max_temp.toFixed(2)
              : (details[4]?.max_temp * 1.8 + 32).toFixed(2)}{" "}
            <span> {tempconverter === "celcius" ? "°C" : "°F"} </span>
          </p>
        </div>
      </CardWrapper>
      <CardWrapper>
        <p>{details[5]?.applicable_date}</p>
        <img
          src={`https://www.metaweather.com/static/img/weather/ico/${details[5]?.weather_state_abbr}.ico`}
          alt=""
        />
        <div className="info">
          <p>
            {" "}
            {tempconverter === "celcius"
              ? details[5]?.min_temp.toFixed(2)
              : (details[5]?.min_temp * 1.8 + 32).toFixed(2)}{" "}
            <span> {tempconverter === "celcius" ? "°C" : "°F"} </span>
          </p>
          <p>
            {" "}
            {tempconverter === "celcius"
              ? details[5]?.max_temp.toFixed(2)
              : (details[5]?.max_temp * 1.8 + 32).toFixed(2)}{" "}
            <span> {tempconverter === "celcius" ? "°C" : "°F"} </span>
          </p>
        </div>
      </CardWrapper>
    </Container>
  );
}

export default Cards;
const Container = styled.div`
  display: flex;
  justify-content: center;
  aling-item: center;
  margin-top: 19px;
  @media (max-width:800px){
      display:grid;
      grid-template-columns:1fr 1fr 1fr 1fr;
        margin:auto;
  }
  @media (max-width:667px){
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
      margin:auto;
    }
    @media (max-width:682px){
        display:grid;
        grid-template-columns:1fr 1fr;
          margin:auto;
        }
`;
const CardWrapper = styled.div`
  margin: 19px;
  width: 120px;
  height: 177px;
  background: #1e213a;
  p {
    font-weight: 500;
    font-size: 16px;
    color: #e7e7eb;
    text-align: center;
  }
  img {
    width: 56.44px;
    height: 62px;
  }
  .info {
    display: flex;
    justify-content: space-around;
    p {
      margin: 0;
    }
  }
  span {
    margin-right: 4px;
  }
`;
