"use client";

import type { ReactNode } from "react";
import { NuqsAdapter } from "./nuqs";
import { ErrorBoundary } from "react-error-boundary";

export const ClientProviders: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <ErrorBoundary fallback={<div>Sorry, an error happened. Please refresh the page and try again.</div>}><NuqsAdapter>{children}</NuqsAdapter></ErrorBoundary>;
};

export default ClientProviders;
