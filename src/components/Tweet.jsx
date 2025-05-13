import { useState } from 'react';
import '../css/Tweet.css';
function Tweet({tweetId, content, likeCount, createdAt, onEdit}) {
    const [isEditing, setIsEditing] = useState(false);

    return(
        <div className="tweet-wrapper">
            <div className="tweet-content">
                <div >
                    {isEditing ? (
                        <textarea 
                            value={content} 
                            onChange={(e) => onEdit({
                                id: tweetId,
                                content: e.target.value,
                                likeCount: likeCount,
                                createdAt: createdAt,
                            })
                        }/>
                    ) : content}
                </div>
                <div>
                    <button onClick={() => {setIsEditing(!isEditing)}}>
                        {(isEditing) ? 'Save' : 'Edit'}
                    </button>
                </div>
            </div>
            <span className='tweet-bottom'>
                <div className="likes">
                    {likeCount} likes
                </div>
                <div className='created-at'>
                    <b>Tweeted at :</b>{createdAt}
                </div>
            </span>
        </div>
    )
}
export default Tweet;