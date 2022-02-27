import { MetaFunction } from "remix";
import { Layout } from "~/modules/shared";

export const meta: MetaFunction = () => {
  return {
    title: "Welcome"
  };
};

export default function () {
  return (
    <Layout title={"Welcome"}>
      <h1>Welcome to Remix</h1>
    </Layout>
  );
}
