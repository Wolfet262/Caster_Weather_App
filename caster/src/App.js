import React, { useContext, useState } from "react";
import "./App.css";
import { Container } from 'react-bootstrap'
import Cards from "./Components/Cards.jsx";
import Search from "./Components/Search.jsx"
import ApiFetch from "./Components/ApiFetch.jsx"
import { API_URL, KEY } from "./apiInfo"
// import Header from "./Components/Header.jsx";
// import { DataContext } from "./Components/DataContext.jsx";

function App() {
  const { data, error, isLoading, setUrl } = ApiFetch();
  console.log(data);

  return (
    <Container className="App">
      {/* <DataContext.Provider value={""}> */}
      <Search onSearch={(city) => setUrl(`${API_URL}units=I&days=5&city=${city}&key=${KEY}`)} />
      {data && <Cards weathers={data.list}/>}
        {/* <div className="Cards">
          <Search/>
          <Card/>
        </div>
        <div className="header">
          
        </div> */}
      {/* </DataContext.Provider> */}
    </Container>
  );
}

export default App;
