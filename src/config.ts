import { KaboomOpt } from "kaplay"

const scale = 2
const width = 640
const height = 480

export default (): KaboomOpt => ({
    width,
    height,
    scale,
    letterbox: true,
    global: false,
})