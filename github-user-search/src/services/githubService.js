import axios from "axios";

export async function fetchUserData({ username, location, minRepos }) {
  try {
    let query = "";

    if (username) query += `${username}+`;
    if (location) query += `location:${location}+`;
    if (minRepos) query += `repos:>=${minRepos}`;

    const url = `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`;

    const response = await axios.get(url);

    return response.data.items;
  } catch (error) {
    throw new Error(error.response?.data?.message || "GitHub API error");
  }
}
