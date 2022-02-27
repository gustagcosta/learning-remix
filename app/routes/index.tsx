import { useEffect } from "react";
import { LoaderFunction } from "remix";

export const loader: LoaderFunction = async () => {
  console.log("salve 1");
  return {};
};

export default function () {
  useEffect(() => {
    console.log("salve 2");
  }, []);
  return (
    <div>
      <h1>Welcome to Remix</h1>
    </div>
  );
}
