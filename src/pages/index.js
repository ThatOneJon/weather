import * as React from "react"
import Layout from "../components/layout";
import GetWeather from "../components/getWeather";
import MoreInfos from "../components/moreInfos";
import Quote from "../components/Quote";

export default function Home() {
  const[cityEntry, setCityEntry] = React.useState("london")
  const[update,setUpdate] = React.useState(false)

  console.log("index",cityEntry)
  return( 
    <>
      <Layout city = {cityEntry} changeCity = {(x) => setCityEntry(x)} setUpdate={(y) => setUpdate(y)}>
        <GetWeather city={cityEntry} changedCity={() => setCityEntry()} update= {update}/>
        <MoreInfos city={cityEntry} />
      </Layout>
    </>
  )}
