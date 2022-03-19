import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { ErrorLayout } from "~/modules/shared";
import { TodoIndexPage, TodosApi } from "~/modules/todos";

export const meta: MetaFunction = () => {
  return {
    title: "Todos"
  };
};

export const loader: LoaderFunction = async () => {
  return {
    todos: TodosApi.getTodos()
  };
};

export function ErrorBoundary({ error }: { error: Error }) {
  return <ErrorLayout error={error.message} />;
}

export default function () {
  const { todos } = useLoaderData();
  return <TodoIndexPage todos={todos} />;
}
