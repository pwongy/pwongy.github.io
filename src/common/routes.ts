import Home from "../components/Home";
import Principles from "../components/Principles";
import Journey from "../components/Journey";
import Quotes from "../components/Quotes";

export const HOME = "/welcome";
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
    path: QUOTES,
    label: "Quotes",
    component: Quotes,
  },
];
