import { Link } from 'waku';

import { Form } from '../components/form';

export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <h1 className="text-4xl font-bold tracking-tight">{data.headline}</h1>
      <p>{data.body}</p>
      <Form />
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
  };

  return data;
};

export const getConfig = async () => {
  return {
    // There can be hydration errors from useQueryState if the render mode is static
    // So you need to decide whether to allow the hydration mismatch or
    // switch to dynamic rendering that will render the server html with the query
    render: 'dynamic',
    // render: 'static',
  } as const;
};
