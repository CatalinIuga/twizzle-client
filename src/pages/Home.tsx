import { useState } from "react";
import { Link } from "react-router-dom";

type Tweet = {
  id: number;
  content: string;
  author: {
    id: string;
    username: string;
    email: string;
  };
  avatar: string;
  time: string;
  likes: number;
  comments: string[];
};

export default function Home() {
  const [newTweet, setNewTweet] = useState<string>("");
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const handleTweetChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTweet(e.target.value);
  };

  const handleTweetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTweet.trim() !== "") {
      const tweet: Tweet = {
        id: Date.now(),
        content: newTweet,
        author: { username: "John Doe", id: "12", email: "test@email.com" },
        avatar: "lol",
        time: new Date().toLocaleString(),
        likes: 0,
        comments: [],
      };
      setTweets([tweet, ...tweets]);
      setNewTweet("");
    }
  };
  return (
    <>
      <form onSubmit={handleTweetSubmit} className="mb-4">
        <div className="relative w-full h-16 px-4 py-2 rounded border border-gray-300 bg-dark text-text">
          <textarea
            className="w-full h-full outline-none overflow-y-auto bg-transparent"
            placeholder="What's happening?"
            value={newTweet}
            onChange={handleTweetChange}
          />
        </div>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-primary text-text rounded hover:bg-accent focus:outline-none"
        >
          Tweet
        </button>
      </form>

      <ul>
        {tweets.map((tweet) => (
          <li
            key={tweet.id}
            className="bg-secondary p-4 mb-4 rounded shadow text-text"
          >
            <div className="flex items-center mb-2">
              <img
                src={`data:image/svg+xml,${encodeURIComponent(tweet.avatar)}`}
                alt="Avatar"
                className="w-8 h-8 mr-2 rounded-full"
              />
              <span className="font-semibold">{tweet.author.username}</span>
              <span className="ml-auto text-gray">{tweet.time}</span>
            </div>
            <p>{tweet.content}</p>
            <div className="flex items-center mt-4">
              <button className="flex items-center text-gray mr-4">
                <img className="w-6 h-6 mr-1" />
                {tweet.likes}
              </button>
              <button className="text-gray">Comment</button>
              {/* Add more actions as needed */}
            </div>
          </li>
        ))}
      </ul>
      <Link to={"/login"}>Login</Link>
    </>
  );
}
