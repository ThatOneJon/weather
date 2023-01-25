import React from "react"
import Nav from "./nav"

export default function Layout({children, city, changeCity, setUpdate}){
    return(
        <div className="w-full">
            <Nav city= {city} changeCity = {(x) => changeCity(x)} setUpdate = {(y) => setUpdate(y)} />
            <img src="https://picsum.photos/2500/300" style={{width:"100%", maxHeight:"500px", overflow:"hidden"}} />
            {children}
        </div>
    )
}