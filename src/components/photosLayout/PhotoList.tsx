import red__message from "../../assets/images/photos/red__message.jpg";
import red__maple from "../../assets/images/photos/red__maple.jpg";
import red__curly from "../../assets/images/photos/red__curly.jpg";
import red__blossoms from "../../assets/images/photos/red__blossoms.jpg";
import red__aftermath from "../../assets/images/photos/red__aftermath.jpg";
import red__restart from "../../assets/images/photos/red__restart.jpg";

import orange__inari from "../../assets/images/photos/orange__inari.jpg";
import orange__beetle from "../../assets/images/photos/orange__beetle.jpg";
import orange__sunrise from "../../assets/images/photos/orange__sunrise.jpg";
import orange__attention from "../../assets/images/photos/orange__attention.jpg";
import orange__transit from "../../assets/images/photos/orange__transit.jpg";
import orange__temple from "../../assets/images/photos/orange__temple.jpg";
import orange__streetlights from "../../assets/images/photos/orange__streetlights.jpg";
import orange__markets from "../../assets/images/photos/orange__markets.jpg";
import orange__spikes from "../../assets/images/photos/orange__spikes.jpg";

import yellow__sunset from "../../assets/images/photos/yellow__sunset.jpg";
import yellow__zero from "../../assets/images/photos/yellow__zero.jpg";
import yellow__beefcake from "../../assets/images/photos/yellow__beefcake.jpg";
import yellow__cab from "../../assets/images/photos/yellow__cab.jpg";
import yellow__perspective from "../../assets/images/photos/yellow__perspective.jpg";
import yellow__pyro from "../../assets/images/photos/yellow__pyro.jpg";
import yellow__relative from "../../assets/images/photos/yellow__relative.jpg";
import yellow__skylines from "../../assets/images/photos/yellow__skylines.jpg";
import yellow__warning from "../../assets/images/photos/yellow__warning.jpg";
import yellow__sound from "../../assets/images/photos/yellow__sound.jpg";

import green__branches from "../../assets/images/photos/green__branches.jpg";
import green__aisle from "../../assets/images/photos/green__aisle.jpg";
import green__curiosity from "../../assets/images/photos/green__curiosity.jpg";
import green__grass from "../../assets/images/photos/green__grass.jpg";
import green__level from "../../assets/images/photos/green__level.jpg";
import green__fuji from "../../assets/images/photos/green__fuji.jpg";
import green__sanctuary from "../../assets/images/photos/green__sanctuary.jpg";
import green__cross from "../../assets/images/photos/green__cross.jpg";
import green__birdman from "../../assets/images/photos/green__birdman.jpg";
import green__contest from "../../assets/images/photos/green__contest.jpg";
import green__offside from "../../assets/images/photos/green__offside.jpg";

import blue__hydropump from "../../assets/images/photos/blue__hydropump.jpg";
import blue__iceblock from "../../assets/images/photos/blue__iceblock.jpg";
import blue__chill from "../../assets/images/photos/blue__chill.jpg";
import blue__rockpool from "../../assets/images/photos/blue__rockpool.jpg";
import blue__wave from "../../assets/images/photos/blue__wave.jpg";
import blue__peak from "../../assets/images/photos/blue__peak.jpg";
import blue__hover from "../../assets/images/photos/blue__hover.jpg";
import blue__monster from "../../assets/images/photos/blue__monster.jpg";
import blue__sheko from "../../assets/images/photos/blue__sheko.jpg";
import blue__freedom from "../../assets/images/photos/blue__freedom.jpg";

import purple__romance from "../../assets/images/photos/purple__romance.jpg";
import purple__selfie from "../../assets/images/photos/purple__selfie.jpg";
import purple__lightbeam from "../../assets/images/photos/purple__lightbeam.jpg";
import purple__veins from "../../assets/images/photos/purple__veins.jpg";
import purple__thumb from "../../assets/images/photos/purple__thumb.jpg";
import purple__reminder from "../../assets/images/photos/purple__reminder.jpg";
import purple__hope from "../../assets/images/photos/purple__hope.jpg";

import black__fluorescence from "../../assets/images/photos/black__fluorescence.jpg";
import black__artiste from "../../assets/images/photos/black__artiste.jpg";
import black__scar from "../../assets/images/photos/black__scar.jpg";
import black__glowsticks from "../../assets/images/photos/black__glowsticks.jpg";
import black__kawaguchiko from "../../assets/images/photos/black__kawaguchiko.jpg";
import black__wheel from "../../assets/images/photos/black__wheel.jpg";
import black__frequency from "../../assets/images/photos/black__frequency.jpg";
import black__eclipse from "../../assets/images/photos/black__eclipse.jpg";
import black__skylight from "../../assets/images/photos/black__skylight.jpg";

