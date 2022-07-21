import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value);
        // console.log(text);

    }

    const handleUpClick = () => {
        // console.log("clcked");
        setText(text.toUpperCase());
        props.showAlert("converted to UPPERCASE", "success");

    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("converted to lowercase", "success");

    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("TextArea cleared", "success");

    }

    const handleReverseClick = () => {
        let rev = text.split(" ").reverse().join(" ");
        // console.log(rev);
        setText(rev);
        props.showAlert("Text Reversed", "success");

    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied", "success");
    }

    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container my-3' >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === "light" ? "white" : "#222121", color: props.mode === "light" ? "black" : "white" }} onChange={handleOnChange} value={text} id="my-box" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleLowClick}>Convert to lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleReverseClick}>Reverse</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleRemoveSpace}>Remove Extra spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear</button>


            </div>

            <div className="container">
                <h2>Your text summary</h2>

                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words {text.trim().length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes read</p>
                <h3>Preview</h3>
                <p >{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>

    )
}
