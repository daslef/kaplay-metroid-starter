import kaboom, { KaboomCtx, SceneDef } from "kaplay";

import soundAssets from "./sounds";
import spriteAssets from "./sprites";
import fontAssets from "./fonts";
import mapAssets from "./maps";

import createConfig from "../config";

import * as types from "./types";

function loadFonts(gameObject: KaboomCtx, assets: types.FontLoaderType[]) {
  for (const { name, src } of assets) {
    gameObject.loadFont(name, src);
  }
}

function loadSprites(gameObject: KaboomCtx, assets: types.GraphicsLoaderType) {
  for (const { name, src, options } of assets.sprites) {
    gameObject.loadSprite(name, src, options);
  }

  for (const { src, data } of assets.atlases) {
    gameObject.loadSpriteAtlas(src, data);
  }
}

function loadSounds(gameObject: KaboomCtx, assets: types.SoundLoaderType[]) {
  for (const { name, src } of assets) {
    gameObject.loadSound(name, src);
  }
}

function loadMaps(
  gameObject: KaboomCtx & Record<string, any>,
  assets: types.MapLoaderType[]
) {
  gameObject.maps = new Map();

  for (const { name, src } of assets) {
    gameObject.maps.set(name, src as SceneDef);
  }
}

const k = kaboom(createConfig()) as KaboomCtx & { maps: Map<string, any> };

loadSprites(k, spriteAssets);
loadSounds(k, soundAssets);
loadFonts(k, fontAssets);
loadMaps(k, mapAssets);

export default k;
