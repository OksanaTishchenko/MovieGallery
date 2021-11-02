import { useState, useEffect } from "react";
import data from '../../data/imdb.json'
import './Browse.scss';
//import info from '../../images/info.png';
import info from "../../images/info.png";
//import info2 from '../images/info2.svg'

function Browse() {

  const [count, setCount] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [films, setFilms] = useState(data);
  const [currentFilms, setCurrentFilms] = useState(null);

  useEffect(() => {
    //setFilms(data)
    // console.log(films);
    setCurrentFilms(films.slice(0, count));

  }, [films, setCurrentFilms]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e) => {
    // console.log('scroll height', e.target.documentElement.scrollHeight); // общая высота страницы, с учётом скролла

    // console.log('scroll top', e.target.documentElement.scrollTop); //текущее положение скролла от вверха страницы

    // console.log('scroll inner height', window.innerHeight); //высота видимой части браузера

    let scrollHeight = e.target.documentElement.scrollHeight;
    let scrollTop = e.target.documentElement.scrollTop;
    let innerHeight = window.innerHeight;
    if (scrollHeight === (scrollTop + innerHeight)) {
      console.log('loading');
    }
  }

  return (
    <>
      <div className="cards">
        <div className="cards__inner">
          <ul className="cards__list">
            {currentFilms && currentFilms.map(item => (
              <li key={item.id} className="cards__item film">
                <div className="film__content">
                  <div className="film__header">
                    <div className="film__image">
                      <img src={item.poster} alt={item.title} />
                    </div>
                    <h4 className="film__title">{item.title}</h4>
                    <img src={info} alt="" className="film__more-info" />
                    <div className="film__description description">
                      <h4 className="description__title">About film</h4>
                      <p className="description__plot"><span className="subtitle">Plot:</span> {item.plot}</p>
                      <p className="description__writer"><span className="subtitle">Writer:</span> {item.writer}</p>
                      <p className="description__actors"><span className="subtitle">Actors:</span> {item.actors}</p>
                    </div>
                  </div>
                  <div className="film__about">
                    <p className="film__genre"><span className="subtitle">Genre:</span> {item.genre}</p>
                    <p className="film__director"><span className="subtitle">Director:</span> {item.director}</p>
                    <p className="film__year"><span className="subtitle">Year:</span> {item.year}</p>
                  </div>
                </div>
                {/* <div className="film__description description">
                  <h4 className="description__title">About film</h4>
                  <p className="description__plot"><span className="subtitle">Plot:</span> {item.plot}</p>
                  <p className="description__writer"><span className="subtitle">Writer:</span> {item.writer}</p>
                  <p className="description__actors"><span className="subtitle">Actors:</span> {item.actors}</p>
                </div> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Browse;