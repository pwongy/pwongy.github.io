import React from "react";
import { House, Wrench } from "phosphor-react";

export default function Home(): React.ReactElement {
  const layout = (
    <div className="flex h-full justify-center align-middle">
      <span className="flex flex-col md:flex-row justify-center align-middle items-center gap-6">
        <span className="">
          <House color="#2EC4B6" weight="duotone" size={160} />
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="px-4 text-4xl text-center md:text-left">Home page</h1>
          <p className="px-4 text-xl font-light text-center md:text-left">
            The basic stuff about me (identity, aspirations, etc.)
          </p>
        </div>
      </span>
    </div>
  );

  return layout;
}
