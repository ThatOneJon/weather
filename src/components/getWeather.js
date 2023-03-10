import React from "react"
import {FaTemperatureLow} from "react-icons/Fa"
import {BsWind} from "react-icons/Bs"
import {BsFillSunFill} from "react-icons/Bs"
import {WiHumidity} from "react-icons/wi"
import styled from "styled-components"
import Quote from "./Quote"

export default function GetWeather(props){

    const[locationData, setLocationData] = React.useState({})
    const[weatherData, setWeatherData] = React.useState({})

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '286d029352msha66a49f5f93f5c8p1085d6jsn93eca92c88d7',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    React.useEffect(() => {
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${props.city}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            try{
            const {country, localtime, name} = response.location
            
        setLocationData({
            "country": country,
            "time": localtime,
            "name": name
        })

            const {feelslike_c, humidity, last_updated, temp_c, uv, wind_kph} = response.current
        setWeatherData({
            "feelslike_c" : feelslike_c,
            "humidity" : humidity,
            "last_updated" : last_updated,
            "temp" : temp_c,
            "uv" : uv,
            "wind_kph" : wind_kph
        })
    }
    catch{
        alert("Error not found!")
    }
        })
        .catch((err) => {
            console.error(err)});
        
    }, [props.update])

return (
    <Wrapper> 
        <div className="back" style={{display: "flex", width: "100%", margin:"0px", justifyContent:"space-evenly", backgroundColor:"#2B32AC", color:"white", padding:"20px", fontWeight:"bold", fontSize:"1.3em"}}>
            <h2>City: {locationData.name}</h2>
            <h2>Country: {locationData.country}</h2>
            <h2>Time: {locationData.time}</h2>
            <h2>Last updated: {weatherData.last_updated} </h2>
        </div>
        <div className =" flex justify-center w-full mt-1  bg-sky-500 p-5">
            <div className ="flex-col w-2/6 bg-orange-300 font-mono text-3xl font-bold p-8 min-w-1/5 rounded-lg shadow-2xl mt-10 min-w-min">
                <h1 className="text-center text-5xl">Current conditions</h1>
                <h1><FaTemperatureLow className="text-4xl" /> {weatherData.temp}??C feels like {weatherData.feelslike_c}</h1>
                <h1><BsWind  className="text-4xl"/> {weatherData.wind_kph} km/h </h1>
                <h1><BsFillSunFill  className="text-4xl"/> {weatherData.uv} UV index </h1>
                <h1><WiHumidity  className="text-4xl"/> {weatherData.humidity} humidity </h1>
            </div>
            < div className ="flex-col w-2/6 font-mono text-3xl font-bold min-w-1/5 mt-10 ml-5">
                <Quote />
            </div>
        </div>
    </Wrapper>
    )
}
const Wrapper =  styled.section`
    h1{
        margin: 50px;
    }
`
