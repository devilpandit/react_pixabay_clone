import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Navbar = () => {
  const { fetchImageByCategory, setQuery } = useContext(PixabayContext);
  return (
    <>
      <div className="main-navbar">
        <div className="container text-center">
          <button
            onClick={() => fetchImageByCategory("nature")}
            type="button"
            className="btn btn-primary mx-3"
          >
            Nature
          </button>
          <button
            onClick={() => fetchImageByCategory("science")}
            type="button"
            className="btn btn-secondary mx-3"
          >
            Science
          </button>
          <button
            onClick={() => fetchImageByCategory("computer")}
            type="button"
            className="btn btn-success mx-3"
          >
            Computer
          </button>
          <button
            onClick={() => fetchImageByCategory("buildings")}
            type="button"
            className="btn btn-danger mx-3"
          >
            Buildings
          </button>
          <button
            onClick={() => fetchImageByCategory("sports")}
            type="button"
            className="btn btn-warning mx-3"
          >
            Sports
          </button>
          <button
            onClick={() => fetchImageByCategory("transportation")}
            type="button"
            className="btn btn-info mx-3"
          >
            Transportation
          </button>
          <button
            onClick={() => fetchImageByCategory("travel")}
            type="button"
            className="btn btn-light mx-3"
          >
            Travel
          </button>
          <button
            onClick={() => fetchImageByCategory("food")}
            type="button"
            className="btn btn-dark mx-3"
          >
            Food
          </button>
        </div>
        <div className="container mt-3 w-50">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            className="form-control search-input"
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
