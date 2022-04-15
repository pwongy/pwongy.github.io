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
    <div className="w-full">
      <h1 className="text-2xl mb-2">{title}</h1>
      <ul className="list-disc list-outside">
        {dotPoints.map((item) => (
          <li className="ml-5">{item}</li>
        ))}
      </ul>
    </div>
  );

  return layout;
}
