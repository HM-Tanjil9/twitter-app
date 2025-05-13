import { useState } from 'react';
import AddTweet from './AddTweet';
import TweetList from './TweetList';

const initialDummyTweets = [
    { 
        id: 1, 
        content: "Apple just announced the new iPhone 15!", 
        likeCount: 10,
        createdAt: new Date(),
    },
    { 
        id: 2, 
        content: "Microsoft unveils Windows 12 with AI features", 
        likeCount: 28,
        createdAt: new Date(),
    },
    { 
        id: 3, 
        content: "Tesla Cybertruck deliveries begin next month", 
        likeCount: 45,
        createdAt: new Date(),
    },
    { 
        id: 4, 
        content: "NASA discovers water on Mars", 
        likeCount: 92,
        createdAt: new Date(),
    },
    { 
        id: 5, 
        content: "Taylor Swift announces world tour dates", 
        likeCount: 150,
        createdAt: new Date(),
    }
];

export default function Tweeter() {
    const [tweets, setTweets] = useState(initialDummyTweets);
    const handleAddTweet = (text) => {
        let nextId = (tweets.length > 0) ? tweets.length + 1 : 0;
        setTweets([...tweets,{
            content: text,
            likeCount: Math.floor(Math.random() * 10),
            id: nextId,
            createdAt: new Date(),
        }]);
    }
    const handleEditTweet = (updateTweet) => {
        setTweets(
            tweets.map((prevTweet) => {
                if(prevTweet.id === updateTweet.id) {
                    return updateTweet;
                } else {
                    return prevTweet;
                }
            })
        )
    }
    const sortTweets = () => {
        tweets.sort((t1, t2) => t2.createdAt.getTime() - t1.createdAt.getTime());
        setTweets([...tweets]);
    }
    return (
        <>
            <AddTweet onAddTweet={handleAddTweet}/>
            <button onClick={sortTweets}>Sort by created at</button>
            <TweetList tweets={tweets} onEditTweet={handleEditTweet}/>
        </>
    )
}
