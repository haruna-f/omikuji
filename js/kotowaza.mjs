class Kotowaza {
    constructor( kotowaza, description, imgUrl) {
        this.kotowaza = kotowaza;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

export const kotowazas = [];

kotowazas[0] = new Kotowaza("笑う門には福来たる", "説明", "/images/kotowaza/illust.png");
kotowazas[1] = new Kotowaza("犬も歩けば棒に当たる", "説明", "/images/kotowaza/illust.png");
