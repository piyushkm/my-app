import React, { useState } from 'react'
// import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case!", "success");
    }

    const handleLoClick = ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case!", "success");
    }

    const handleClearClick = ()=>{
        // console.log("Clear was clicked" + text);
        let newText = "";
        setText(newText)
        props.showAlert("Text Area cleared!", "success");
    }


    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
        
    }
// Credits : A
    const handleCopy = ()=> {
var text = document.getElementById("myBox");
text.select();
text.setSelectionRange(0, 9999);
navigator.clipboard.writeText(text.value);
props.showAlert("All text Copied!", "success");
    }
// Credits: Coding wala
const handleExtraSpaces =() => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces", "success");
}


    const [text, setText] = useState("");
  return (
      <>
      <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'grey':'white'}} id="myBox" rows="8"></textarea>
        </div>
       <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
       <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h2>Your text summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter your text in the above text area to preview here"}</p>
      </div>
      </>
  )
}
