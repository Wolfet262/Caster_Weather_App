import React, { useState } from "react";

function Searchbar(props) {
  const [search, setSearch] = useState("");
  function handleChange(event) {
    setSearch(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  const getWeather = () => {
    fetch(`https://api.weatherbit.io/v2.0/forecast/daily`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="searchform">
        <input
          placeholder="Ex. Miami, FL"
          type="text"
          name="search"
          onChange={handleChange}
          value={search}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default Searchbar;
