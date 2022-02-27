import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { GithubContainer, Api, Types } from "~/modules/github";
import { ErrorLayout } from "~/modules/shared/components/ErrorLayout";

export const meta: MetaFunction = () => {
  return {
    title: "Github Container"
  };
};

export const loader: LoaderFunction = async ({ params }) => {
  return {
    user: await Api.getGithubUserInfoByUsername(params.username)
  };
};

export function ErrorBoundary({ error }: { error: Error }) {
  return <ErrorLayout error={error.message} />;
}

export default function () {
  const { user } = useLoaderData<Types.LoaderData>();

  return <GithubContainer user={user} />;
}
