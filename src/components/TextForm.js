import React,{useState} from 'react'


export default function TextForm(Props) {
    //Buttons/////////////////////////////////////
    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        Props.showAlert("Converted To UpperCase","info")
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase()
        setText(newText)
        Props.showAlert("Converted To LowerCase","info")

    }

    const copy = () =>{
        navigator.clipboard.writeText(text)
        Props.showAlert("Copied","info")

    }
    //Buttons/////////////////////////////////////


    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const [text, setText] = useState('')

  return (
    <>
    <div className='container' style={{color: Props.mode==='dark'?'white':'black'}}>
        <h1>{Props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" c rows="8" onChange={handleOnChange} value={text}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1 disabled={text.length === 0}" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1 disabled={text.length === 0}" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1 disabled={text.length === 0}" onClick={copy}>Copy</button>

    </div>

{/* Functions */}
    <div className="container my-3" style={{backgroundColor: Props.mode==='dark'?'grey':'white', color: Props.mode==='dark'?'white':'black'}}>
        <h1>Your text Summary</h1>
        <p>{text.split("/\s+/").filter((element)=>{return element.length!=0}).length} words, {text.length} characters</p>

        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>


    </div>
    </>
  )
}
