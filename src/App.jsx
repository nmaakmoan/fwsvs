import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <h1>News Feed</h1>

      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div className="posts">
          {posts.map((post) => (
            <article className="post" key={post.id}>
              <h2>{post.title}</h2>

              <p>{post.body}</p>

              <div className="reactions">
                👍 {post.reactions.likes}
                {"  "}
                👎 {post.reactions.dislikes}
              </div>

              <div className="tags">
                {post.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;