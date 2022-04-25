import React from "react";

type Props = {
  title: string;
  dotPoints: string[];
};

export default function TextSection({
  title,
  dotPoints,
}: Props): React.ReactElement {
  function classifyDotPoints(dotPoints: string[]) {
    const mainPoints: string[] = [];
    const subPoints: Array<{ subpoint: string; parentIndex: number }> = [];
    let parentIndex: number = 0;

    dotPoints.forEach((item, index) => {
      // Check for main points
      if (item[0] != "-") {
        mainPoints.push(item);
      }

      // Check if it's a parent point
      if (item[item.length - 1] == ":") {
        parentIndex = mainPoints.length - 1; // i.e. the last main point index
      }

      // Check for subpoints if not the first item
      if (index > 0 && item[0] == "-") {
        subPoints.push({ subpoint: item, parentIndex: parentIndex });
      }
    });

    return { mainPoints, subPoints };

    console.log(mainPoints);
    console.log(subPoints);
  }

  const mainPoints = classifyDotPoints(dotPoints).mainPoints;
  const subPoints = classifyDotPoints(dotPoints).subPoints;

  console.log(mainPoints);
  console.log(subPoints);
  // console.log(parentPoints);

  const layout = (
    <div className="w-full bg-white shadow rounded">
      <div className="px-4 py-3 border-b border-gray-200">
        <h1 className="text-xl">{title}</h1>
      </div>
      <div className="px-4 py-4">
        <ul className="list-disc list-outside">
          {mainPoints.map((item, index) =>
            subPoints.some((item) => item.parentIndex === index) ? (
              <React.Fragment>
                <li className="ml-5 mb-2">{item}</li>
                <ul className="list-outside ml-5">
                  {subPoints
                    .filter((item) => item.parentIndex === index)
                    .map((item) => (
                      <li className="flex ml-2 mb-2 text-teal-500">
                        <span className="mr-3">–</span>
                        <span className="text-black">
                          {item.subpoint.replace("-- ", "")}
                        </span>
                      </li>
                    ))}
                </ul>
              </React.Fragment>
            ) : (
              <li className="ml-5 mb-2">{item}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );

  return layout;
}
