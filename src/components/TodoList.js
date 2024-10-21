import React, { useState } from "react";

function TodoList() {
    
    const [list, setList] = useState([]);
    const [txt, setTxt] = useState('');

    const addNote = () => {
        setList([...list, txt]);
        setTxt('');
    }

    return ( 
        <>
            <input 
                type="text" 
                onChange={(e) => setTxt(e.target.value)} 
                value={txt}
            ></input>

            <button onClick={addNote}>add</button>
            <ul>
                {list.map(el => 
                    <li key={list.indexOf(el)}>{el}</li>
                )}
            </ul>
        </>
     );
    }

export default TodoList;