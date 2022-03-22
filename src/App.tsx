import React from "react";
import "./App.css";
import { Wrench } from "phosphor-react";

function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex">
          <span className="flex flex-col md:flex-row align-middle items-center gap-6">
            <span className="">
              <Wrench color="#2EC4B6" weight="duotone" size={192} />
            </span>
            <div className="flex flex-col gap-3">
              <h1 className="px-4 text-4xl text-center md:text-left">
                This page is currently under construction
              </h1>
              <p className="px-4 text-xl font-light text-center md:text-left">
                Come back later to see what's in store
              </p>
            </div>
          </span>
        </div>
      </header>
    </div>
  );
}

export default App;
