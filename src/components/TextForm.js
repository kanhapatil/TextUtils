import React, { useState } from 'react';

function TextForm(props) {

    // function to change text into uppercase
    const handleUpClick = () => {
        //console.log("uppercase")
        let newText = text.toUpperCase();
        setText(newText)
    }

    // function to change text into lowercase
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    // function to remove the text or clear the text
    const handleClear = () => {
        let newText = '';
        setText(newText)
    }

    // function to copy text
    const handleCopy = () => {
        var text1 = document.getElementById("myBox");
        text1.select();
        navigator.clipboard.writeText(text1.value);
    }

    // function to remove the extra spaces between the text
    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    // Demo text
    const handleDemo = () => {
        let newText = "I'm Your Demo Text";
        setText(newText)
    }

    const handleOnChange = (event) => {
        //console.log("on change")
        setText(event.target.value)
    }

    const [text, setText] = useState('')

    return (
        <>
            <div className="my-5 container">
                <h3><b>{props.heading}</b></h3>
                <div className='mb-2'>
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "primary" ? "white" : "#262626", color: props.mode === "primary" ? "black" : "white", border : props.mode === "primary" ? "" : "1px solid white" }} value={text} onChange={handleOnChange} id="myBox" rows="7" placeholder="Enter text here"></textarea>
                </div>

                <div className='row'>
                    <div className='col-mg-12'>
                        <button className={`mx-1 my-1 btn btn-${props.mode === "primary" ? "primary" : "dark"}`} onClick={handleDemo} style={{border:"1px solid white"}}>Demo text</button>
                        <button disabled={text.length === 0} className={`mx-1 my-1 btn btn-${props.mode === "primary" ? "primary" : "dark"}`} onClick={handleUpClick} style={{border:"1px solid white"}}>Convert to Uppercase</button>
                        <button disabled={text.length === 0} className={`mx-1 my-1 btn btn-${props.mode === "primary" ? "primary" : "dark"}`} onClick={handleLoClick} style={{border:"1px solid white"}}>Convert to Lowercase</button>
                        <button disabled={text.length === 0} className={`mx-1 my-1 btn btn-${props.mode === "primary" ? "primary" : "dark"}`} onClick={handleClear} style={{border:"1px solid white"}}>Clear text</button>
                        <button disabled={text.length === 0} className={`mx-1 my-1 btn btn-${props.mode === "primary" ? "primary" : "dark"}`} onClick={handleCopy} style={{border:"1px solid white"}}>Copy text</button>
                        <button disabled={text.length === 0} className={`mx-1 my-1 btn btn-${props.mode === "primary" ? "primary" : "dark"}`} style={{border:"1px solid white"}} onClick={handleRemoveSpace}>Remove extra spaces</button>
                    </div>
                </div>
            </div>

            <div className='container'>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
            </div>
        </>
    )
}

export default TextForm;