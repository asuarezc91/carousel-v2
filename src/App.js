import React, { useEffect, useRef } from "react";
 
import { Header } from "./components/Header";
import { Mapa } from "./components/Mapa";
import { Carousel } from "./components/Carousel";

 


// export function App() {
//   const elementRef = useRef();

//   useEffect(_ => {
//     let cleanup;
//     // lazy load the module that loads the JSAPI
//     // and initialize it
//     import("./data/logic").then(
//       app => (cleanup = app.initialize(elementRef.current))
//     );
//     return () => cleanup && cleanup();
//   }, []);

//   // assign elementRef to the ref of our component
//   return <div className="viewDiv" ref={elementRef}>
//   <Header /> </div>;
// }


export const App = () => (
  <div className="grid" id="test">
 
    <Header />
    <Mapa/> 
  
  
  </div>
);

