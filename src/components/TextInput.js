import React, {useState} from "react";


function TextInput() {
    
    const [text, setText] = useState();
    
    const textUpdate = () => {
        setText(document.querySelector('.inputText').value)
    }


    return ( 
        <div>
            <input type="text" onChange={textUpdate} className="inputText"></input>
            <p>{text}</p>
        </div>
     );
}

export default TextInput;