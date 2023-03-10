import React from "react"
import Layout from "../components/layout"
import Questions from "../components/getQuizzData"

export default function Quiz(){

    const[score, setScore] = React.useState(0)
    console.log("Score =",score)
    return(
        <Layout>
            <div className="w-full font-mono mt-10">
                <h1 className="text-center text-5xl font-bold">TRIVIA QUIZZ GAME!</h1>
                <h2 className="text-center text-3xl font-bold my-10">Your Score: {score} </h2>
                <Questions setScore = {(a) => setScore(a) }/>
            </div>
        </Layout>
    )
}