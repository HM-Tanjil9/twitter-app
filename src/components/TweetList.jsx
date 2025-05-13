import Tweet from "./Tweet";

function TweetList({tweets, onEditTweet}) {
    return(
        <ul style={{listStyle: 'none', padding: '0'}}>
            {
                tweets.map((tweet) => (
                    <li style={{marginBottom: '10px'}} key={tweet.id}>
                        <Tweet
                            tweetId={tweet.id}
                            content={tweet.content}
                            likeCount={tweet.likeCount}
                            createdAt={tweet.createdAt.toString()}
                            onEdit={onEditTweet}
                         />
                    </li>
            ))
            }
        </ul>
    )
}
export default TweetList;