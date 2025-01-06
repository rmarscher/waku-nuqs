import "../styles.css";

import { Suspense, type ReactNode } from "react";
import { ErrorBoundary } from "../components/error-boundary";
import { NuqsAdapter } from "../components/nuqs";

type RootLayoutProps = { children: ReactNode; query: string };

export default async function RootLayout({ children, query }: RootLayoutProps) {
  const data = await getData();
  return (
    <ErrorBoundary>
      <Suspense>
        <NuqsAdapter>
          <main style={{ maxWidth: 600, padding: 20 }}>{children}</main>
        </NuqsAdapter>
      </Suspense>
    </ErrorBoundary>
  );
}

const getData = async () => {
  const data = {
    description: "An internet website!",
    icon: "/images/favicon.png",
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: "static",
  } as const;
};
