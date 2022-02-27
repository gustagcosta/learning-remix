import { Outlet } from "remix";

interface GithubContainerProps {
  user: {
    login: string;
    bio: string;
    avatar_url: string;
  };
}

export function GithubContainer({ user }: GithubContainerProps) {
  return (
    <>
      <Outlet />
      <h1>{user.login}</h1>
      <blockquote>{user.bio}</blockquote>
      <img width={100} src={user.avatar_url} alt={user.login} />
    </>
  );
}
