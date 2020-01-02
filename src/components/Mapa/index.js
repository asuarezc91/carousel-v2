import React, { useEffect, useRef } from "react";


// import React from "react";
// import { Mapi } from "./styles";
// import { Boton } from "./styles";
import { ContainerRight } from "../ContainerRight";
import { Navbar } from "../Navbar";
import { Carousel } from "../Carousel";
 

// export const Mapa = () => <Mapi></Mapi>;

// export function Mapa() {
//   const elementRef = useRef();

//   useEffect(_ => {
//     let cleanup;
//     // lazy load the module that loads the JSAPI
//     // and initialize it
//     import("../data/logic").then(
//       app => (cleanup = app.initialize(elementRef.current))
//     );
//     return () => cleanup && cleanup();
//   }, []);

//   // assign elementRef to the ref of our component
//   return <div className="viewDiv" ref={elementRef}></div>;
// }

export const Mapa = () => {
  const elementRef = useRef();

  useEffect(_ => {
    let cleanup;
    // lazy load the module that loads the JSAPI
    // and initialize it
    import("../data/logic").then(
      app => (cleanup = app.initialize(elementRef.current))
    );
    return () => cleanup && cleanup();
  }, []);

  // assign elementRef to the ref of our component
  return <div className="viewDiv" ref={elementRef}>
    {/* <ContainerRight/>
    <Navbar/> */}
    <Carousel/>
    {/* <button type="button">Click Me!</button> */}
     </div>;
};

 