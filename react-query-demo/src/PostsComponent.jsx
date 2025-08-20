import React from 'react';
import { useQuery } from '@tanstack/react-query';



async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}

 function PostsComponent() {
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery(
    ['posts'],
    fetchPosts,
    {
   
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 15, 
      refetchOnWindowFocus: false, 
    }
  );

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p style={{color:'red'}}>Error: {error.message}</p>;

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <button onClick={() => refetch()}>Refetch Posts</button>
        {isFetching && <span style={{marginLeft:10}}>Updating…</span>}
      </div>

      <ul>
        {data.slice(0, 20).map(post => ( 
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <p style={{ marginTop: 20, color: '#666' }}>
        Tip: navigate away and back to see cached data load instantly (staleTime controls freshness).
      </p>
    </div>
  );
}
export default PostsComponent