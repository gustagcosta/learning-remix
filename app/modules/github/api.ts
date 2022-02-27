export const getGithubUserInfoByUsername = async (username?: string) => {
  if (!username) {
    // Work with a logger?
    console.error("Invalid username provided");
    throw new Error("Invalid username provided");
  }

  const response = await fetch(`https://api.github.com/users/${username}`);

  const { login, avatar_url, html_url, bio } = await response.json();

  return { login, avatar_url, html_url, bio };
};
