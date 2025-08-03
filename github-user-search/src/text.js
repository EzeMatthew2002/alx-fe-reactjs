fetch('https://api.github.com/users/EzeMatthew2002/repos').then((response) => {
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }
  return response.json();
}).then((data) => {
  console.log(data);
});