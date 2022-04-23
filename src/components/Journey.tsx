import React, { useState } from "react";
import { Path, Wrench, Signpost, Barricade } from "phosphor-react";
import VersionSelector from "./journeyLayout/VersionSelector";

import v1Photo from "../assets/images/home/paul_v1.jpg";
import v2Photo from "../assets/images/home/paul_v2.jpg";
import v3Photo from "../assets/images/home/paul_v3.jpg";
import v4Photo from "../assets/images/home/paul_v4.jpg";
import v5Photo from "../assets/images/home/paul_v5.jpg";
import v6Photo from "../assets/images/home/paul_v6.jpg";
import v7Photo from "../assets/images/home/paul_v7.jpg";

const constructionIcon = <Wrench color="#000000" weight="duotone" size={24} />;

// type validVersions = "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7";

export const versions: Array<{ label: string; photo: string }> = [
  { label: "v1", photo: v1Photo },
  { label: "v2", photo: v2Photo },
  { label: "v3", photo: v3Photo },
  { label: "v4", photo: v4Photo },
  { label: "v5", photo: v5Photo },
  { label: "v6", photo: v6Photo },
  { label: "v7", photo: v7Photo },
];

export function Journey(): React.ReactElement {
  const [selectedVersion, setSelectedVersion] = useState(
    versions[versions.length - 1].label
  );
  const layout = (
    <div className="flex flex-col min-h-full items-center justify-start align-middle">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-center align-middle items-center gap-6 my-10">
        <span className="hidden sm:flex">
          <Signpost color="#2EC4B6" weight="duotone" size={160} />
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="px-4 text-4xl text-center md:text-left">My Journey</h1>
          <p className="px-4 text-xl font-light text-center md:text-left">
            The meandering path I've taken through life (so far)
          </p>
          <div className="flex px-4 justify-center md:justify-start items-center">
            <span className="flex rounded bg-yellow-500 text-black text-sm font-semibold px-3 py-1 items-center align-middle">
              {constructionIcon}
              <span className="ml-2">Under construction</span>
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full px-3">
        <div className="">
          <VersionSelector
            version={selectedVersion}
            setVersion={setSelectedVersion}
          />
        </div>
        {/* <div className="bg-blue-200 mt-4">
          content for {selectedVersion} of Paul
        </div> */}
      </div>
    </div>
  );

  return layout;
}

export default Journey;
