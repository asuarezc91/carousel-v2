import React from "react";
import {NavbarMenu} from "./styles";
import { Consult } from "../../pages/Consult";
// import { Guagua } from "../../pages/Guagua";
import {Router} from '@reach/router'
import {LinkedConsultButton} from "./styles";
import {Link} from "./styles";

export const Navbar = () => {
  return (

  <NavbarMenu> 
    <Link to = '/'>Consult</Link>
    <Link to = '/chart'>Chart</Link>
   </NavbarMenu>
 
  
  );
};

 



// <MainMenu>
// <Router>  
// <Home path = '/'/>
// <Guagua path = '/papi'/>
// </Router> 
// </MainMenu>  