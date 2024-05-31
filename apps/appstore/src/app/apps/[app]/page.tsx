import { mockAppsData } from "@appstore/mockData";
import Link from "next/link";
import { RxCaretLeft } from "react-icons/rx";

const getApp = async (appId: string) => {
  return mockAppsData.find((app) => app.id === appId);
};

interface AppPageProps {
  params: { app: string };
}

export default async function AppPage({ params }: AppPageProps) {
  const app = await getApp(params.app);

  if (!app) {
    return <div>App not found</div>;
  }

  return (
    <>
      <nav className="flex items-start w-full gap-5 px-2 pt-2 pb-36 text-white bg-orange-700 rounded-b-lg">
        <Link href="/" className="inline-flex items-center gap-2">
          <RxCaretLeft size={18} />
          <span>Back to all apps</span>
        </Link>
      </nav>
      <div className="flex flex-row gap-16 p-5 -mt-24 px-28">
        <div className="flex-1 flex flex-col items-center justify-center gap-10">
          <div className="flex bg-gray-200 rounded-lg w-96 h-96 items-center justify-center">
            <img src={app.icon} alt={app.name} />
          </div>
          <button className="flex w-full py-3 items-center justify-center text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 cursor-pointer">
            Install
          </button>
          <div className="w-full">
            <h6 className="text-1xl uppercase">links</h6>
            <hr className="w-full" />
            <ul className="flex flex-col gap-1 mt-2">
              <li>
                <a href="#">Website</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h6 className="text-1xl uppercase">tags</h6>
            <hr className="w-full" />
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Default
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Dark
            </span>
            <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              Red
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              Green
            </span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
              Yellow
            </span>
            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
              Indigo
            </span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
              Purple
            </span>
            <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
              Pink
            </span>
          </div>
          <div className="w-full">
            <h6 className="text-1xl uppercase">developer</h6>
            <hr className="w-full" />
            <ul className="flex flex-col gap-1 mt-2">
              <li>
                <a href="#">{app.name} Inc.</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-2 flex flex-col gap-8 mt-24">
          <h1 className="text-6xl font-bold capitalize">{app.name}</h1>
          <img src="https://placehold.co/600x400" alt={app.name} />
          <p>{app.description}</p>
        </div>
      </div>
    </>
  );
}
