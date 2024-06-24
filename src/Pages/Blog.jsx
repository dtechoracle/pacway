// Import React and useEffect hook for fetching data
import React, { useState, useEffect } from "react";
import { fetchPages } from "../lib/notion";

// Define your Blog component as a functional component
const Blog = () => {
  // State to hold the posts fetched from fetchPages
  const [posts, setPosts] = useState([]);

  // Effect hook to fetch data when component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetchPages();
        setPosts(response.results);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []); // Empty dependency array ensures effect runs only once on mount

  // Render JSX
  return (
    <div>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.properties.Title.title[0].plain_text}</h2>
        </article>
      ))}
    </div>
  );
};

// Export the Blog component as default
export default Blog;
