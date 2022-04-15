import React from "react";
import "./App.css";
import { Outlet, NavLink } from "react-router-dom";
import { mainNavRoutes } from "./common/routes";
import { Camera, ChatsCircle, Crown, House, Signpost } from "phosphor-react";
import { getNavIcon } from "./common/utils";

function App(): React.ReactElement {
  return (
    // The top div is our overall app container
    <div className="flex flex-col h-screen relative bg-gray-700">
      {/* This is our main navigation bar */}
      <header>
        <nav className="absolute top-0 w-full h-16 bg-gray-800 text-white flex justify-center items-center border-b border-gray-700 shadow">
          {/* Desktop */}
          <div className="hidden sm:flex space-x-8 text-lg">
            {/* Add links from routes.ts */}
            {mainNavRoutes.map((route) => (
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `flex ${
                    isActive ? "font-semibold text-teal-500" : "text-gray-300"
                  }`
                }
              >
                {({ isActive }) => getNavIcon(route.label, isActive)}
                <span className="ml-2 hidden sm:flex">{route.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex sm:hidden space-x-8 text-lg">
            {/* Add links from routes.ts */}
            {mainNavRoutes.map((route) => (
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `${isActive ? "font-semibold text-teal-500" : ""}`
                }
              >
                {({ isActive }) => getNavIcon(route.label, isActive)}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      {/* and this is where the content will go */}
      <div className="flex flex-grow pt-16 h-full justify-center bg-gray-50">
        <div className="h-full w-full md:w-3/4 md:max-w-7xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
