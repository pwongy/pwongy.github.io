import { CaretLeft, CaretRight } from "phosphor-react";
import React, { KeyboardEvent, useEffect, useState } from "react";
import Modal from "../../common/Modal";
import { capitaliseFirstLetter } from "../../common/utils";
import PhotoList, { PhotoData } from "./PhotoList";

export default function PhotosLayout(): React.ReactElement {
  const photos: Array<PhotoData> = PhotoList;

  // Define colours
  const colourColumns = [
    { colour: "red", bgClass: "bg-red-500", borderClass: "border-red-500" },
    {
      colour: "orange",
      bgClass: "bg-orange-500",
      borderClass: "border-orange-500",
    },
    {
      colour: "yellow",
      bgClass: "bg-yellow-500",
      borderClass: "border-yellow-500",
    },
    {
      colour: "green",
      bgClass: "bg-green-500",
      borderClass: "border-green-500",
    },
    { colour: "blue", bgClass: "bg-blue-500", borderClass: "border-blue-500" },
    {
      colour: "purple",
      bgClass: "bg-purple-500",
      borderClass: "border-purple-500",
    },
    { colour: "black", bgClass: "bg-black", borderClass: "border-black" },
    { colour: "gray", bgClass: "bg-gray-500", borderClass: "border-gray-500" },
    {
      colour: "white",
      bgClass: "bg-white border border-gray-300",
      borderClass: "border-gray-500",
    },
  ];

  // Set default selections
  const [redPhoto, setRedPhoto] = useState<PhotoData>(
    PhotoList.filter((item) => item.colour === "red")[0]
  );
  const [orangePhoto, setOrangePhoto] = useState<PhotoData>(
    PhotoList.filter((item) => item.colour === "orange")[0]
  );
  const [yellowPhoto, setYellowPhoto] = useState<PhotoData>(
    PhotoList.filter((item) => item.colour === "yellow")[0]
  );
  const [greenPhoto, setGreenPhoto] = useState<PhotoData>(
    PhotoList.filter((item) => item.colour === "green")[0]
  );
  const [bluePhoto, setBluePhoto] = useState<PhotoData>(
    PhotoList.filter((item) => item.colour === "blue")[0]
  );
  const [purplePhoto, setPurplePhoto] = useState<PhotoData>(
    PhotoList.filter((item) => item.colour === "purple")[0]
  );
  const [blackPhoto, setBlackPhoto] = useState<PhotoData>(
    PhotoList.filter((item) => item.colour === "black")[0]
  );
  const [grayPhoto, setGrayPhoto] = useState<PhotoData>(
    PhotoList.filter((item) => item.colour === "gray")[0]
  );
  const [whitePhoto, setWhitePhoto] = useState<PhotoData>(
    PhotoList.filter((item) => item.colour === "white")[0]
  );

  const selectedPhotos = [
    { colour: "red", photo: redPhoto, callback: setRedPhoto },
    { colour: "orange", photo: orangePhoto, callback: setOrangePhoto },
    { colour: "yellow", photo: yellowPhoto, callback: setYellowPhoto },
    { colour: "green", photo: greenPhoto, callback: setGreenPhoto },
    { colour: "blue", photo: bluePhoto, callback: setBluePhoto },
    { colour: "purple", photo: purplePhoto, callback: setPurplePhoto },
    { colour: "black", photo: blackPhoto, callback: setBlackPhoto },
    { colour: "gray", photo: grayPhoto, callback: setGrayPhoto },
    { colour: "white", photo: whitePhoto, callback: setWhitePhoto },
  ];

  // Get photos by colour
  function getPhotosByColour(
    data: Array<PhotoData>,
    colour: string
  ): Array<PhotoData> {
    const result = data.filter((item) => item.colour === colour);

    return result;
  }

  // Track modal state
  const [modalOpen, setModalOpen] = useState(false);

  // Track selected photo to show in modal
  const [showPhoto, setShowPhoto] = useState<PhotoData | null>(null);

  function handleClickOld(colour: string) {
    // console.log(`Clicked ${colour}`);
    const photosByColour = getPhotosByColour(photos, colour);
    // console.log(photosByColour);
    const currentPhoto = selectedPhotos.find((item) => item.colour === colour);
    // console.log(currentPhoto?.photo.title);
    const index = currentPhoto
      ? photosByColour.indexOf(currentPhoto.photo)
      : -1;
    // console.log(index);
    const nextIndex = index == photosByColour.length - 1 ? 0 : index + 1;
    currentPhoto?.callback(photosByColour[nextIndex]);
  }

  function handleClick(item: PhotoData | undefined) {
    item && setShowPhoto(item);
    setModalOpen(true);
  }

  const isShowPhoto = (item: PhotoData) => item.file === showPhoto?.file;
  const showPhotoIndex = PhotoList.findIndex(isShowPhoto);

  function showPreviousPhoto(currentPhotoIndex: number) {
    const previousPhoto =
      currentPhotoIndex === 0
        ? PhotoList[PhotoList.length - 1]
        : PhotoList[currentPhotoIndex - 1];
    setShowPhoto(previousPhoto);
  }

  function showNextPhoto(currentPhotoIndex: number) {
    const nextPhoto =
      currentPhotoIndex === PhotoList.length - 1
        ? PhotoList[0]
        : PhotoList[currentPhotoIndex + 1];
    setShowPhoto(nextPhoto);
  }

  const [keyPress, setKeyPress] = useState("");

  // Handle what happens on key press
  const handleKeyPress: any = (event: KeyboardEvent) => {
    setKeyPress(event.key);

    switch (event.key) {
      case "ArrowLeft":
        showPreviousPhoto(showPhotoIndex);
        break;
      case "ArrowRight":
        showNextPhoto(showPhotoIndex);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  // document.addEventListener("keydown", handleKeyPress);

  //   // function logKey(e: React.KeyboardEvent) {
  //   //   console.log(e.code)
  //   // }

  //   function handleKeyPress(e: React.KeyboardEvent) {
  //     const code = e.keyCode || e.charCode;

  //     console.log(code);

  //     // Attempt sign in if the enter key is pressed
  //     if (code == 37) {
  //       // Left arrow pressed
  //       showPreviousPhoto(showPhotoIndex);
  //     } else if (code == 39) {
  //       // Right arrow pressed
  //       showNextPhoto(showPhotoIndex);
  //     }

  //     return;
  //   }

  return (
    <React.Fragment>
      {/* Debug */}
      {/* {PhotoList.map((item) => (
        <img
          src={`${item.file}`}
          className="h-32 w-32 bg-gray-200 object-cover"
          alt={item.title}
        />
      ))} */}

      {modalOpen && (
        <Modal
          width="w-full lg:w-fit lg:max-w-7xl"
          onClose={() => setModalOpen(false)}
        >
          <>
            <div
              className="flex flex-col space-y-4 bg-white p-3 md:w-full overflow-y-auto align-middle"
              // onKeyDown={(e) => keyDownHandler(e)}
            >
              <div className="flex mb-0 items-center align-middle">
                <button
                  className="mr-2"
                  onClick={() => showPreviousPhoto(showPhotoIndex)}
                >
                  <CaretLeft
                    // size={60}
                    className="hover:bg-gray-100 p-1 rounded-full w-8 h-8"
                  />
                </button>
                <button onClick={() => showNextPhoto(showPhotoIndex)}>
                  <CaretRight
                    // size={60}
                    className="hover:bg-gray-100 p-1 rounded-full w-8 h-8"
                  />
                </button>
                <span className="ml-8">{showPhoto?.title}</span>
              </div>
              <div>
                <img
                  src={`${showPhoto?.file}`}
                  className={`w-full h-fit max-h-[56rem] rounded-md object-contain border border-gray-200 shadow`}
                  alt={showPhoto?.title}
                />
              </div>
            </div>
          </>
        </Modal>
      )}

      {/* Desktop */}
      <div className={`hidden 2xl:flex w-full mb-12`}>
        <div className="grid grid-cols-9 gap-x-3">
          {colourColumns.map((column) => (
            <div key={column.colour} className={`col-span-1`}>
              {/* Header */}
              <div className="flex mb-6 justify-center items-center text-base align-middle gap-x-2">
                <span className={`w-5 h-5 rounded ${column.bgClass}`}></span>
                <span className="">{capitaliseFirstLetter(column.colour)}</span>
              </div>
              {/* <div>
              {
                selectedPhotos.filter(
                  (item) => item.colour === column.colour
                )[0].photo.title
              }
            </div> */}

              {/* Photo column */}
              <div className="flex flex-col space-3">
                {getPhotosByColour(photos, column.colour).map((item) => (
                  <div className="flex flex-col mb-4">
                    <button
                      key={item.file}
                      className={``} // TODO: Make this by colour
                      onClick={() => handleClick(item)}
                    >
                      {/* Photo thumbnail */}
                      <img
                        src={`${item.file}`}
                        className={`h-32 w-full rounded-md object-cover border border-gray-200 shadow`}
                        alt={item.title}
                      />
                    </button>
                    <div className="text-center">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile and narrow screens */}
      <div
        className={`grid 2xl:hidden grid-cols-3 gap-x-3 gap-y-3 px-3 sm:mx-auto sm:w-full mb-12`}
      >
        {colourColumns.map((column) => (
          <div className="col-span-1">
            <button
              key={column.colour}
              className={`h-36 w-full rounded-md text-lg text-center p-1 ${
                column.bgClass
              } ${column.colour === "black" ? "text-white" : ""} ${
                column.colour === "white" ? "border border-gray-300" : ""
              }`}
              onClick={() =>
                handleClick(
                  selectedPhotos.find((item) => item.colour === column.colour)
                    ?.photo
                )
              }
            >
              <img
                src={`${
                  selectedPhotos.find((item) => item.colour === column.colour)
                    ?.photo.file
                }`}
                className="h-full w-full rounded object-cover shadow"
                alt={
                  selectedPhotos.find((item) => item.colour === column.colour)
                    ?.photo.title
                }
              />
            </button>{" "}
            <div className="text-center">
              {
                selectedPhotos.find((item) => item.colour === column.colour)
                  ?.photo.title
              }
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
