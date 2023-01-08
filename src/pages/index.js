import * as React from "react"
import Layout from "../components/layout";
import GetWeather from "../components/getWeather";


export default function Home() {
  return( 
    <>
      <Layout>
        <img src="https://picsum.photos/2500/300" style={{width:"100%", maxHeight:"500px", overflow:"hidden"}}/>
        <GetWeather />
      </Layout>
    </>
  )}
