import React from "react";
import { House, Wrench } from "phosphor-react";
import photo from "../assets/images/home/paul_profile_2022_square.jpg";

export default function Home(): React.ReactElement {
  const layout = (
    <div className="flex min-h-full justify-center align-middle">
      <span className="flex flex-col md:flex-row justify-center align-middle items-center gap-8">
        <span className="shrink-0">
          <img src={photo} className="object-cover h-80 w-80 rounded-full" />
          {/* <House color="#2EC4B6" weight="duotone" size={160} /> */}
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="px-4 text-4xl text-center md:text-left">
            Hi, I'm Paul 😃
          </h1>
          <p className="px-4 text-xl font-light text-center md:text-left">
            I'm building this website to teach myself React, jot down my
            perspectives on life and identity, and curate moments of gratitude
            and wisdom.
          </p>
        </div>
      </span>
    </div>
  );

  return layout;
}
