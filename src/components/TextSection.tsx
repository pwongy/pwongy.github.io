import React from "react";
import { Wrench } from "phosphor-react";

type Props = {
  title: string;
  dotPoints: string[];
};

export default function TextSection({
  title,
  dotPoints,
}: Props): React.ReactElement {
  const layout = (
    <div className="w-full bg-white shadow rounded">
      <div className="px-4 py-3 border-b border-gray-200">
        <h1 className="text-xl">{title}</h1>
      </div>
      <div className="px-4 py-4">
        <ul className="list-disc list-outside">
          {dotPoints.map((item) => (
            <li className="ml-5 mb-2">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return layout;
}
