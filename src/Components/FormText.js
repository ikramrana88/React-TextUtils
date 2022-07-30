import React, { useState } from 'react';

export default function FormText() {

    function upperCase() {
        let newText = text.toUpperCase();
        setText(newText);
    }
    function lowerCase() {
        let newText = text.toLowerCase();
        setText(newText);
    }
    function capitalizedCase() {
        let arr = text.split(' ');

        for (let index = 0; index < arr.length; index++) {
            arr[index] = arr[index].charAt(0).toUpperCase() + arr[index].slice(1).toLowerCase();

        };
        let newText = arr.join(' ');
        setText(newText);
    }

    function clearText() {
        let newText = '';
        setText(newText);
    }

    function copyText() {
        var copyText = document.getElementById("textBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
      

        // props.showAlert("Text copied to clipboard");
    }

    function handleOnChange(event) {
        setText(event.target.value)
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container my-3">

            <h1>Enter your text below</h1>
            <textarea className="form-control my-2" id="textBox" value={text} onChange={handleOnChange} rows="8" placeholder='Enter your text here'></textarea>
            <button className="btn btn-primary mx-1" onClick={upperCase}>Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={lowerCase}>Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={capitalizedCase}>Capitalized Case</button>
            <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
            <button className="btn btn-danger mx-1" onClick={clearText}>Clear</button>


            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>
                <p>{text.length} characters</p>
            </div>

            </div>
        </>

    )
}
