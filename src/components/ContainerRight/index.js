import React from "react";
import { MainMenu } from "./styles";
import { Router } from "@reach/router";
import { Consult } from "../../pages/Consult";
import { Chart } from "../../pages/Chart";
import { Paths } from "../../pages/Paths";

export const ContainerRight = () => {
  return (
    //Pondemos todo el router aqui sin falta aunque sean submenus

    <MainMenu>
      <Router>
        <Consult path="/" />
        <Chart path="/chart" />
        <Paths path="/paths" />
      </Router>
    </MainMenu>
  );
};
