import React, { useState, useEffect, useCallback } from "react";
import data from "../../data/imdb.json";
import "./Browse.scss";
import { FilmsList } from "../FilmsList/FilmsList";

function Browse() {
  const [count] = useState(20);
  const [films] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFilms, setCurrentFilms] = useState(null);

  const scrollHandler = useCallback(e => {
    let scrollHeight = e.target.documentElement.scrollHeight;
    let scrollTop = e.target.documentElement.scrollTop;
    let innerHeight = window.innerHeight;

    if (scrollHeight === (scrollTop + innerHeight)) {
      setCurrentPage(prev => prev + 1);
    }
  }, [setCurrentPage])

  const loadMore = useCallback(() => {
    return currentPage * count;
  }, [currentPage, count])

  const loadFilms = useCallback(() => {
    setCurrentFilms(films.slice(0, loadMore()));
  }, [films, setCurrentFilms, loadMore])

  useEffect(() => {
    loadFilms();
  }, [loadFilms]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler)
    return function () {
      document.removeEventListener("scroll", scrollHandler)
    }
  }, [scrollHandler])

  return (
    <div className="cards">
      <div className="container">
        <FilmsList films={currentFilms} />
      </div>
    </div>
  );
}

export default Browse;