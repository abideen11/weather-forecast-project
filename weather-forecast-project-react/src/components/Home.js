import React, { useState } from 'react'

export default function Home() {
    const [textInput, setTextInput] = useState("")
    const onInput = e => {
        setTextInput(e.target.value)
    }
    console.log(textInput)
    return(
        <div className="div-hme">
            <div className="hme-div">
                <h1>Home Page</h1>
                <div className="dv-hme">
                    {/* <div className="hme-d1">Your City</div> */}
                     <div className="hme-d2">
                       <form>
                            <label>
                                Your City{" "}
                                <input type="text" value={textInput} onChange={onInput} />
                            </label>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    )
}