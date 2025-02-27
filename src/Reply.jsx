import Image from "./assets/pfp.png"
import "./reply.css"
import React from "react"
import ImageTwo from "./assets/my-dp.jpg"
import "./tweet.css"

export function Reply({ tweet, reply, findId, tweetReply, setTweetReply,likedId }) {
    
    const [showNestedReplies, setShowNestedReplies] = React.useState(false);
    const [showReplyBoxR, setShowReplyBoxR] = React.useState(false);

    function toggleShowNestedReplies() {
        setShowNestedReplies(prev => !prev);
    }

    console.log("Running Reply Component");

    const nestedReplies = reply.replies.map((anNestedReply) => (
        <div key={anNestedReply.id} className="ps-2">
            <Reply
                tweetReply={tweetReply}
                setTweetReply={setTweetReply}
                findId={findId}
                reply={anNestedReply}
                tweet={tweet}
                likedId={likedId}
            />
        </div>
    ));

    function onReply(e) {
        setTweetReply(e.target.value);
    }

    function handleReply() {
        findId(reply.id, tweetReply);
        setTweetReply("");
        setShowReplyBoxR(false);
    }

    function handleCancel() {
        setShowReplyBoxR(false);
        setTweetReply("");
    }

    return (
        <>
            <div className="reply d-flex">
                <div>
                    <img src={reply.user.url? reply.user.url : Image} className="profile-pic" />
                </div>

                <div className="d-flex w-100 flex-column">
                    <div className="d-flex w-100 flex-column">
                        <h6>{reply.user.name}</h6>
                        <p>{reply.user.username}</p>
                    </div>
                    <div className="w-100 pb-2">
                        <p>{reply.content}</p>
                    </div>
                    <div className="interactions d-flex pe-3 justify-content-between">
                        <div style={{cursor:"pointer"}} onClick={toggleShowNestedReplies} className="d-flex align-items-center">
                            <svg  width="24" height="24" viewBox="0 0 24 24">
                                <path  fill={showNestedReplies && reply.replies != 0? "#305CDE" : "grey"} d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                            </svg>
                            <h6>{reply.replies.length}</h6>
                        </div>
                        <div style={{cursor:"pointer"}} onClick={()=>likedId(reply.id)} className="d-flex align-items-center">
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path  fill={reply.isLiked ? "red" : "grey"} d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                            </svg>
                            <h6>{reply.likes}</h6>
                        </div>
                        <div style={{cursor:"pointer"}} className="d-flex align-items-center">
                            <button onClick={() => setShowReplyBoxR(prev => !prev)} className="reply-btn" style={{opacity: showReplyBoxR ? "50%" : "100%"}} >Reply</button>
                        </div>
                    </div>

                    {showReplyBoxR && (
                        <div className="reply-box pt-3">
                            <div className="d-flex flex-column w-100">
                                <textarea style={{ color: "white" ,fontSize:"1rem"}}
                                    value={tweetReply}
                                    onChange={onReply}
                                    name="ourTweet"
                                    onInput={(e) => {
                                        e.target.style.height = "50px";
                                        e.target.style.height = e.target.scrollHeight + "px";
                                    }}
                                    className="w-100 mx-2"
                                    minLength="1"
                                    placeholder="Add a Reply!"
                                ></textarea>
                                <div className="addbordertop d-flex align-items-center justify-content-between mx-2 pt-2">
                                    <button style={{padding:"2px 8px",fontSize:"14px"}} onClick={handleCancel} className="tweet-btn-sm">Cancel</button>
                                    <button style={{padding:"2px 8px",fontSize:"14px"}}  onClick={handleReply} className="tweet-btn-sm">Reply</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {showNestedReplies && nestedReplies}
        </>
    );
}
