import { useState } from "react";



function CommentsList() {
    
    const [list, setList] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    function removeComment(num)  {
        setList(prevList => prevList.filter(comment => comment.id !== num));
    }
    
    return ( 
        <>
        <p>Home work</p>

        <ul>
                {list.map(el => 
                    <li key={el.id}>{el.text} <button onClick={() => removeComment(el.id)}>Удалить комментарий</button></li>
                )}
            </ul>
        </>
     );
}

export default CommentsList;