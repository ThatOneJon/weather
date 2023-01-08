import React from "react"
import Nav from "./nav"


export default function Layout({children}){
    return(
        <div className="w-full">
            <Nav />
            {children}
        </div>
    )
}