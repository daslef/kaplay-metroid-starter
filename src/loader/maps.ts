import mapOneSrc from "../assets/maps/map1.json";
import mapTwoSrc from "../assets/maps/map2.json";

import type { MapLoaderType } from "./types";

const mapOne: MapLoaderType = {
  name: "one",
  src: mapOneSrc,
};

const mapTwo: MapLoaderType = {
  name: "two",
  src: mapTwoSrc,
};

export default [mapOne, mapTwo];
