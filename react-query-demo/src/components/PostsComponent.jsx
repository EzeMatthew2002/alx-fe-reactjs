// src/components/PostsComponent.jsx
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async (page) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );
  return data;
};

function PostsComponent() {
  const [page, setPage] = useState(1);

  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    keepPreviousData: true, // ✅ preserves previous page while fetching next
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts (Page {page})</h2>
      <ul className="list-disc ml-6">
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((old) => old + 1)}>Next</button>
      </div>

      {isFetching && <p className="text-sm text-gray-500">Updating...</p>}
    </div>
  );
}

export default PostsComponent;
