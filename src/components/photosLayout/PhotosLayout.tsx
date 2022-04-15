import React from "react";
import mockPhotosData, { PhotoData } from "./mockPhotosData";
import red1 from "../../assets/images/photos/red__IMG_7663.jpg";
import green1 from "../../assets/images/photos/green__20181225-IMG_6340.jpg";

export default function PhotosLayout(): React.ReactElement {
  // Get mock data
  // TODO: Replace this with getting data from assets folder
  const data: Array<PhotoData> = mockPhotosData;
  // console.log(data);

  // Describe layout
  const colourColumns = [
    { colour: "red", class: "bg-red-500" },
    { colour: "orange", class: "bg-orange-500" },
    { colour: "yellow", class: "bg-yellow-500" },
    { colour: "green", class: "bg-green-500" },
    { colour: "blue", class: "bg-blue-500" },
    { colour: "purple", class: "bg-purple-500" },
    { colour: "black", class: "bg-black" },
    { colour: "white", class: "bg-white border border-gray-300" },
  ];

  function getPhotosByColour(
    data: Array<PhotoData>,
    colour: string
  ): Array<PhotoData> {
    const result = data.filter((item) => item.colour === colour);

    return result;
  }

  const photosDirectory = "../../assets/images/photos";

  // function importAll(r: __WebpackModuleApi.RequireContext) {
  //   let images: Array<string> = [];
  //   r.keys().forEach((item, index) => {
  //     console.log(item);
  //     const filename = item.replace("./", "");
  //     console.log(filename);
  //     images.push(filename);
  //   });

  //   // r.keys().map((item, index) => {
  //   //   images[item.replace("./", "")] = r(item);
  //   // });

  //   console.log(images);

  //   return images;
  // }

  // const images = importAll(
  //   require.context(photosDirectory, false, /\.(png|jpe?g|svg)$/)
  // );

  // console.log(images);

  function importImages() {
    const images: Array<{ key: string; image: React.ReactElement }> = [];
    const thing = require.context(
      "../../assets/images/photos",
      false,
      /\.(png|jpe?g|svg)$/
    );
    thing.keys().forEach((key) => {
      // console.log(key);
      const fullPath = key.replace("./", `${photosDirectory}/`);
      console.log(fullPath);

      const image = (
        <React.Fragment>
          <img
            src={fullPath}
            className="h-32 w-32 bg-gray-200"
            alt={fullPath}
          />
        </React.Fragment>
      );
      images.push({ key: fullPath, image: image });
    });

    return images;
  }

  const images = importImages();

  return (
    <React.Fragment>
      {/* Debug */}
      {/* <img
        src={`${green1}`}
        className="h-32 w-32 bg-gray-200"
        // alt={fullPath}
      /> */}
      {/* <div className="flex-col gap-4 my-10">
        {images.map((item) => (
          <div>
            {`${item.key}`}
            <img
              src={`${item.key}`}
              className="h-32 w-32 bg-gray-200"
              // alt={fullPath}
            />
          </div>
        ))}
      </div> */}

      <div className={`flex grid-cols-${mockPhotosData.length} gap-x-4`}>
        {colourColumns.map((column) => (
          <div key={column.colour} className={`col-span-1 w-40`}>
            {/* Header */}
            <div className="flex mb-6 justify-center items-center text-base align-middle gap-x-2">
              <span className={`w-5 h-5 ${column.class}`}></span>
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
                    } ${column.colour === "black" ? "text-white" : ""} ${
                      column.colour === "white" ? "border border-gray-300" : ""
                    }`}
                  >
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
