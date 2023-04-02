import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleReverseClick = () => {
        let newText = text.split('').reverse().join('');
        setText(newText);

    }

    const handleFormalClick = () => {
        alert("We are working on it");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5" placeholder='Enter text here'></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary my-2" onClick={handleUpClick}>toUpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>toLowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>toClearText</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleReverseClick}>toReverseText</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleFormalClick}>Formal</button>
            </div>
            <div className='container my-3'>
                <h2>Your Text Tummary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} munites will take to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Write something to preview"}</p>
            </div>
        </div>
    )
}