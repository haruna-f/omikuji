import "../css/ress.css";
import "../css/style.css";
import { play } from "./modules/play.js";
import { replay } from "./modules/replay.js";

// おみくじを引くボタン：クリックイベント
const playButton = document.getElementById('js-playButton');
playButton.addEventListener('click', play);

// もう一度引くボタン：クリックイベント
const replayButton = document.getElementById('js-replayButton');
replayButton.addEventListener('click', replay);
