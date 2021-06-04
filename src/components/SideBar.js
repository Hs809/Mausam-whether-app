import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Background from './Background'
import Info from './Info'
import SearchBar from './SearchBar'

function SideBar({setGetinput, details, title, tempconverter, setLongitude, setLattitude}) {
    return (
        <Container>
            <Header setLattitude= {setLattitude} setLongitude = {setLongitude}  />
            <Background   details = {details}/>
            <Info details = {details} title = {title} tempconverter = {tempconverter}/>
            <SearchBar  setGetinput = {setGetinput}  />
        </Container>
    )
}

export default SideBar

const Container = styled.div`
    background:#1E213A;
    display:grid;
    grid-template-rows:70px 1fr 1fr;
    grid-gap:1rem;
    
`
