import { KaboomCtx } from "kaplay";

const scenes = {
  sceneOne: (k: KaboomCtx) => {},
  sceneTwo: (k: KaboomCtx) => {},
  sceneIntro: (k: KaboomCtx) => {
    k.setBackground(20, 20, 10);
    k.add([k.text("hey there!", { font: "glyphmesss" }), k.pos(100, 100)]);
    k.add([k.rect(10, 20), k.pos(k.width() / 2, k.height() / 2)]);
  },
};

export default scenes;
