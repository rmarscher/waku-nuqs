"use client";

import { parseAsString, useQueryState } from "nuqs";

export const Form = () => {
  const [value, setValue] = useQueryState("value", {
    ...parseAsString.withDefault(""),
    shallow: false,
  });

  const [valueShallow, setValueShallow] = useQueryState("value", {
    ...parseAsString.withDefault(""),
    shallow: true,
  });

  return (
    <section className="border-blue-400 -mx-4 mt-4 rounded border border-dashed p-4">
      <div>Value: {value}</div>
      <div>
        Update via server / RSC:
        <input
          value={value}
          onChange={(evt) => {
            console.log(`updating value via server to '${evt.target.value}'`);
						setValue(evt.target.value);
          }}
          className="rounded-sm px-2 py-0.5 text-sm border"
        />
      </div>
      <div>Shallow Value: {valueShallow}</div>
      <div>
        Shallow / client-only update:
        <input
          value={valueShallow}
          onChange={(evt) => {
            console.log(`updating value on client only to '${evt.target.value}'`);
						setValueShallow(evt.target.value)
          }}
          className="rounded-sm px-2 py-0.5 text-sm border"
        />
      </div>
    </section>
  );
};
