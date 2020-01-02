import React from "react";
import { Router } from "@reach/router";
import { Paths } from "../../pages/Paths";
import { ConsultMenuPrint, Link } from "./styles";

export const ConsultMenu = () => {
  return (
    <ConsultMenuPrint>
      <Link to="/paths">Paths</Link>
    </ConsultMenuPrint>
  );
};
