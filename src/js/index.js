import "../css/ress.css";
import "../css/style.css";
import { setScreenHight } from "./modules/screen-hight.js";
import { play } from "./modules/play.js";
import { replay } from "./modules/replay.js";

// ページ読み込み時に実行
window.addEventListener('DOMContentLoaded', setScreenHight);
window.addEventListener('resize', setScreenHight);

// おみくじを引くボタン：クリックイベント
const playButton = document.getElementById('js-playButton');
playButton.addEventListener('click', play);

// もう一度引くボタン：クリックイベント
const replayButton = document.getElementById('js-replayButton');
replayButton.addEventListener('click', replay);
