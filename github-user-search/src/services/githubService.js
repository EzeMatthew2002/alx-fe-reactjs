import axios from 'axios';

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.data;
  } catch (error) {
    throw new Error(`GitHub API error: ${error.response?.status || error.message}`);
  }
}
