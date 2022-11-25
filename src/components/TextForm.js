import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase  was clickrd")
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Uppercase","success")
  }

  const handleLowClick = () => {
    // console.log("uppercase  was clicked")
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lowercase","success")
  }
  const downloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
    props.showAlert("Download complete","success")
  }


  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value)
  }
  const [text, setText] = useState('')
  return (
    <div className="container" style={ {color : props.mode==='dark'? 'white': 'black'}}>

      <div className="my-3">
        <h1> {props.heading}</h1>
        <textarea className="form-control" id="exampleFormControlTextarea1" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} value={text} onChange={handleOnChange}  rows="12"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary " onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={downloadText}>Download Text</button>

      <h3>Your text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} charcters </p>
      <p>Takes {0.008 * text.split(" ").length} Minutes to read. </p>
      <h2>Preview</h2>
      <p>{text}</p>

    </div>
  )
}
