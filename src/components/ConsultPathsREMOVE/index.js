import React, { useState } from "react";

export const ConsultPaths = () => {
  return (
    <div className="test">
      <div id="rectangle">
        <div id="consult">
          <p>Dificultad : </p>
          <select class="box" id="selectD">
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
            <option value="Extrema">Extrema</option>
          </select>
        </div>
        <button
          onClick={() => this.filterPath()}
          type="button"
        >
          Consultar
        </button>
      </div>
    </div>
  );
};
