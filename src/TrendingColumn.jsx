import "./trending.css"
import { tweetsData } from "./tweetsData"
import Image from "./assets/pfp.png"

export function TrendingColumn(){

    console.log("Running TrendingColumn Component");

    const copy = JSON.parse(JSON.stringify(tweetsData));

    const suggestions = copy.map((tweet)=>{
        return(
            <div key={tweet.id} className="suggestions-item d-flex align-items-center py-3 px-2">
                <div className="d-flex">
                    <img src={tweet.user.url? tweet.user.url : Image} className="profile-pic" />
                    <div className="d-flex flex-column ms-2">
                        <h6>{tweet.user.name}</h6>
                        <p>{tweet.user.username}</p>
                    </div>
                </div>
                <button className="follow-btn">Follow</button>
                </div>)
    })

    return(
    <>
        <div className="trending-column p-3 rounded-4 my-4">
            <div className="trending-header">
                <h5>Trending</h5>
            </div>
            <div className="trending-item p-3">
                <h6>#Trending1</h6>
                <p>100k Tweets</p>
            </div>
            <div className="trending-item p-3">
                <h6>#Trending2</h6>
                <p>100k Tweets</p>
            </div>
            <div className="trending-item p-3">
                <h6>#Trending3</h6>
                <p>100k Tweets</p>
            </div>
            <div className="trending-item p-3">
                <h6>#Trending4</h6>
                <p>100k Tweets</p>
            </div>
            <div className="trending-item p-3">
                <h6>#Trending5</h6>
                <p>100k Tweets</p>
            </div>
        </div>
        <div className="suggestions rounded-4">
            <div className="suggestions-header rounded-4 p-3">
                <h5>Who to follow</h5>
                {suggestions}
            </div>
        </div>
         </>
    )
}