"use client"

import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"

export default function Page() {
    return <div style={{width: "75%", margin: "auto"}}>
        <h1>React with NextJS</h1>

        <CountButton increment={1} bgc="#090373"/>
        <CountButton increment={2} bgc="#500373"/>

        <hr />

        <p><a href="https://github.com/jthruska/demo_next">My github repo</a> has the code for this project. </p>
        
        <hr />
        
        <SearchBar />
    </div>
}