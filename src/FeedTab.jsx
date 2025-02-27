import React  from "react"
import { tweetsData } from "./tweetsData"
import { Tweet } from "./Tweet"
import { TweetBox } from "./TweetBox"

export const DataContext = React.createContext()

export function FeedTab(){


    console.log("Running FeedTab Component");

    const [tweets,setTweets] = React.useState(tweetsData)


    return(
        <DataContext.Provider value={{tweets:tweets,setTweets:setTweets}}>
            <div className="d-flex flex-column align-items-start">
                <div className="feed-tab-header p-3">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="white" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                </div>
                <TweetBox/>
                {tweets.map((tweet=>{
                    return <Tweet key={tweet.id} id={tweet.id}/>
                }))}
            </div>
        </DataContext.Provider>
    )
}