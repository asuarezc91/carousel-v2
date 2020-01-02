import WebMap from "esri/WebMap";
import MapView from "esri/views/MapView";
import Search from "esri/widgets/Search";
import FeatureLayer from "esri/layers/FeatureLayer";
import Map from "esri/Map";

// const noop = () => {};

const url =
  "https://services8.arcgis.com/o9xiVBMM7LVPq4Xx/ArcGIS/rest/services/spatial_selection_50km/FeatureServer/0";
export const fl = new FeatureLayer(url);
export const map = new Map({
  basemap: "dark-gray",
  layers: [fl]
});


export const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-5.9, 37.3],
  zoom: 6
});



// ESRI 

// export const webmap = new WebMap({
//   portalItem: {
//     id: "974c6641665a42bf8a57da08e607bb6f"
//   }
// });

// export const view = new MapView({
//   map: webmap
// });

// export const search = new Search({ view });
// view.ui.add(search, "top-right");

export const initialize = container => {
  view.container = container;
  view;
  // .when()
  // .then(_ => {
  //   console.log("Map and View are ready");
  // })
  // .catch(noop);
  return () => {
    view.container = null;
  };
};




