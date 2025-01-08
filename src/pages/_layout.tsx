import "../styles.css";

import { Suspense, type ReactNode } from "react";
import { ErrorBoundary } from "../components/error-boundary";
import { NuqsAdapter } from "../components/nuqs";
import { Link } from "waku";

type RootLayoutProps = { children: ReactNode; query: string };

export default async function RootLayout({ children, query }: RootLayoutProps) {
  const data = await getData();
  return (
    <ErrorBoundary>
      <Suspense>
        <NuqsAdapter>
          <main style={{ maxWidth: 600, padding: 20 }}>{children}</main>
          <aside style={{ maxWidth: 600, padding: 20 }}>
            <div>
              <Link to="/" className="mt-4 inline-block underline">
                Home
              </Link>
            </div>
            <div>
              <Link to="/about" className="mt-4 inline-block underline">
                About
              </Link>
            </div>
            <div>
              <Link to="/nested/home" className="mt-4 inline-block underline">
                Nested Home
              </Link>
            </div>
          </aside>
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
