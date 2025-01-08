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
    const query = renderQueryString(search);
    const hash = typeof location !== "undefined" ? location.hash : "";
    const url = path + query + hash;
    if (options.shallow) {
      options.history === "push"
        ? history.pushState(null, "", url)
        : history.replaceState(null, "", url);
    } else {
      const updateMethod = options.history === "push" ? push : replace;
      // bypass waku's typesafe route check by using `as never`
      updateMethod(url as never);
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
