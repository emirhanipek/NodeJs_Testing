const fonx = require("../fonx");


describe("Bu Bir Test Yazılımıdır", () => {
    test("Denem", () => {
        const req = fonx(5);
        expect(req).toBe(false);
    });    
});


describe("Bu Bir Çift Test Denemesidir",()=>{
    test("Deneme Çift",()=>{
        const req = fonx(4);
        expect(req).toBe(true);
    })
});

describe("0 Yazdıgı Zaman",()=>{
    test("Deneme 0",() => {
        const req = fonx(0);
        expect(req).toBe(true);
    })
})
