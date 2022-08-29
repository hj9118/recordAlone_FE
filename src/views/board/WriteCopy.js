import { useEffect, useState } from 'react';
import axios from 'axios';


function Write(){

    const [id, Setid] = useState();
    const [title, SetTitle] = useState("");
    const [content, SetContent] = useState("");

    
    return(
    


    <div>
        <form method='post' action='/board/insert'>
            <div>
                <input name='title'></input>
            </div>
            <div>
                <textarea name='content'></textarea>
            </div>
            <button type='submit'>글 작성a</button>
        </form>
    </div>
        )
    }

export default Write;