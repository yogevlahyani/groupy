import { Apps } from "@appstore/components/Apps";
import CompanyLogo from "@appstore/components/CompanyLogo";
import { mockAppsData } from "@appstore/mockData";

async function getApps() {
  return mockAppsData;
}

export default async function Home() {
  const apps = await getApps();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-36">
      <nav className="flex items-start w-full gap-5">
        <CompanyLogo />
        <h1 className="text-2xl">App Store</h1>
      </nav>
      <section className="flex flex-col items-center gap-5">
        <Apps items={apps} />
      </section>
    </main>
  );
}
