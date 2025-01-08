"use client";

import {
  type unstable_AdapterOptions as AdapterOptions,
  unstable_createAdapterProvider as createAdapterProvider,
  renderQueryString,
} from "nuqs/adapters/custom";
import { useRouter_UNSTABLE as useRouter } from "waku";

function useNuqsAdapter() {
  const { path, query, push, replace } = useRouter();
  const searchParams = new URLSearchParams(query);
  const updateUrl = (search: URLSearchParams, options: AdapterOptions) => {
    if (options.shallow) {
      const query = renderQueryString(search);
      const hash = location.hash;
      const url = location.origin + path + query + hash;
      options.history === "push"
        ? history.pushState(null, "", url)
        : history.replaceState(null, "", url);
    } else {
      const updateMethod = options.history === "push" ? push : replace;
      updateMethod(renderQueryString(search) as any);
    }
    // Waku router does not scroll unless the pathname changes
    if (options.scroll) {
      window.scrollTo(0, 0);
    }
  };
  return {
    searchParams,
    updateUrl,
  };
}

export const NuqsAdapter = createAdapterProvider(useNuqsAdapter);
