import mapOneSrc from "../assets/maps/map1.json";
import mapTwoSrc from "../assets/maps/map2.json";

import type { MapLoaderType } from "./types";

const mapIntro: MapLoaderType = {
  name: "intro",
};

const mapOne: MapLoaderType = {
  name: "mapOne",
  src: mapOneSrc,
};

const mapTwo: MapLoaderType = {
  name: "sceneTwo",
  src: mapTwoSrc,
};

export default [mapIntro, mapOne, mapTwo];
