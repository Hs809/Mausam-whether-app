import React from 'react'
import styled from 'styled-components'

function ContainData({title}) {
    return (
        <DataElement>
            <div className="container">
                    <span>{title}</span>
                    <i className="fas fa-chevron-right"></i>
            </div>
        </DataElement>
    )
}

export default ContainData

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