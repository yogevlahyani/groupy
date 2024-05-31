"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export interface AppProps {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const App: React.FC<AppProps> = ({ id, name, description, icon }) => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#" className="flex justify-center text-center p-5 h-24">
        <img className="rounded-t-lg" src={icon} alt={name} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link
          href={`/apps/${id}?email=${email}`}
          className="flex w-full items-center justify-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
        >
          <div className="inline-flex items-center px-3 py-2 text-center">
            Get App
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};
