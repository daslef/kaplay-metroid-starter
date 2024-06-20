import { KaboomCtx } from "kaplay";

import sceneOne from "./sceneOne";
import sceneTwo from "./sceneTwo";

import { setMapColliders } from "./helpers";

export default function loadScenes(k: KaboomCtx & { maps: Map<string, any> }) {
  k.scene('one', () => setMapColliders(sceneOne(k)))
  k.scene('two', () => setMapColliders(sceneTwo(k)))
};
