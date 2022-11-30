export const kotowazaArray = [];

class Kotowaza {
    constructor( kotowaza, description, imgUrl) {
        this.kotowaza = kotowaza;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}


kotowazaArray[0] = new Kotowaza("笑う門には福来たる", "笑顔は周りの人にしあわせを伝染する魔法なんだとか。たくさん笑って、ハッピーな一日を過ごしましょう♪", "illust.png");
kotowazaArray[1] = new Kotowaza("犬も歩けば棒に当たる", "説明", "illust.png");
