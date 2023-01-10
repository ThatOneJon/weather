import React from "react"




export default function MoreInfos(props){
    return(
        <div className=" bg-sky-500 flex justify-center  p-20 text-white ">
            <a className="p-2 text-4xl hover:underline hover:text-5xl shadow-2xl hover:shadow-black" href={`https://en.wikipedia.org/wiki/${props.city}`}>Show me more Informations about {props.city}</a>
        </div>
    )
}