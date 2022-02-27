import { LoaderFunction, useLoaderData } from "remix";
import { GithubContainer, Api, Types } from "~/modules/github";

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await Api.getGithubUserInfoByUsername(params.username)
  };
};

export function ErrorBoundary() {
  return <h1>Houve um erro ao acesar essa página</h1>;
}

export default function () {
  const { user } = useLoaderData<Types.LoaderData>();

  return <GithubContainer user={user} />;
}
