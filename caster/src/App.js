import React, { useContext, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import { DataContext } from "./Components/DataContext";
import Searchbar from "./Components/Searchbar";

function App() {
  return (
    <div className="App">
      <DataContext.Provider value={""}>
        <div className="header">
          <Header />
          <Searchbar />
        </div>

        <div className="Cards">
          <Card
            datetime="2021-14-01"
            low_temp="36.9"
            max_temp="72.6"
            description="Clear Sky"
            icon="c01d"
          />
        </div>
      </DataContext.Provider>
    </div>
  );
}

export default App;
