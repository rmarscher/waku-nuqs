import { parseAsString } from "nuqs/server";

export const formParsers = {
  // List your search param keys and associated parsers here:
  value: parseAsString.withDefault(''),
};
