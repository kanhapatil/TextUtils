import React, {useState} from 'react';

function Practice(props) {

    const[text, setText] = useState("")

    const handleDemo = () => {
        let newText = "I'm Your Demo Text !"
        setText(newText)
    }

    const handleUpper = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClear = () => {
        let newText = ""
        setText(newText)
    }

    const handleSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    // light mode dark mode
    const [myStyle, setStyle] = useState({
        color : 'white',
        backgroundColor : 'black'
    })

    const [btntext, setBtn] = useState("Enable Light Mode")

    const handleMode = () => {
        if (myStyle.color === "white"){
            setStyle ({
                color : "black",
                backgroundColor : "white"
            })
            setBtn("Enable Dark Mode")
        }
        else {
            setStyle ({
                color : "white",
                backgroundColor : "black"
            })
        }
    }


    return (
        <>
            <div className='container my-2' style={myStyle}>
                <h2>{props.heading}</h2>
                <textarea className='form-control mb-2' value={text} onChange={handleOnChange} id="myBox" rows="6" placeholder='Enter text here'></textarea>

                <div>
                    <button className='btn btn-secondary mx-1' onClick={handleDemo}>Demo text</button>
                    <button className='btn btn-secondary mx-1' onClick={handleUpper}>Convert to uppercase</button>
                    <button className='btn btn-secondary mx-1' onClick={handleLower}>Convert to lowercase</button>
                    <button className='btn btn-secondary mx-1' onClick={handleClear}>Clear text</button>
                    <button className='btn btn-secondary mx-1' onClick={handleSpace}>Remove extra spaces</button>

                    <button className='btn btn-secondary mx-1' onClick={handleMode}>{btntext}</button>
                </div>

                <div>
                    <h2>{props.subheading}</h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes to read</p>
                    <h3>{props.preview}</h3>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

export default Practice;