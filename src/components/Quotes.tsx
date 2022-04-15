import React from "react";
import {
  ChatCenteredDots,
  ChatDots,
  ChatsCircle,
  Wrench,
} from "phosphor-react";

export default function Quotes(): React.ReactElement {
  const layout = (
    <div className="flex min-h-full justify-center align-middle">
      <span className="flex flex-col md:flex-row justify-center align-middle items-center gap-6">
        <span className="">
          <ChatsCircle color="#2EC4B6" weight="duotone" size={160} />
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="px-4 text-4xl text-center md:text-left">
            Favourite Quotes
          </h1>
          <p className="px-4 text-xl font-light text-center md:text-left">
            Wise words from other humans that I've found useful
          </p>
        </div>
      </span>
    </div>
  );

  return layout;
}
