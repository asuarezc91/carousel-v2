import React, { useState } from "react";
import {
  Link,
  TopMenu,
  SelectMenu,
  ButtonConsult,
  InputSearch,
  ContainerMenu,
  Scroll,
  HeaderCard,
  BodyCard
} from "./styles";

export const PathsMenu = () => {
  const [list, setCount] = useState([
    {
      title: "React",
      url: "https://facebook.github.io/react/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0
    },

    {
      title: "man",
      url: "https://facebook.github.io/react/",
      author: "man Walke",
      num_comments: 6,
      points: 8,
      objectID: 10
    }
  ]);

  // function onDismiss(id) {
  //   const isNotId = item => item.objectID !== id;
  //   const updatedList = list.filter(isNotId);
  //   setCount(updatedList);
  // }

  return (
    <ContainerMenu>
      <TopMenu>
        <Link to="/">Inicio</Link>
        <p>Dificultad : </p>
        <SelectMenu>
          <option value="Baja">Baja</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
          <option value="Extrema">Extrema</option>
        </SelectMenu>
        <ButtonConsult>Consultar</ButtonConsult>
      </TopMenu>
      <InputSearch />
      <Scroll>
        {list.map(item => (
          <div>
            <HeaderCard>
              <span>{item.title}</span>
              <button
              // onClick={() => this.zoomToGeometry(item.ID)}
              // type="button"
              // class="zoom"
              ></button>
            </HeaderCard>
            <BodyCard>
              <span>Dificultad: {item.author}</span>
              <span>Tipo: {item.author}</span>
              <span>Longitud: {item.author} km</span>
            </BodyCard>
          </div>
        ))}
      </Scroll>
    </ContainerMenu>
  );
};

// <span>Dificultad: {item.DIFICULTAD}</span>
// <span>Tipo: {item.TIPO}</span>
// <span>Longitud: {item.LONGITUD} km</span>

// <div className="test">
//   {list.map(item => (
//     <div key={item.objectID}>
//       <span>
//         <a href={item.url}>{item.title}</a>
//       </span>
//       <span>{item.author}</span>
//       <span>{item.num_comments}</span>
//       <span>{item.points}</span>
//       <span></span>
//       <button onClick={() => onDismiss(item.objectID)} type="button">
//         Dismiss
//       </button>
//     </div>
//   ))}
// </div>;

// <InputSearch/>
// <Scroll />
// <PathMenuPrint></PathMenuPrint>

// <div id="scrool">
// {this.state.list
//   .filter(isSearched(this.state.searchTerm))
//   .map(item => (
//     <div id="display">
//       <div id="headBox">
//         <span>{item.ID}</span>
//         <button
//           onClick={() => this.zoomToGeometry(item.ID)}
//           type="button"
//           class="zoom"
//         ></button>
//       </div>
//       <div id="result">
//         <span>Dificultad: {item.DIFICULTAD}</span>
//         <span>Tipo: {item.TIPO}</span>
//         <span>Longitud: {item.LONGITUD} km</span>
//       </div>
//     </div>
//   ))}
// </div>
