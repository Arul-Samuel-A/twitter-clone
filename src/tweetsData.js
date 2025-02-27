
export let tweetsData =
[
  {
    "id": 15,
    "content": "Exploring a new hiking trail today! #Hiking #Adventure",
    "media": [
        {
          "type": "image",
          "url": "https://img.freepik.com/free-photo/young-beautiful-friends-with-rucksacks-going-up-hill_176420-4249.jpg"
        }
      ],
    "likes": 290,
    "retweets": 130,
    "replies": [
      {
        "id": 7,
        "user": { "id": 1151, "username": "trail_blazer", "name": "Ryan" ,"url":""},
        "content": "Which trail? I'd love to try it sometime!",
        "createdAt": "2025-02-06T23:00:00Z",
        "likes": 30,
        "isLiked": false,
        "isRetweeted": false,
        "replies": []
      }
    ],
    "isLiked": false,
    "isRetweeted": false,
    "tags": ["Hiking", "Adventure"],
    "user": { "id": 115, "username": "nature_ella", "name": "Ella","url":"https://i.pinimg.com/564x/90/ee/92/90ee92ebe68542122f77f1f154b55a6b.jpg" }
  },
  {
    "id": 9,
    "userId": 109,
    "content": "Just finished painting my latest artwork! #Art #Creativity",
    "likes": 190,
    "retweets": 75,
    "replies": [
      {
        "id": 1,
        "user": { "id": 1091, "username": "art_fan", "name": "Sophie", "url":"https://dpwalay.net/wp-content/uploads/2023/06/dp-nature-images-1.jpg" },
        "content": "That sounds amazing! Can we see it?",
        "createdAt": "2025-02-06T19:00:00Z",
        "likes": 22,
        "isLiked": false,
        "isRetweeted": false,
        "replies": [
          {
            "id": 123,
            "user": { "id": 1092, "username": "mia_artist", "name": "Mia","url":"" },
            "content": "Of course! I'll upload it soon.",
            "createdAt": "2025-02-06T19:15:00Z",
            "likes": 10,
            "isLiked": false,
            "isRetweeted": false,
            "replies": [{
              "id": 124,
              "user": { "id": 1093, "username": "creative_soul", "name": "Alex","url":"" },
              "content": "Can't wait to see it! Your work is always inspiring. 🎨",
              "createdAt": "2025-02-06T19:30:00Z",
              "likes": 8,
              "replies": []
            }]
          }
        ]
      }
    ],
    "isLiked": true,
    "isRetweeted": false,
    "media": [],
    "tags": ["Art", "Creativity"],
    "user": { "id": 109, "username": "artist_mia", "name": "Mia","url":"" }
  }
  ,
  {
    "id": 10,
    "content": "Learning to play the guitar! Any song recommendations? #Music #Guitar",
    "likes": 260,
    "retweets": 110,
    "replies": [
      {
        "id": 2,
        "user": { "id": 1101, "username": "music_lover", "name": "Jake","url":"" },
        "content": "Try 'Wonderwall' by Oasis! It's a great beginner song.",
        "createdAt": "2025-02-06T20:00:00Z",
        "isLiked": false,
        "isRetweeted": false,
        "likes": 35,
        "replies": []
      },{
        "id": 12334,
        "user": { "id": 11011, "username": "music_lover", "little_one": "Armstrong" ,"url":""},
        "content": "Just a listener lol!",
        "createdAt": "2025-02-06T20:00:00Z",
        "isLiked": false,
        "isRetweeted": false,
        "likes": 35,
        "replies": []
      }
    ],
    "isLiked": true,
    "isRetweeted": false,
    "media": [],
    "tags": ["Music", "Guitar"],
    "user": { "id": 110, "username": "guitar_noob", "name": "Leo","url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs3kYLdHE7OwcINTme4Dq51bTGM4Fe8BLUmonh9isJD9BYYR58ukDP8ISkcIf4f4Xn9tU&usqp=CAU" }
  },
  {
    "id": 11,
    "content": "Excited for the upcoming marathon! #Running #Fitness",
    "likes": 310,
    "retweets": 140,
    "media": [
        {
          "type": "image",
          "url": "https://tailoredathlete.com/cdn/shop/articles/best_shirts_for_tall_athletic_guys_c41ec6d5-2dc8-480b-83cc-40fa8387f69d_900x.jpg?v=1732542682"
        }
      ],
    "replies": [
      {
        "id": 3,
        "user": { "id": 1111, "username": "fitness_freak", "name": "Mark","url":"" },
        "content": "Good luck! Hope you beat your personal best!",
        "createdAt": "2025-02-06T21:30:00Z",
        "likes": 50,
        "isLiked": true,
        "isRetweeted": false,
        "replies": []
      }
    ],
    "isLiked": false,
    "isRetweeted": false,
    "tags": ["Running", "Fitness"],
    "user": { "id": 111, "username": "runner_kate", "name": "Kate","url":"https://ashisheditz.com/wp-content/uploads/2024/02/boys-alone-whatsapp-dp.jpg" }
  },
  {
    "id": 12,
    "content": "Trying out a new coding language today! #Coding #Tech",
    "likes": 280,
    "retweets": 120,
    "replies": [
      {
        "id": 4,
        "user": { "id": 1121, "username": "dev_dan", "name": "Dan","url":"https://i.pinimg.com/564x/aa/d8/c8/aad8c8ce497e9b5295e454188a044411.jpg" },
        "content": "Which language? Excited to hear about your experience!",
        "createdAt": "2025-02-06T21:00:00Z",
        "likes": 28,
        "isLiked": false,
        "isRetweeted": false,
        "replies": []
      }
    ],
    "isLiked": true,
    "isRetweeted": false,
    "media": [],
    "tags": ["Coding", "Tech"],
    "user": { "id": 112, "username": "coder_amy", "name": "Amy","url":"" }
  },
  {
    "id": 13,
    "content": "Watching the stars tonight. The universe is so vast! #Astronomy #NightSky",
    "likes": 370,
    "retweets": 180,
    "media": [
        {
          "type": "image",
          "url": "https://blog.nwf.org/wp-content/blogs.dir/11/files/2015/06/ShootingStar_Donated_JordanReed.jpg"
        }
      ],
    "replies": [
      {
        "id": 5,
        "user": { "id": 1131, "username": "astro_fan", "name": "Emma" ,"url":""},
        "content": "Did you see any shooting stars?",
        "createdAt": "2025-02-06T22:00:00Z",
        "likes": 15,
        "isLiked": false,
        "isRetweeted": false,
        "replies": []
      }
    ],

    "isLiked": false,
    "isRetweeted": false,
    "tags": ["Astronomy", "NightSky"],
    "user": { "id": 113, "username": "stargazer_lily", "name": "Lily","url":"https://dpandpics.com/images/happy-dp/happy-dp-for-whatsapp134.jpg" }
  },
  {
    "id": 14,
    "content": "Cooking my favorite dish today! #Food #Cooking",
    "likes": 225,
    "retweets": 95,
    "replies": [
      {
        "id": 6,
        "user": { "id": 1141, "username": "foodie_tom", "name": "Tom" ,"url":""},
        "content": "What are you making? Sounds delicious!",
        "createdAt": "2025-02-06T22:30:00Z",
        "likes": 18,
        "isLiked": false,
        "isRetweeted": false,
        "replies": []
      }
    ],
    "isLiked": true,
    "isRetweeted": false,
    "media": [],
    "tags": ["Food", "Cooking"],
    "user": { "id": 114, "username": "chef_anna", "name": "Anna" ,"url":"https://sadgirldp.com/wp-content/uploads/whatsapp-sad-girl-dp-78.jpg"}
  },
]
