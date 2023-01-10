import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"


export default function Nav(props){
    function handleChange(e){
        console.log(e.target.value)
        props.changeCity(e.target.value)
    }

    function handleClick(e){
        e.preventDefault()
        props.setUpdate(prev => !prev)
    }

    return(
    <Wrapper>
        <div>
            <ul className="mt-0">
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li>
                    <form>
                        <label>Go to: </label>
                        <input style = {{color:"black"}} type ="text" name="search" placeholder="Name a city ... " onChange={(e) => handleChange(e)} value={props.city} />
                        <button onClick = {(e) => handleClick(e)}>Go!</button>
                    </form>
                </li>
            </ul>
        </div>
    </Wrapper>
    )
}
const Wrapper =  styled.section`
    background-color: #5A5997;
    padding: 4px;
    font-size: 25px;
    color: white;
    font-weight: bold;
    position: fixed;
    width: 100%;

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