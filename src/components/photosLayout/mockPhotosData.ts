export type PhotoData = {
  filename: string;
  title: string;
  colour: string;
  colourOverride: string | null;
  time: Date;
};

const mockPhotosData: Array<PhotoData> = [
  {
    filename: "IMG_001.jpg",
    title: "Scar",
    colour: "black",
    colourOverride: "",
    time: new Date(),
  },
  {
    filename: "IMG_002.jpg",
    title: "Hydropump",
    colour: "blue",
    colourOverride: "",
    time: new Date(),
  },
  {
    filename: "IMG_003.jpg",
    title: "Iceblock",
    colour: "blue",
    colourOverride: "",
    time: new Date(),
  },
  {
    filename: "IMG_004.jpg",
    title: "Inari",
    colour: "orange",
    colourOverride: "",
    time: new Date(),
  },
  {
    filename: "IMG_005.jpg",
    title: "Fireball",
    colour: "yellow",
    colourOverride: "",
    time: new Date(),
  },
  {
    filename: "IMG_006.jpg",
    title: "Wheel",
    colour: "black",
    colourOverride: "",
    time: new Date(),
  },
  {
    filename: "IMG_007.jpg",
    title: "Selfie",
    colour: "purple",
    colourOverride: "",
    time: new Date(),
  },
  {
    filename: "IMG_008.jpg",
    title: "Shek O",
    colour: "green",
    colourOverride: "",
    time: new Date(),
  },
  {
    filename: "IMG_009.jpg",
    title: "Fall",
    colour: "red",
    colourOverride: "",
    time: new Date(),
  },
  {
    filename: "IMG_010.jpg",
    title: "Exposed",
    colour: "white",
    colourOverride: "",
    time: new Date(),
  },
  {
    filename: "IMG_011.jpg",
    title: "Offside",
    colour: "green",
    colourOverride: "",
    time: new Date(),
  },
  {
    filename: "IMG_012.jpg",
    title: "Branches",
    colour: "green",
    colourOverride: "",
    time: new Date(),
  },
  {
    filename: "IMG_013.jpg",
    title: "Message",
    colour: "red",
    colourOverride: "",
    time: new Date(),
  },
];

export default mockPhotosData;
