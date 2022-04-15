import Home from "../components/Home";
import Photos from "../components/Photos";
import Principles from "../components/Principles";
import Journey from "../components/Journey";
import Quotes from "../components/Quotes";

export const HOME = "/";
export const PHOTOS = "/photos";
export const PRINCIPLES = "/principles";
export const MY_JOURNEY = "/journey";
export const QUOTES = "/quotes";

export const NOT_FOUND = "/pagenotfound";

export const mainNavRoutes = [
  {
    path: HOME,
    label: "Home",
    component: Home,
  },
  {
    path: PRINCIPLES,
    label: "Principles",
    component: Principles,
  },
  {
    path: MY_JOURNEY,
    label: "Journey",
    component: Journey,
  },
  {
    path: PHOTOS,
    label: "Photos",
    component: Photos,
  },
  {
    path: QUOTES,
    label: "Quotes",
    component: Quotes,
  },
];
