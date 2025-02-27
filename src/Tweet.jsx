import "./tweet.css"
import {DataContext} from "./FeedTab.jsx"
import React from "react"
import Image from "./assets/pfp.png"
import ImageTwo from "./assets/my-dp.jpg"
import { Reply } from "./Reply.jsx"
import MyProfile from "./assets/my-dp.jpg"
import { v4 as uuidv4 } from 'uuid';


export function Tweet({id}){
    const tweets = React.useContext(DataContext)
    const tweet = tweets.tweets.find((aTweet) => aTweet.id === id);
    const [likes,setLikes] = React.useState(tweet.likes)
    const [retweets,setRetweets] = React.useState(tweet.retweets)
    const[likeIcon,setLikeIcon]= React.useState(tweet.isLiked)
    const[retweetIcon,setRetweetIcon]= React.useState(tweet.isRetweeted)
    const[showReplies,setShowReplies] = React.useState(false)
    const[showReplyBox,setShowReplyBox] = React.useState(false)
    const[tweetReply,setTweetReply] = React.useState("")

    console.log("Running Tweet Component");


    function onReply(e){
        const reply = e.target.value
        setTweetReply(reply)
    }


    function likedId(id) {
        tweets.setTweets((prev) => {
            function ChangeIsLiked(tweet) {
                if (tweet.id === id) {
                    return { 
                        ...tweet, 
                        isLiked: !tweet.isLiked,
                        likes: tweet.isLiked ? tweet.likes - 1 : tweet.likes + 1 // Update like count
                    };
                } else {
                    return {
                        ...tweet,
                        replies: tweet.replies.map((reply) => {
                            if (reply.id === id) {
                                return { 
                                    ...reply, 
                                    isLiked: !reply.isLiked,
                                    likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1 // Update like count
                                };
                            } else if (reply.replies.length !== 0) {
                                return ChangeIsLiked(reply);
                            }
                            return reply;
                        }),
                    };
                }
            }
    
            return prev.map(ChangeIsLiked);
        });
    }
    


    function findId(id,tweetReply){
        setShowReplyBox(false);
        const replyBoxObject = {
            id: uuidv4(),
            userId: 101,
            content: tweetReply,
            likes: 0,
            retweets: 0,
            isLiked: false,
            isRetweeted: false,
            replies: [],
            media: [],
            user: {
                id: 101,
                username: "mr_curious",
                name : "Mr Curious",
                url : "https://avatarfiles.alphacoders.com/374/thumb-350-374340.webp"
            }
        };

        tweets.setTweets((prev) => {
            function ChangeReply(tweet) {
                if (tweet.id === id) {
                    return { ...tweet, replies: [...tweet.replies, replyBoxObject] };
                } else {
                    return {
                        ...tweet,
                        replies: tweet.replies.map((reply) => {
                            if (reply.id === id) {
                                return { ...reply, replies: [...reply.replies, replyBoxObject] };
                            } else if (reply.replies.length !== 0) {
                                return ChangeReply(reply);
                            }
                            return reply;
                        }),
                    };
                }
            }
        
            return prev.map(ChangeReply);
        });
        
        
    }
        

    function handleCancel(){
        setShowReplyBox((prev)=>!prev)
        setTweetReply("")
    }


    function toggleReplies(){
        setShowReplies((prev => !prev))
    }

    function toggleLike(){
        setLikeIcon((prev)=>!prev)
        setLikes(prev => prev + (likeIcon ? -1 : 1))
    }
    function toggleRetweet(){
        setRetweetIcon((prev)=>!prev)
        setRetweets(prev => prev + (retweetIcon ? -1 : 1))
    }
    

    return(
        <div className="ninety">
            <div className="tweet">
            <img src={tweet.user.url? tweet.user.url : Image} className="profile-pic" />
                <div className="tweet-body w-100">
                        <h4>{tweet.user.name}</h4>
                        <p>{tweet.user.username}</p>
                        <div className="tweet-container pt-md-2 pt-1">
                            <p>{tweet.content}</p>
                        </div>
                        {(tweet.media.length !== 0) && <div className="tweet-img-container pt-2">
                            <img src={tweet.media[0].url} className="media"/>
                        </div>}
                        <div className="interactions d-flex mt-md-2 mt-1">
                            <div onClick={toggleReplies} style={{cursor:"pointer"}} className="d-flex align-items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                    <path fill={(showReplies ===true) && (tweet.replies.length !=0)? "#305CDE":"grey"} d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                                </svg>
                                <h6>{tweet.replies.length}</h6>
                            </div>
                            <div onClick={toggleRetweet} style={{cursor:"pointer"}} className="d-flex align-items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24">
                                <path  fill={retweetIcon ===true? "#80EF80":"grey"} d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                                </svg>
                                <h6>{retweets}</h6>
                            </div>
                            <div onClick={toggleLike} style={{cursor:"pointer"}} className="d-flex align-items-center">
                                <svg  width="24" height="24" viewBox="0 0 24 24">
                                <path  fill={likeIcon ===true? "red":"grey"} d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>                        
                                </svg>
                                <h6>{likes}</h6>
                            </div>
                            <div className="d-flex align-items-center" style={{cursor:"pointer"}}>
                                <button style={{opacity: showReplyBox ? "50%" : "100%"}} onClick={()=>setShowReplyBox((prev)=>!prev)} className="reply-btn">Reply</button>
                            </div>
                            
                        </div>
                        {showReplyBox && <div className="reply-box w-100 pt-3">
                            <div className="d-flex flex-column w-100 ">
                                <textarea style={{ color: "white" ,fontSize:"1rem"}} value={tweetReply} onChange={onReply} name="ourTweet" onInput={(e) => {
                                    e.target.style.height = "50px";
                                    e.target.style.height = e.target.scrollHeight + "px";
                                    }} className="w-100 mx-2 reply-box-ab" minLength="1" placeholder="Add a Reply!">
                                </textarea>
                                <div className="addbordertop d-flex align-items-center justify-content-between mx-2 pt-2">
                                    <button onClick={handleCancel} className="tweet-btn-sm"
                                    style={{padding:"2px 8px",fontSize:"14px"}}
                                    >Cancel</button>
                                    <button style={{padding:"2px 8px",fontSize:"14px"}} onClick={()=>findId(tweet.id,tweetReply)} className="tweet-btn-sm">Reply</button>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>

            
            {showReplies===true && tweet.replies.map((reply)=>{
                return <Reply likedId={likedId} tweetReply={tweetReply} setTweetReply={setTweetReply} findId={findId} key={reply.id} tweet={tweet} reply={reply}/>
            })}
            </div>
    )
}