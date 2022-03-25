import React from "react";
import { Wrench } from "phosphor-react";

export default function Construction(): React.ReactElement {
  const layout = (
    <div className="flex h-full justify-center align-middle">
      <span className="flex flex-col md:flex-row justify-center align-middle items-center gap-6">
        <span className="">
          <Wrench className="text-yellow-500" weight="duotone" size={160} />
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="px-4 text-4xl text-center md:text-left">
            This page is currently under construction
          </h1>
          <p className="px-4 text-xl font-light text-center md:text-left">
            Come back later to see what's in store
          </p>
        </div>
      </span>
    </div>
  );

  return layout;
}
