import React, { useState } from "react";
import { fetchGitHubData } from "../services/githubService";

const Search = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUser(null);
    setRepos([]);

    try {
      const { user, repos } = await fetchGitHubData(search);
      setUser(user);
      setRepos(repos);
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <p>Enter a GitHub username to see their profile and repos.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error} Looks like we cant find the user</p>}

      {user && (
        <div style={{ marginTop: "1rem" }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <h2>{user.login}</h2>
          <p>{user.bio}</p>
          <p>Followers: {user.followers} | Following: {user.following}</p>
        </div>
      )}

      <ul>
        {repos.length === 0 && user && !loading ? (
          <li>No repositories found.</li>
        ) : (
          repos.map((repo) => <li key={repo.id}>{repo.name}</li>)
        )}
      </ul>
    </div>
  );
};

export default Search;
