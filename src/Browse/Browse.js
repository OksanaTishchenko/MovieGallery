import { useEffect } from "react";
import data from '../data/imdb.json'

function Browse() {


  // useEffect(() => {
  //   //fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   fetch('../data/data.json')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // },[])
  console.log(data);
  return (
    <>
      <h1>Browse component</h1>
      {/* {data.map(item => (
        <div style={{ 'co
        dlor': 'white' }}>{item.title}</div>
      ))} */}
      <div className="cards">
        <div className="cards__container">
          <ul className="cards__list">
            <li className="cards__item">
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Browse;