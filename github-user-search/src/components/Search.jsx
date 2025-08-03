import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [search, setSearch] = useState(""); // input text
  const [repos, setRepos] = useState([]);   // array of repos
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setRepos([]);

    try {
      const result = await fetchUserData(search);
      setRepos(result);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <p>Enter a GitHub username to search for repositories.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {repos.length === 0 ? (
          <li>No repositories found.</li>
        ) : (
          repos.map((repo) => <li key={repo.id}>{repo.name}</li>)
        )}
      </ul>
    </div>
  );
};

export default Search;
