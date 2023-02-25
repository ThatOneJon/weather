import React from "react"



export default function PlayPieceOther(){
    return(
    <button className="playPieceWhite mx-auto rounded-full flex flex-col justify-center h-full w-3/4 bg-white hover:cursor-pointer hover:scale-110">
        <div className="border-solid border-4 border-slate-900 rounded-full mx-auto" style={{width:"96%", height:"96%"}}></div>
    </button>
    )
}