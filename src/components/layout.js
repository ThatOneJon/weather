import React from "react"
import Nav from "./nav"


export default function Layout({children, city, changeCity, setUpdate}){
    console.log("layout", city)
    return(
        <div className="w-full">
            <Nav city= {city} changeCity = {(x) => changeCity(x)} setUpdate = {(y) => setUpdate(y)} />
            {children}
        </div>
    )
}