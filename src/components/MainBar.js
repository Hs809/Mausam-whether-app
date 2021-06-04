import React from 'react'
import styled from 'styled-components'
import Celcius from './Celcius'
import Cards from './Cards'
import WhetherInfo from './WhetherInfo'

function MainBar({details, setTempconverter, tempconverter}) {
    let items=['Item 1','Item 2','Item 3','Item 4','Item 5'];
    return (
        <Container>
            <Celcius setTempconverter = {setTempconverter} />

            <Cards details = {details} tempconverter = {tempconverter} />
            <WhetherInfo details = {details} />
        </Container>
    )
}

export default MainBar
const Container = styled.div`
    background:#100E1D;
    z-index:100;
    display:grid;
    grid-template-rows:30px 0.5fr 1fr;
    grid-gap:1rem;

`
