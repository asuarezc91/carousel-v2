import React, {
  useState,
  useEffect,
  PropTypes
} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Slider from "react-slick";
import Query from "esri/tasks/support/Query";
import QueryTask from "esri/tasks/QueryTask";
import { Select } from "./styles";
import { ContainerSelection } from "./styles";
import { ParrafoProvincia } from "./styles";
import GraphicsLayer from "esri/layers/GraphicsLayer";
import { map } from "../data/logic";
import { view } from "../data/logic";
import { fl } from "../data/logic";

export const Carousel = () => {
  const layer = new GraphicsLayer({
    listMode: "hide"
  });
  map.add(layer);
  const [suggestions, setSuggestions] = useState([]);
  // if (suggestions.length === 0) {
  //   const municipiosLayerUrl =
  //     "https://services8.arcgis.com/o9xiVBMM7LVPq4Xx/ArcGIS/rest/services/spatial_selection_50km/FeatureServer/0";
  //   const queryTask = new QueryTask({
  //     url: municipiosLayerUrl
  //   });
  //   const query = new Query();
  //   query.returnGeometry = true;
  //   query.where = "Texto = 'Murcia'";
  //   query.orderByFields = ["NAMEUNIT ASC"];
  //   const items = [];
  //   queryTask.execute(query).then(function (results) {
  //     const stats2 = results.features;
  //     for (const [index, value] of stats2.entries()) {
  //       const elements = stats2[index].attributes;
  //       items.push(elements);
  //     }
  //     setSuggestions(items);
  //   });
  // }

  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      }
    ]
  }
  async function filterPath() {
    layer.graphics.removeAll();
    const municipiosUrlFilter =
      "https://services8.arcgis.com/o9xiVBMM7LVPq4Xx/ArcGIS/rest/services/spatial_selection_50km/FeatureServer/0"; // Represents the REST endpoint for a layer of cities.
    const queryTask = new QueryTask({
      url: municipiosUrlFilter
    });
    const selector = document.getElementById("selectD");
    const value = selector[selector.selectedIndex].value;
    console.log(value);
    const query2 = new Query();
    query2.returnGeometry = false;
    query2.where = "Texto = '" + value + "'";
    query2.orderByFields = ["NAMEUNIT ASC"];
    const items4 = [];
    await queryTask.execute(query2).then(function (results2) {
      const stats4 = results2.features;
      for (const [index4, value] of stats4.entries()) {
        const elements4 = stats4[index4].attributes;
        items4.push(elements4);
      }
    });
    const isValue = item => item.Texto !== value;
    const udaptedList = suggestions.filter(isValue);
    setSuggestions(udaptedList);
    setSuggestions(items4);
    fl.definitionExpression = "Texto = '" + value + "'";
    view.center = [-5.9, 37.3];
    view.zoom = 6;
  }
  async function zoomToGeometry(id) {
    layer.graphics.removeAll();
    const featureMuni =
      "https://services8.arcgis.com/o9xiVBMM7LVPq4Xx/ArcGIS/rest/services/spatial_selection_50km/FeatureServer/0";
    const queryTask = new QueryTask({
      url: featureMuni
    });
    const query = new Query();
    query.returnGeometry = true;
    query.where = "NAMEUNIT = '" + id + "'";
    await queryTask.execute(query).then(function (results) {
      const arrayResultado0 = results.features[0];
      const simbología = {
        type: "simple-fill",
        color: [51, 51, 204, 0.9],
        style: "solid",
        outline: {
          color: "white",
          width: 1
        }
      };
      arrayResultado0.symbol = simbología;
      layer.graphics.add(arrayResultado0);
      view
        .goTo(results.features, { animate: false })
        .then(function (response) {
          var zoomView = {};
          zoomView = view.extent.expand(2.0);
          view.goTo(zoomView);
        });
    });

  };

  return (
    <div className="container">
      <ContainerSelection>
        <ParrafoProvincia>Seleccione una provincia: </ParrafoProvincia>
        <Select id="selectD"
          onChange={() => filterPath()}
        >
          <option value="--">--</option>
          <option value="Murcia"> Murcia </option>
          <option value="Valencia" >Valencia</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Sevilla">Sevilla</option>
        </Select>
      </ContainerSelection>
      {suggestions.length === 0 ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
          <Slider {...settings}>
            {suggestions.map(current => (
              <div className="out" id="papasote" key={current.FID}>
                <div className="card" >
                  {/* <img className="rounded-circle" alt={"users here"} src={`https://source.unsplash.com/random/${current.id}`} height={56} width={56} /> */}
                  <div className="card-body">
                    <h5 className="card-title">{current.NAMEUNIT}</h5>
                    <button
                      onClick={() => zoomToGeometry(current.NAMEUNIT)}
                      className="btn btn-sm follow btn-primary" id="zoomButton">Z</button>
                    <br />
                    <a href="https://www.gobernanzaindustrial.com/OIREA/FichaLocalizacion001_Ribarroja/docs/CM_Guia_Ribarroja.pdf" className="btn btn-success" target="_blank">PDF</a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
    </div>
  );
}

