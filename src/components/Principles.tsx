import React from "react";
import { Crown, House, Wrench } from "phosphor-react";

export default function Principles(): React.ReactElement {
  const layout = (
    <div className="flex h-full justify-center align-middle">
      <span className="flex flex-col md:flex-row justify-center align-middle items-center gap-6">
        <span className="">
          <Crown color="#2EC4B6" weight="duotone" size={160} />
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="px-4 text-4xl text-center md:text-left">Principles</h1>
          <p className="px-4 text-xl font-light text-center md:text-left">
            The rules I try to live by (i.e. what's important to me)
          </p>
        </div>
      </span>
    </div>
  );

  return layout;
}
