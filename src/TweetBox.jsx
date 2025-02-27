import "./tweetbox.css";
import { FaImage } from "react-icons/fa";
import React from "react";
import { DataContext } from "./FeedTab.jsx";
import { v4 as uuidv4 } from "uuid";

export function TweetBox() {
    const [tweetInput, setTweetInput] = React.useState("");
    const { tweets, setTweets } = React.useContext(DataContext);
    const [media, setMedia] = React.useState(null);
    const [showTweetBoxInMobile, setShowTweetBoxInMobile] = React.useState(false);

    function handleChange(event) {
        setTweetInput(event.target.value);
    }

    function toggleTweetBoxInMobile() {
        setShowTweetBoxInMobile((prev) => !prev);
    }

    function imageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            setMedia(URL.createObjectURL(file));
        }
    }

    function handleClick() {
        const inputObject = {
            id: uuidv4(),
            userId: 101,
            content: tweetInput,
            likes: 0,
            retweets: 0,
            isLiked: false,
            isRetweeted: false,
            replies: [],
            media: media ? [{ type: "image", url: media }] : [],  
            user: {
                id: 101,
                username: "mr_curious",
                name: "Mr Curious",
                url: "https://avatarfiles.alphacoders.com/374/thumb-350-374340.webp",
            },
        };
        setTweets([inputObject, ...tweets]);
        setTweetInput("");
        setMedia(null);  
        setShowTweetBoxInMobile(false); // Hide after posting on mobile
    }

    return (
        <>

        {showTweetBoxInMobile && <div onClick={toggleTweetBoxInMobile} className="dark-background">
        </div>}
            
            <div onClick={toggleTweetBoxInMobile} style={{ backgroundColor: "#305CDE",borderRadius:"50%" }} className="tweet-icon p-2 align-items-center justify-content-center">
                <svg style={{ backgroundColor: "#305CDE" }}  className="d-flex m-1 align-items-center justify-content-center" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="white" d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
                </svg>
            </div>

            <div className={`tweet-box pt-3 ${showTweetBoxInMobile ? "d-flex" : "d-none d-md-flex"}`}>
                <img className="tweetbox-img" src="https://avatarfiles.alphacoders.com/374/thumb-350-374340.webp" alt="Profile" />
                <div className="d-flex flex-column w-100">
                    <textarea
                        style={{ color: "white" }}
                        value={tweetInput}
                        onChange={handleChange}
                        name="ourTweet"
                        onInput={(e) => {
                            e.target.style.height = "50px";
                            e.target.style.height = e.target.scrollHeight + "px";
                        }}
                        className="w-100 mx-2 tweet-box-abc"
                        minLength="1"
                        placeholder="What's Happening?"
                    ></textarea>

                    {media && <img src={media} alt="Uploaded" className="uploaded-img mb-md-3 mb-1" />} 

                    <div className="addbordertop d-flex align-items-center justify-content-between mx-2 pt-2">
                        <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
                            <FaImage size={24} color="blue" />
                        </label>
                        <input
                            onChange={imageUpload}
                            type="file"
                            id="imageUpload"
                            style={{ display: "none" }}
                            accept="image/*"
                        />
                        <button onClick={handleClick} className="tweet-btn-sm">Tweet</button>
                    </div>
                </div>
            </div>
        </>
    );
}
