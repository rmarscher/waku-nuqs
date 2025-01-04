import {
  type unstable_AdapterOptions as AdapterOptions,
  unstable_createAdapterProvider as createAdapterProvider,
  renderQueryString,
} from "nuqs/adapters/custom";
import { useRouter_UNSTABLE as useRouter } from "waku";

function useNuqsAdapter() {
  const { query, push, replace } = useRouter();
  const searchParams = new URLSearchParams(query);
  const updateUrl = (search: URLSearchParams, options: AdapterOptions) => {
    if (options.history === "push") {
      push(renderQueryString(search));
    } else {
      replace(renderQueryString(search));
    }
  };
  return {
    searchParams,
    updateUrl,
  };
}

export const NuqsAdapter = createAdapterProvider(useNuqsAdapter);
