import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import info from "../../images/info.png";
import "./FilmsList.scss";

export const FilmsList = ({ films }) => {

  const { isAuth } = useContext(AuthContext);

  const mouseEnterHandler = e => {
    e.target.nextElementSibling.classList.add("show");
  }
  const mouseLeaveHandler = e => {
    e.target.nextElementSibling.classList.remove("show");
  }

  return (
    <ul className="cards__list">
      {films && films.map(item => (
        <li key={item.id} className="cards__item film">
          <div className="film__content">
            <div className="film__header">
              <div className="film__image">
                <img src={item.poster} alt={item.title} />
              </div>
              <h4 className="film__title">{item.title}</h4>
              <img src={info} alt="" className="film__more-info" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} />
              <div className="film__description description">
                {
                  isAuth
                    ? <>
                      <h4 className="description__title">About film</h4>
                      <p className="description__plot"><span className="subtitle">Plot:</span> {item.plot}</p>
                      <p className="description__writer"><span className="subtitle">Writer:</span> {item.writer}</p>
                      <p className="description__actors"><span className="subtitle">Actors:</span> {item.actors}</p>
                    </>
                    : <span>Log in to see</span>
                }
              </div>
            </div>
            <div className="film__about">
              <p className="film__genre"><span className="subtitle">Genre:</span> {item.genre}</p>
              <p className="film__director"><span className="subtitle">Director:</span> {item.director}</p>
              <p className="film__year"><span className="subtitle">Year:</span> {item.year}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}