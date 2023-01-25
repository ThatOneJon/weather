import React from "react"
import { motion } from "framer-motion"


export default function Quote(){

    const[quote, setQuote] = React.useState()
    const[changeQuote, setChangeQuote] = React.useState()
    const[rotation, setRotation] = React.useState(0)

    let randomNum = () => {
        return Math.floor(Math.random() * 1640)
    };


    const handleClick = () => {
        setRotation(rotation + 360)
        setChangeQuote(quote[randomNum()])

    }

    React.useEffect(() => {
        
        fetch('https://type.fit/api/quotes')
            .then(response => response.json())
            .then(response => {
                setQuote(response)
                setChangeQuote(response[randomNum()])
            })
            .catch(err => console.error(err));

    }, [])

    return(
        <motion.div animate={{rotateY: rotation}} transition={{duration:1.4}} style={{textAlign:"center",color:"black"}} className=" bg-orange-300 flex flex-col justify-center align-middle shadow-2xl p-5">
           <h4 className="text-4xl underline mt-5">Have a random quote!</h4>
           <h5 className="text-4xl mb-10 mt-16">{changeQuote && changeQuote.text}</h5>
           <p className="text-2xl">- {changeQuote && changeQuote.author}</p>
           <button className="mt-14 hover:underline bg-orange-600 p-5 rounded hover:border-solid hover:border-2 hover:border-slate-700 hover:shadow-xl" onClick={handleClick}>Need another ?</button>
        </motion.div>
    )
}