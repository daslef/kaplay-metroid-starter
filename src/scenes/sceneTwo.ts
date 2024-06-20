import { KaboomCtx } from "kaplay";

export default function sceneTwo(k: KaboomCtx & { maps: Map<string, any> }) {
    k.setBackground(20, 20, 10);

    k.add([k.text("lvl 2", { font: "glyphmesss" }), k.pos(100, 100)]);

    console.log(map, colliders)
}