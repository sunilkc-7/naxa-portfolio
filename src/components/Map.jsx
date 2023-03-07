import React, { useState, useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import GeoJSON from "ol/format/GeoJSON";
import Feature from "ol/Feature";
import "ol/ol.css";
import { initialMapState } from "../assets/mapdata";
import NavBar from "../pages/NavBar";

const MapContainer = () => {
  const [map, setMap] = useState();

  useEffect(() => {
    const vectorSource = new VectorSource({
      features: new GeoJSON().readFeatures(initialMapState.data),
    });

    const pointStyle = new Style({
      image: new CircleStyle({
        radius: 8,
        fill: new Fill({ color: "red" }),
        stroke: new Stroke({ color: "white", width: 2 }),
      }),
    });

    const polygonStyle = new Style({
      fill: new Fill({ color: "rgba(0, 0, 255, 0.1)" }),
      stroke: new Stroke({ color: "blue", width: 2 }),
    });

    const pointLayer = new VectorLayer({
      source: vectorSource,
      style: function (feature) {
        if (feature.getGeometry().getType() === "Point") {
          return pointStyle;
        }
      },
      zIndex: 1,
    });

    const polygonLayer = new VectorLayer({
      source: vectorSource,
      style: function (feature) {
        if (feature.getGeometry().getType() === "Polygon") {
          return polygonStyle;
        }
      },
      zIndex: 0,
    });

    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        polygonLayer,
        pointLayer,
      ],
      view: new View({
        center: initialMapState.center,
        zoom: initialMapState.zoom,
      }),
    });

    setMap(map);

    return () => map.setTarget(undefined);
  }, []);

  return (
    <div className="map-container w-full flex items-center mx-auto flex-col">
      <div className="w-[80%] py-8 flex justify-between">
        <NavBar />
      </div>
      <div id="map" className="map"></div>
    </div>
  );
};

export default MapContainer;
