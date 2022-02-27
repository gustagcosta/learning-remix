import { useEffect } from "react";
import { Outlet, useLocation } from "remix";
import { Layout } from "~/modules/shared";

interface GithubContainerProps {
  user: {
    login: string;
    bio: string;
    avatar_url: string;
  };
}

export function GithubContainer({ user }: GithubContainerProps) {
  return (
    <Layout title={"Github Container"}>
      <h1>{user.login}</h1>
      <blockquote>{user.bio}</blockquote>
      <img width={100} src={user.avatar_url} alt={user.login} />
    </Layout>
  );
}
