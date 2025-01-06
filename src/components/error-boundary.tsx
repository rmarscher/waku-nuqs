"use client";

import type { ReactNode } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

export const ErrorBoundary: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ReactErrorBoundary
      fallback={
        <div>
          Sorry, an error happened. Please refresh the page and try again.
        </div>
      }
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
