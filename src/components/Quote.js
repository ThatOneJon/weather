import React from "react"


export default function Quote(){

    const[quote, setQuote] = React.useState()
    const[changeQuote, setChangeQuote] = React.useState()

    let randomNum = () => {
        return Math.floor(Math.random() * 1640)
    };


    const handleClick = () => {
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


console.log(changeQuote, quote)

    return(
        <div style={{textAlign:"center",color:"black"}} className="flex flex-col justify-center align-middle">
           <h4 className="text-4xl underline mt-5">Have a random quote!</h4>
           <h5 className="text-4xl mb-10 mt-16">{changeQuote && changeQuote.text}</h5>
           <p className="text-2xl">- {changeQuote && changeQuote.author}</p>
           <button className="mt-14 hover:underline bg-orange-600 p-5 rounded hover:border-solid hover:border-2 hover:border-slate-700 hover:shadow-xl" onClick={handleClick}>Need another ?</button>
        </div>
    )
}