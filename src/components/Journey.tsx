import React from "react";
import { Path, RainbowCloud, Signpost, Wrench } from "phosphor-react";

export default function Journey(): React.ReactElement {
  const layout = (
    <div className="flex h-full justify-center align-middle">
      {" "}
      <span className="flex flex-col md:flex-row justify-center align-middle items-center gap-6">
        <span className="">
          <Signpost color="#2EC4B6" weight="duotone" size={160} />
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="px-4 text-4xl text-center md:text-left">My Journey</h1>
          <p className="px-4 text-xl font-light text-center md:text-left">
            The meandering path I've taken through life (so far)
          </p>
        </div>
      </span>
    </div>
  );

  return layout;
}
