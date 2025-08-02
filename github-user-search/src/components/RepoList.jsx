import { useEffect, useState } from 'react';
import { fetchUserRepos } from '../services/githubApi';

function RepoList() {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserRepos('EzeMatthew2002')
      .then(setRepos)
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {repos.length === 0 ? (
        <li>No repositories found.</li>
      ) : (
        repos.map(repo => <li key={repo.id}>{repo.name}</li>)
      )}
    </ul>
  );
}

export default RepoList;
