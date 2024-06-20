import { KaboomCtx } from "kaplay";

export default function sceneOne(k: KaboomCtx & { maps: Map<string, any> }) {
    k.setBackground(20, 20, 10);

    k.add([k.text("lvl 1", { font: "glyphmesss" }), k.pos(k.width() / 2, k.height() / 2)]);

    return { k,}
}