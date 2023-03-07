import { fromLonLat } from "ol/proj";

export const initialMapState = {
  center: fromLonLat([83.9629, 28.2193]),
  zoom: 7,
  data: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: fromLonLat([84.124, 28.3949]),
        },
        properties: {
          name: "Kathmandu",
          population: 1298000,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              fromLonLat([82.139, 27.8427]),
              fromLonLat([84.357, 28.1332]),
              fromLonLat([85.05, 27.5286]),
              fromLonLat([88.122, 26.7878]),
              fromLonLat([88.065, 26.3699]),
              fromLonLat([87.334, 26.4132]),
              fromLonLat([87.15, 26.0383]),
              fromLonLat([86.002, 27.3276]),
              fromLonLat([83.935, 27.3627]),
              fromLonLat([82.652, 26.5547]),
              fromLonLat([80.058, 28.5301]),
              fromLonLat([81.051, 29.2695]),
              fromLonLat([82.139, 27.8427]),
            ],
          ],
        },
        properties: {
          name: "Nepal",
          population: 28982771,
        },
      },
    ],
  },
};
