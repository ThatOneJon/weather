import React from "react"
import {BiRightArrow} from "react-icons/Bi"


export default function Questions(props){

    const[categories, setCategories] = React.useState({})
    const[questions, setQuestions] = React.useState({})
    const[chooseCategory, setChooseCategory] = React.useState("")
    const[chooseAnswer, setChooseAnswer] = React.useState({})
    const[gameOver, setGameOver] = React.useState(false)
    const[startGame, setStartGame] = React.useState(false)

    function commitAnswers(){
        let correctAnswers= []
        let incorrectAnswers = []

        questions.map((question) => {
            if(question.correctAnswer === question.choosen){
                correctAnswers.push(question.id)
            }else{
                incorrectAnswers.push(question.id)
            }
        })
        setChooseAnswer({"correctAnswers" : correctAnswers, "incorrectAnswers": incorrectAnswers})
        setGameOver(true)
        props.setScore(prev => prev + correctAnswers.length)
    }
    console.log(chooseCategory)

    function choosingAnsw(event){
        const value = event.target.value
        const id = event.target.id
        setQuestions((prev) => {
            return(
                prev.map((q) => {
                    if(q.id.toString() === id){
                        return(
                            {
                                ...q,
                                choosen:value,
                            }
                        )
                    }else{
                        return({
                            ...q
                        })
                    }
                })
            )
        })
    }

    function handleChange(event){
        console.log(event.target.value)
        setChooseCategory(event.target.value)
    }

    function handleClick(){
        console.log("GO")
        setStartGame(prev => !prev)
    }

    React.useEffect(() =>{
        try{
            fetch('https://the-trivia-api.com/api/categories')
            .then((result) =>result.json())
            .then(res => {
                setCategories(Object.keys(res))
            })
        }catch{
            setCategories(["Error retrieving Data!"])
        }
    }, [])

    React.useEffect(() => {
        fetch(`https://the-trivia-api.com/api/questions${"?categories="+ chooseCategory}`, {
            "Content-Type":"application/json"
        })
        .then((result) => result = result.json())
        .then((questions) =>setQuestions(questions))
        .then(() => setQuestions((questions) => questions.map(q => ({"choosen":"",...q, "allQ" : q.incorrectAnswers.splice(Math.floor(Math.random() * (q.incorrectAnswers.length + 1)), 0, q.correctAnswer)}))))

    },[startGame])

    function handleNext(){
        setGameOver(false)
        setStartGame(prev => !prev)
    }
 
    return(
        <div className="flex  justify-center text-center">
            <div className ="w-2/5 mt-10 ">
                <h1 className="text-center text-4xl mb-10">Categories</h1>
                <div className="flex mt-10">
                    <select className="text-2xl w-full  bg-sky-200 p-2" value={chooseCategory} onChange={handleChange} >
                        <option>Random</option>
                        {categories.length > 0 ? categories.map((category) => { return(<option className="p-1" key={category} value={category}>{category}</option>)}) : null }
                    </select>
                    <button className="bg-sky-300 hover:bg-sky-500 p-3 rounded ml-2" onClick={handleClick}>Go!</button>
                </div>
                <div className="mt-10">
                    <h1 className="text-center text-4xl mb-10 ">Questions....</h1>
                    {questions.length > 0 ? questions.map((question) => {return(
                        <div key={question.id} className="my-10">
                            <h2 className="text-lg font-bold my-3">{question.question}</h2>
                            {question.incorrectAnswers.map((a) => {return(<button onClick={choosingAnsw} id={question.id} value={a} className={`${question.choosen === a ? ("p-5 bg-violet-800") : (" bg-sky-500")} ${(gameOver === true && question.correctAnswer !== a ) ? ("border-8 border-red-600") : null } ${(gameOver === true && question.correctAnswer === a) ? ("border-8 border-green-600") : null } font-bold text-white mx-2 my-2 p-3 hover:bg-sky-600 rounded `}>{a}</button>)})}
                        </div>
                    )}) : null}
                </div>
                <div className="text-center flex justify-center">
                    <button onClick ={commitAnswers} className="hover:shadow-xl shadow-black bg-sky-500 hover:bg-sky-400 py-4 px-9 rounded text-center mb-20 text-white font-bold mt-10">Submit!</button>
                    <button onClick={handleNext} className="hover:bg-sky-400 hover:shadow-xl shadow-black text-4xl bg-sky-500 ml-5 text-white rounded py-4 px-3  mb-20 mt-10"> <BiRightArrow className="text-4xl"/></button>
                </div>
            </div>
        </div>
    )

}