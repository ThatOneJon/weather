import * as React from "react"
import Layout from "../components/layout";
import GetWeather from "../components/getWeather";


export default function Home() {
  const[cityEntry, setCityEntry] = React.useState("london")
  const[update,setUpdate] = React.useState(false)

  console.log("index",cityEntry)
  return( 
    <>
      <Layout city = {cityEntry} changeCity = {(x) => setCityEntry(x)} setUpdate={(y) => setUpdate(y)}>
        <img src="https://picsum.photos/2500/300" style={{width:"100%", maxHeight:"500px", overflow:"hidden"}}/>
        <GetWeather city={cityEntry} changedCity={() => setCityEntry()} update= {update}/>
      </Layout>
    </>
  )}
