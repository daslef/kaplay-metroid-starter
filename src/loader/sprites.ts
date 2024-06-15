import uSrc from "../assets/sprites/u.png";
import droneSrc from "../assets/sprites/dr0ne.png";
import burnerSrc from "../assets/sprites/burn3r.png";
import tilesetSrc from "../assets/tileset.png";
import backgroundSrc from "../assets/background.png";
import uiSrc from "../assets/ui.png";
import animationsSrc from "../assets/animations.png";
import sceneOneSrc from "../assets/maps/map1.png";
import sceneTwoSrc from "../assets/maps/map2.png";

import type { SpriteLoaderType, AtlasLoaderType } from "./types";

const spriteAssets: SpriteLoaderType[] = [
  {
    name: "player",
    src: uSrc,
    options: {
      sliceX: 8,
      sliceY: 9,
      anims: {
        idle: { from: 0, to: 7, loop: true },
        run: { from: 8, to: 13, loop: true },
        jump: { from: 51, to: 51, loop: true },
        fall: { from: 54, to: 54, loop: true },
        explode: { from: 64, to: 69 },
        attack: { from: 24, to: 28, speed: 16 },
      },
    },
  },
  {
    name: "drone",
    src: droneSrc,
    options: {
      sliceX: 6,
      sliceY: 3,
      anims: {
        flying: { from: 0, to: 3, loop: true },
        attack: { from: 6, to: 11, loop: true },
        explode: { from: 12, to: 17 },
      },
    },
  },
  {
    name: "burner",
    src: burnerSrc,
    options: {
      sliceX: 5,
      sliceY: 6,
      anims: {
        idle: { from: 0, to: 3, loop: true },
        run: { from: 6, to: 8, loop: true },
        "open-fire": { from: 10, to: 14 },
        fire: { from: 15, to: 18, loop: true },
        "shut-fire": { from: 20, to: 23 },
        explode: { from: 25, to: 29 },
      },
    },
  },
  {
    name: "tileset",
    src: tilesetSrc,
    options: {
      sliceX: 33,
      sliceY: 21,
    },
  },
  {
    name: "background",
    src: backgroundSrc,
    options: {
      sliceX: 13,
      sliceY: 25,
    },
  },
  {
    name: "sceneOne",
    src: sceneOneSrc,
  },
  {
    name: "sceneTwo",
    src: sceneTwoSrc,
  },
];

const atlasAssets: AtlasLoaderType[] = [
  {
    src: uiSrc,
    data: {
      healthBar: {
        x: 16,
        y: 16,
        width: 60,
        height: 48,
        sliceY: 3,
      },
    },
  },
  {
    src: animationsSrc,
    data: {
      cartridge: {
        x: 125,
        y: 145,
        width: 134,
        height: 16,
        sliceX: 8,
        anims: {
          default: { from: 0, to: 4, loop: true, speed: 7 },
        },
      },
    },
  },
];

export default {
  sprites: spriteAssets,
  atlases: atlasAssets,
};
