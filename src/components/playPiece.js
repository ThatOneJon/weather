import React from "react"


export default function PlayPiece(){
    return(
            <button className="playPieceWhite mx-auto rounded-full flex flex-col justify-center h-full w-3/4 bg-white hover:cursor-pointer hover:scale-110">
                <div className="bg-slate-900 w-1/3 h-1/3 rounded-full mx-auto"></div>
            </button>
    )
}

