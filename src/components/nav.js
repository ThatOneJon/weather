import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"


export default function Nav(){
    return(
    <Wrapper>
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/">Test</Link></li>
            <li>
                <form>
                    <label for ="search">Go to: </label>
                    <input type ="text" name="search" placeholder="Name a city ... "/>
                    <button>Go!</button>
                </form>
            </li>
        </ul>
    </Wrapper>
    )
}
const Wrapper =  styled.section`
    background-color: #5A5997;
    margin-bottom: 5px;
    padding: 4px;
    font-size: 25px;
    color: white;
    font-weight: bold;

    ul{
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
    }

    li{
        margin: 7px;
    }

    a{
        color: white;
        text-decoration: none;
    }

    a:hover{
        cursor: pointer;
        text-decoration: underline;
    }

    input{
        padding: 5px;
    }

    button{
        padding: 5px;
    }

`