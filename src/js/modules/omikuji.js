class Omikuji {
    constructor(array) {
        this.array = array
    }

    result() {
        // おみくじの結果を作成
        let num = Math.floor(Math.random() * this.array.length);
        let result = this.array[num];

        return result;
    }

}

class Fortune extends Omikuji {
    constructor(array) {
        super(array);
        this.fortuneElem = document.getElementById('js-fortune');
    }

    resultHTML() {        
        // 運勢を1文字ずつspanで囲む
        let result = super.result();
        let resultHTML = '';

        for ( let i = 0; i < result.length; i++ ) {
            let string = result.charAt(i);

            resultHTML += `<span>${string}</span>`;
        }

        return resultHTML;
    }

    set() {
        // DOMに結果を追記
        let result = this.resultHTML();

        this.fortuneElem.innerHTML = result;
    }
}

class Kotowaza extends Omikuji {
    constructor(array)
    {
        super(array);
        this.kotowazaElem = document.getElementById('js-kotowaza');
        this.commentElem = document.getElementById('js-comment');
        this.imgElem = document.getElementById('js-kotowazaImg');
    }

    set() {
        // DOMに結果を追記
        let result = super.result();

        this.kotowazaElem.textContent = result.kotowaza;
        this.commentElem.innerHTML = result.comment;
        this.imgElem.src = `./images/kotowaza/kotowaza-${result.imgNum}.png`;
        this.imgElem.alt = result.kotowaza;
    }
}

export { Fortune, Kotowaza };