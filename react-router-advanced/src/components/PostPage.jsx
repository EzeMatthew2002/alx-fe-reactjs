import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((r) => r.json())
      .then(setPost)
      .catch(console.error);
  }, [postId]);

  if (!post) return <p>Loading post {postId}…</p>;
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