import gray__lighthouse from "../../assets/images/photos/gray__lighthouse.jpg";
import gray__break from "../../assets/images/photos/gray__break.jpg";
import gray__cupid from "../../assets/images/photos/gray__cupid.jpg";
import gray__action from "../../assets/images/photos/gray__action.jpg";
import gray__cityscape from "../../assets/images/photos/gray__cityscape.jpg";
import gray__peace from "../../assets/images/photos/gray__peace.jpg";
import gray__gull from "../../assets/images/photos/gray__gull.jpg";

import white__exposed from "../../assets/images/photos/white__exposed.jpg";
import white__clustered from "../../assets/images/photos/white__clustered.jpg";
import white__profile from "../../assets/images/photos/white__profile.jpg";
import white__snap from "../../assets/images/photos/white__snap.jpg";
import white__mirror from "../../assets/images/photos/white__mirror.jpg";

import { capitaliseFirstLetter } from "../../common/utils";

const photoFiles = [
  red__message,
  red__maple,
  red__restart,
  red__blossoms,
  red__curly,
  red__aftermath,
  orange__inari,
  orange__beetle,
  orange__sunrise,
  orange__spikes,
  orange__transit,
  orange__temple,
  orange__markets,
  orange__streetlights,
  orange__attention,
  yellow__sunset,
  yellow__zero,
  yellow__cab,
  yellow__relative,
  yellow__pyro,
  yellow__skylines,
  yellow__sound,
  yellow__beefcake,
  yellow__perspective,
  yellow__warning,
  green__branches,
  green__grass,
  green__fuji,
  green__aisle,
  green__sanctuary,
  green__offside,
  green__curiosity,
  green__cross,
  green__birdman,
  green__contest,
  green__level,
  blue__hydropump,
  blue__iceblock,
  blue__chill,
  blue__rockpool,
  blue__peak,
  blue__sheko,
  blue__freedom,
  blue__wave,
  blue__monster,
  blue__hover,
  purple__romance,
  purple__selfie,
  purple__veins,
  purple__thumb,
  purple__lightbeam,
  purple__hope,
  purple__reminder,
  black__scar,
  black__fluorescence,
  black__wheel,
  black__artiste,
  black__skylight,
  black__kawaguchiko,
  black__glowsticks,
  black__eclipse,
  black__frequency,
  gray__lighthouse,
  gray__cupid,
  gray__cityscape,
  gray__action,
  gray__peace,
  gray__break,
  gray__gull,
  white__exposed,
  white__clustered,
  white__profile,
  white__mirror,
  white__snap,
];

export type PhotoData = {
  file: string;
  title: string;
  colour: string;
  colourOverride: string | null;
  time: Date;
};

function dataFromFilename(file: string): { title: string; colour: string } {
  //   console.log(item);
  const fileDir = file.split(".")[0];
  //   console.log(fileDir);
  const fileName = fileDir.split("/")[3];
  //   console.log(fileName);
  const splitFileName = fileName.split("__");
  const colour = splitFileName[0];
  const title = capitaliseFirstLetter(splitFileName[1]);
  //   console.log(`Photo data: ${title}, ${colour}`);

  return { title: title, colour: colour };
}

const PhotoList: Array<PhotoData> = [];

photoFiles.forEach((item) => {
  PhotoList.push({
    file: item,
    title: dataFromFilename(item).title,
    colour: dataFromFilename(item).colour,
    colourOverride: null,
    time: new Date(),
  });
});

const PhotoListOld: Array<PhotoData> = [
  //   {
  //     file: red__message,
  //     title: "message",
  //     colour: "red",
  //     colourOverride: "",
  //     time: new Date(),
  //   },
  //   {
  //     file: orange__beetle,
  //     title: "beetle",
  //     colour: "orange",
  //     colourOverride: "",
  //     time: new Date(),
  //   },
  //   {
  //     file: yellow__sunset,
  //     title: "sunset",
  //     colour: "yellow",
  //     colourOverride: "",
  //     time: new Date(),
  //   },
  //   {
  //     file: green__branches,
  //     title: "branches",
  //     colour: "green",
  //     colourOverride: "",
  //     time: new Date(),
  //   },
  //   {
  //     file: blue__hydropump,
  //     title: "hydropump",
  //     colour: "blue",
  //     colourOverride: "",
  //     time: new Date(),
  //   },
  //   {
  //     file: purple__romance,
  //     title: "romance",
  //     colour: "purple",
  //     colourOverride: "",
  //     time: new Date(),
  //   },
  //   {
  //     file: black__fluorescence,
  //     title: "fluorescence",
  //     colour: "black",
  //     colourOverride: "",
  //     time: new Date(),
  //   },
  //   {
  //     file: black__artiste,
  //     title: "artiste",
  //     colour: "black",
  //     colourOverride: "",
  //     time: new Date(),
  //   },
  //   {
  //     file: white__exposed,
  //     title: "exposed",
  //     colour: "white",
  //     colourOverride: "",
  //     time: new Date(),
  //   },
];

export default PhotoList;
