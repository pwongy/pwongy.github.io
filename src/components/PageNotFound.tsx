import React from "react";
import { Path, Question, RainbowCloud, Signpost, Wrench } from "phosphor-react";

export default function Journey(): React.ReactElement {
  const layout = (
    <div className="flex h-full justify-center align-middle">
      <span className="flex flex-col md:flex-row justify-center align-middle items-center gap-6">
        <span className="">
          <Question className="text-red-600" weight="duotone" size={160} />
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="px-4 text-4xl text-center md:text-left">
            This page does not exist
          </h1>
          <p className="px-4 text-xl font-light text-center md:text-left">
            Something doesn't seem right...
          </p>
        </div>
      </span>
    </div>
  );

  return layout;
}
