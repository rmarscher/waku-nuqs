'use client';

import { parseAsString, useQueryState } from 'nuqs';

export const Form = () => {
  const [value, setValue] = useQueryState("value", parseAsString.withDefault(""));

  return (
    <section className="border-blue-400 -mx-4 mt-4 rounded border border-dashed p-4">
      <div>Value: {value}</div>
      <input
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        className="rounded-sm px-2 py-0.5 text-sm border"
      />
    </section>
  );
};
