import React, { useState } from "react";
import { versions } from "../Journey";

type SelectorProps = {
  version: string;
  setVersion: React.Dispatch<React.SetStateAction<string>>;
};

export default function VersionSelector({
  version,
  setVersion,
}: SelectorProps): React.ReactElement {
  function handleClick(versionLabel: string) {
    setVersion(versionLabel);
  }

  return (
    <React.Fragment>
      <div className="flex justify-between relative">
        <div className={`h-1 w-full absolute top-6 sm:top-10 px-4 z-0`}>
          <div className="border-t-2 border-gray-300 "></div>
        </div>
        {versions.map((item) => (
          <div className="flex-col z-10">
            <button
              className="flex-col items-center group"
              onClick={() => handleClick(item.label)}
            >
              <img
                src={item.photo}
                className={`object-cover h-12 w-12 sm:h-20 sm:w-20 rounded-full border-2 sm:border-4 ${
                  version === item.label
                    ? "border-teal-500"
                    : "border-white group-hover:border-gray-300"
                }`}
              />
              <span
                className={`mt-2 ${
                  version === item.label
                    ? "font-semibold"
                    : "text-gray-400 group-hover:text-black"
                }`}
              >
                {item.label}
              </span>
            </button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
