import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { mockAppsData } from "@appstore/mockAppsData";

type Props = {
  params: { app: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const id = params.app
 
  // fetch data
  const app = mockAppsData.find((app) => app.id === id);
 
  return {
    title: app?.name,
    description: app?.description,
  }
}

const inter = Inter({ subsets: ["latin"] });

export default function AppPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
