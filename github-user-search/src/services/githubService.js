export async function fetchUserData(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  return await response.json();
}
