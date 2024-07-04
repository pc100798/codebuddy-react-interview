import { useEffect, useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://codebuddy.review/posts").then((response) => {
      setPosts(response.data.data);
    });
  }, []);

  return (
    <div className="rounded-lg bg-gray-50 p-7 text-gray-900 shadow-lg">
      <h1 className="mb-7 text-4xl font-bold">Posts</h1>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.id} className="rounded-lg bg-white p-7 shadow-lg">
            <img
              src={post.image}
              alt={post.writeup}
              className="h-40 w-full rounded-t-lg object-cover"
            />
            <div className="mt-4 flex items-center">
              <img
                src={post.avatar || "https://via.placeholder.com/40"}
                alt={`${post.firstName} ${post.lastName}`}
                className="mr-4 h-10 w-10 rounded-full object-cover"
              />
              <h2 className="text-2xl font-bold">
                {post.firstName} {post.lastName}
              </h2>
            </div>
            <p className="mt-2 text-gray-700">{post.writeup}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
