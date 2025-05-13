import { useState } from "react";

function AddTweet({onAddTweet}) {
    const [text, setText] = useState('');
    return (
        <>
            <input type="text" placeholder="Add a new tweet ..." value={text} onChange={(e) => setText(e.target.value)}/>
            <button
                onClick={() => {onAddTweet(text); setText('')}}
            >
                Add Todo
            </button>
        </>
    );
}
export default AddTweet;