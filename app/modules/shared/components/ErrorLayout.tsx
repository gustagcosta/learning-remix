import { Disclosure } from "@headlessui/react";
import { Link, useLocation } from "remix";

interface ErrorLayoutProps {
  error: string;
}

export function ErrorLayout({ error }: ErrorLayoutProps) {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({}) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to={"/"}>
                        <img
                          className="h-8 w-8"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                          alt="Workflow"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-gray-900">{error}</h3>
            <br />
            <a
              href="#"
              className="mt-2 underline text-gray-600 hover:gray-blue-800 visited:text-gray-600"
              onClick={() => window.history.back()}>
              Voltar para a página inicial
            </a>
          </div>
        </header>
      </div>
    </>
  );
}
