import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Cards from "./Components/Cards.jsx";
import Search from "./Components/Search.jsx";
import { API_URL } from "./apiInfo";
import Header from "./Components/Header.jsx";
import Features from './Components/Features.jsx'

function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(API_URL);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      });
  }, [url]);

  ///comment 
  return (
    <Container className="App">
      
      <Header />
      <Search
        onSearch={(city) => {
          setUrl(`${API_URL}units=I&days=5&city=${city}&key=${process.env.REACT_APP_KEY}`);
        }}
      />
      {data === undefined ? <p></p> : <Cards weathers={data} />}
    </Container>
  );
}

export default App;
