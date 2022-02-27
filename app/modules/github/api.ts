import { User } from "./types";

export const getGithubUserInfoByUsername = async (
  username?: string
): Promise<User> => {
  if (!username) {
    // Logger
    throw new Error("Nome de usuário Inválido");
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    const { login, avatar_url, html_url, bio } = await response.json();

    if (response.status !== 200) {
      // Logger
      throw new Error("Erro na comunicação com a API do Github");
    }

    return { login, avatar_url, html_url, bio };
  } catch (error) {
    // Logger
    throw new Error("Erro na comunicação com a API do Github");
  }
};
