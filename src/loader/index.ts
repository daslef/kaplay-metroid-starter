import kaboom, { KaboomCtx } from "kaplay";

import soundAssets from "./sounds";
import spriteAssets from "./sprites";
import fontAssets from "./fonts";

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

const k = kaboom(createConfig());

loadSprites(k, spriteAssets);
loadSounds(k, soundAssets);
loadFonts(k, fontAssets);

export default k;
