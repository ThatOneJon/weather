import React from "react"
import PlayPiece from "./playPiece"
import PlayPieceOther from "./playPieceOther"
import PlayerA from "./playerA"
import PlayerB from "./playerB"


export default function CheckersBoard(){
    const[currentPlayer, setCurrentPlayer] = React.useState("A")

    return(
      <div className=" mx-auto w-3/4 h-screen mt-5 flex justify-between">
                  <div className="grid grid-rows-8  border border-xl border-slate-900 w-4/5 h-6/6 rounded p-1">
                      <div className="grid grid-cols-8">
                          <div className=""></div>
                          <div className="bg-slate-900 rounded"><PlayPiece /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPiece /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPiece /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPiece /></div>
                      </div>
                      <div className="grid grid-cols-8">
                          <div className="bg-slate-900 rounded"><PlayPiece /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPiece /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPiece /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPiece /></div>
                          <div></div>
                      </div>
                      <div className="grid grid-cols-8">
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPiece /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPiece /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPiece /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPiece /></div>
                      </div>
                      <div className="grid grid-cols-8">
                          <div className="bg-slate-900 rounded">1</div>
                          <div></div>
                          <div className="bg-slate-900 rounded">1</div>
                          <div></div>
                          <div className="bg-slate-900 rounded">1</div>
                          <div></div>
                          <div className="bg-slate-900 rounded">1</div>
                          <div></div>
                      </div>
                      <div className="grid grid-cols-8">
                          <div></div>
                          <div className="bg-slate-900 rounded">1</div>
                          <div></div>
                          <div className="bg-slate-900 rounded">1</div>
                          <div></div>
                          <div className="bg-slate-900 rounded">1</div>
                          <div></div>
                          <div className="bg-slate-900 rounded">1</div>
                      </div>
                      <div className="grid grid-cols-8">
                          <div className="bg-slate-900 rounded"><PlayPieceOther /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPieceOther /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPieceOther /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPieceOther /></div>
                          <div></div>
                      </div>
                      <div className="grid grid-cols-8">
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPieceOther /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPieceOther /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPieceOther /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPieceOther /></div>
                      </div>
                      <div className="grid grid-cols-8">
                          <div className="bg-slate-900 rounded"><PlayPieceOther /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPieceOther /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPieceOther /></div>
                          <div></div>
                          <div className="bg-slate-900 rounded"><PlayPieceOther /></div>
                          <div></div>
                      </div>
                  </div>
                  <div className="flex flex-col justify-evenly h-2/3">
                    <h1 className="text-3xl font-bold">Points</h1>
                        <PlayerA currentPlayer={currentPlayer} setPlayer={(player) => setCurrentPlayer(player)} />
                        <PlayerB currentPlayer={currentPlayer} setPlayer={(player) => setCurrentPlayer(player)} />
                  </div>
              </div>
    )
}


