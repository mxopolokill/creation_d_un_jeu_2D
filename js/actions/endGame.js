import { score } from "./score.js";
import { lives } from "./lives.js";

export function endGame() {
    if(lives<=0) {
        alert("STOOOOP");
    }
}

endGame();
