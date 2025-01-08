import { Link } from "waku";

import { Form } from "../components/form";
import { formQueryCache } from "../server/form";
import { getHonoContext } from "waku/unstable_hono";

function getSearchParams({ query }: { query?: string }) {
  if (query) {
    return Object.fromEntries(new URLSearchParams(query));
  }
  // This is probably working around a waku bug that has since been fixed but
  // just in case the query prop isn't passed, try to get it from the hono
  // context.
  try {
    const c = getHonoContext();
    return Object.fromEntries(new URL(c.req.url).searchParams);
  } catch (e) {
    return {};
  }
}

export default async function HomePage({ query }: { query: string }) {
  const searchParams = getSearchParams({ query });
  const { value } = formQueryCache.parse(searchParams);
  const data = await getData({ value });

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Form />
    </div>
  );
}

const getData = async ({ value = "world" }: { value: string }) => {
  const data = {
    title: "Waku + Nuqs",
    headline: "Waku + Nuqs",
    body: `Hello from server: ${value}!`,
  };

  return data;
};

export const getConfig = async () => {
  return {
    // There can be hydration errors from useQueryState if the render mode is static
    // So you need to decide whether to allow the hydration mismatch or
    // switch to dynamic rendering that will render the server html with the query
    render: "dynamic",
    // render: 'static',
  } as const;
};
