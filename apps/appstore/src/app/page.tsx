import { Apps } from "@appstore/components/Apps";
import CompanyLogo from "@appstore/components/CompanyLogo";
import { mockAppsData } from "@appstore/mockAppsData";

async function getApps() {
  return mockAppsData;
}

interface HomeProps {
  searchParams?: Record<string, string>;
}

export default async function Home({ searchParams }: HomeProps) {
  if (!searchParams?.email) {
    return <div>Unauthorized</div>;
  }

  const apps = await getApps();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-36">
      <div className="flex flex-col gap-5 w-full">
        <nav className="flex items-start w-full gap-5">
          <CompanyLogo />
          <h1 className="text-2xl">App Store</h1>
        </nav>
        <h2 className="text-lg">Welcome, {searchParams.email}</h2>
      </div>
      <section className="flex flex-col items-center gap-5">
        <Apps items={apps} />
      </section>
    </main>
  );
}
