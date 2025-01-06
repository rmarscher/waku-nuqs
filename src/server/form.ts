import { createSearchParamsCache } from "nuqs/server";

import { formParsers } from "../lib/form";

export const formQueryCache = createSearchParamsCache(formParsers);
