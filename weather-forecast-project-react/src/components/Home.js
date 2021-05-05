import React, { useEffect, useState } from 'react'

export default function Home() {
    const [textInput, setTextInput] = useState("London")
    const [weatherDetail, setWeatherDetail] = useState([])
    useEffect(() => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${textInput}&appid=${"9ebc44b6d29b8cbeef268e926871ff92"}`)
        .then(r => r.json())
        .then((data) => {
            setWeatherDetail(data)
        })
    })
    const onInput = e => {
        if(e.target.value.length > 0) {
            setTextInput(e.target.value)
        }
        else {
            setTextInput("London")
        }
    }
    console.log(textInput,"text")
    console.log(weatherDetail,"weatherDetail19")
    return(
        <div className="div-hme">
            <div className="hme-div">
                <h1>Home Page</h1>
                <div className="dv-hme">
                     <div className="hme-d2">
                       <form>
                            <label>
                                Your City{" "}
                                <input type="text" value={textInput} onChange={onInput} />
                            </label>
                        </form>
                    </div>
                    <div></div> 
                </div>
            </div>
        </div>
    )
}