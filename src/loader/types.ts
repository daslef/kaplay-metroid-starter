import type { LoadSpriteOpt, SpriteAtlasData, SceneDef } from "kaplay";

export type SoundLoaderType = {
  name: string;
  src: string;
};

export type FontLoaderType = {
  name: string;
  src: string;
};

export type SpriteLoaderType = {
  name: string;
  src: string;
  options?: LoadSpriteOpt;
};

export type AtlasLoaderType = {
  src: string;
  data: SpriteAtlasData;
};

export type GraphicsLoaderType = {
  sprites: SpriteLoaderType[];
  atlases: AtlasLoaderType[];
};

export type MapLoaderType = {
  name: string;
  src?: object;
};
