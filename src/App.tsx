import React from "react";
import "./App.css";
import { Outlet, NavLink } from "react-router-dom";
import { mainNavRoutes } from "./common/routes";

function App(): React.ReactElement {
  return (
    // The top div is our overall app container
    <div className="flex flex-col h-screen relative bg-gray-700">
      {/* This is our main navigation bar */}
      <header>
        <nav className="absolute top-0 w-full h-16 bg-gray-800 text-white flex justify-center items-center border-b border-gray-700 shadow">
          <div className="flex space-x-8 text-lg">
            {/* Add links from routes.ts */}
            {mainNavRoutes.map((route) => (
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  `${isActive ? "font-semibold" : ""}`
                }
              >
                {route.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      {/* and this is where the content will go */}
      <div className="flex flex-grow pt-16 h-full justify-center">
        <div className="h-full w-full md:w-3/4 md:max-w-7xl text-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
