import React from "react";
import { Camera, Crown, House, Wrench } from "phosphor-react";
import PhotosLayout from "./photosLayout/PhotosLayout";

const constructionIcon = <Wrench color="#000000" weight="duotone" size={24} />;

export default function Principles(): React.ReactElement {
  const layout = (
    <div className="flex flex-col min-h-full items-center justify-start align-middle">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-center align-middle items-center gap-6 my-10">
        <span className="hidden sm:flex">
          <Camera color="#2EC4B6" weight="duotone" size={160} />
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="px-4 text-4xl text-center md:text-left">Photos</h1>
          <p className="px-4 text-xl font-light text-center md:text-left">
            Moments I've captured, sorted by colour
          </p>
          {/* <div className="flex px-4 justify-center md:justify-start items-center">
            <span className="flex rounded bg-yellow-500 text-black text-sm font-semibold px-3 py-1 items-center align-middle">
              {constructionIcon}
              <span className="ml-2">Under construction</span>
            </span>
          </div> */}
        </div>
      </div>

      {/* Photogrid */}
      <PhotosLayout />
    </div>
  );

  return layout;
}
