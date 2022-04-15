import React from "react";
import { Camera, Crown, House, Wrench } from "phosphor-react";
import PhotosLayout from "./photosLayout/PhotosLayout";

export default function Principles(): React.ReactElement {
  const layout = (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-center align-middle items-center gap-6 my-20">
        <span className="">
          <Camera color="#2EC4B6" weight="duotone" size={160} />
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="px-4 text-4xl text-center md:text-left">Photos</h1>
          <p className="px-4 text-xl font-light text-center md:text-left">
            What I feel are the best moments I've captured
          </p>
        </div>
      </div>

      {/* Photogrid */}
      <PhotosLayout />
    </div>
  );

  return layout;
}
