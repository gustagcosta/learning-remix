import { MetaFunction } from "remix";
import { Layout } from "~/modules/shared";

export const meta: MetaFunction = () => {
  return {
    title: "Github"
  };
};

export default function () {
  return (
    <Layout title={"Github"}>
      <h1>Welcome to Github Module</h1>
    </Layout>
  );
}
