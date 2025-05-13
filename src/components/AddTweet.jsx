import { useState } from "react";

function AddTweet({onAddTweet}) {
    const [text, setText] = useState('');
    return (
        <>
            <input type="text" placeholder="Add a new tweet ..." value={text} onChange={(e) => setText(e.target.value)}/>
            <input type="button" value="Add tweet" onClick={() => {onAddTweet(text); setText('')}} />
        </>
    );
}
export default AddTweet;