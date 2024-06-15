import notifySrc from "../assets/sounds/notify.mp3";
import boomSrc from "../assets/sounds/boom.wav";
import healthSrc from "../assets/sounds/health.wav";
import flamethrowSrc from "../assets/sounds/flamethrower.mp3";

import type { SoundLoaderType } from "./types";

const soundAssets: SoundLoaderType[] = [
  {
    name: "notify",
    src: notifySrc,
  },
  { name: "boom", src: boomSrc },
  { name: "health", src: healthSrc },
  {
    name: "flamethrower",
    src: flamethrowSrc,
  },
];

export default soundAssets;
