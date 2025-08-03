import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const results = await fetchUserData({ username, location, minRepos });
      setUsers(results);
    } catch (err) {
      setError("Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2 text-center">Advanced GitHub User Search</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="w-full p-2 border rounded"
          type="number"
          placeholder="Minimum Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded flex items-center gap-4">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
            <div>
              <a href={user.html_url} className="font-bold text-blue-600" target="_blank" rel="noreferrer">
                {user.login}
              </a>
              {user.location && <p className="text-sm text-gray-500">Location: {user.location}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
