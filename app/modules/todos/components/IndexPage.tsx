import { Layout } from "~/modules/shared";
import { Todo } from "../types";

interface TodoIndexPageProps {
  todos: Todo[];
}

export function TodoIndexPage({ todos }: TodoIndexPageProps) {
  return (
    <Layout title="Todos">
      <div>
        <form className="rounded pt-2 pb-2">
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username">
              Novo Todo
            </label>
            <input
              className="shadow appearance-none border rounded w-300 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Digite o novo to-do"
            />
            <button
              type="submit"
              className="px-3 py-2 text-sm text-blue-200 bg-blue-600 rounded-full ml-3">
              salvar
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className="container">
          <div className="w-full bg-white rounded-lg shadow">
            <ul className="divide-y-2 divide-gray-100">
              {todos.map((i) => (
                <li key={i.id} className="flex justify-between p-3">
                  {i.title}
                  <div>
                    <button className="px-2 py-1 text-sm text-green-200 bg-green-600 rounded-full">
                      editar
                    </button>
                    &nbsp;
                    <button className="px-2 py-1 text-sm text-red-200 bg-red-600 rounded-full">
                      deletar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
