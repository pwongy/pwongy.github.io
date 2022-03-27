import React from "react";
import mockPhotosData, { PhotoData } from "./mockPhotosData";

export default function PhotosLayout(): React.ReactElement {
  // Get mock data
  // TODO: Replace this with getting data from assets folder
  const data: Array<PhotoData> = mockPhotosData;
  console.log(data);

  // Describe layout
  const colourColumns = [
    { colour: "red", class: "bg-red-500" },
    { colour: "orange", class: "bg-orange-500" },
    { colour: "yellow", class: "bg-yellow-500" },
    { colour: "green", class: "bg-green-500" },
    { colour: "blue", class: "bg-blue-500" },
    { colour: "purple", class: "bg-purple-500" },
    { colour: "black", class: "bg-black" },
    { colour: "white", class: "bg-white" },
  ];

  function getPhotosByColour(
    data: Array<PhotoData>,
    colour: string
  ): Array<PhotoData> {
    const result = data.filter((item) => item.colour === colour);

    return result;
  }

  return (
    <>
      <div className={`flex grid-cols-${mockPhotosData.length} gap-x-4`}>
        {colourColumns.map((column) => (
          <div key={column.colour} className={`col-span-1 w-40`}>
            {/* Header */}
            <div className="flex mb-6 justify-center items-center text-base align-middle gap-x-2">
              <span className={`w-5 h-5 mb-2 ${column.class}`}></span>
              <span className="">{column.colour.toUpperCase()}</span>
            </div>

            {/* Photo column */}
            <div className="flex flex-col space-4">
              {getPhotosByColour(mockPhotosData, column.colour).map((item) => (
                <div key={item.filename} className="flex flex-col mb-4">
                  {/* Photo thumbnail */}
                  <div
                    className={`h-40 rounded-md text-lg text-center pt-2 ${
                      column.class
                    } ${column.colour === "white" ? "text-black" : ""}`}
                  >
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
