const checkNumberSign = require('../check-number');


describe('Pozitif Bir Sayının Geçmesi',() => {
    test('Testten Pozitif Bir Sayının Geçmesi', () => {
        const answer = checkNumberSign(4);
        expect(answer).toBe("positive");
      });
});


describe('Negatif Sayısıının Geçmesi',() => {
    test('Testten Negatif Bir Sayının Geçmesi', () => {
        expect(checkNumberSign(-3)).toBe("negative");
      });
});


describe('0 Sayısının Geçmesi', () => {
    test('Testten Sıfır Değişkeni Geçmesi', () => {
        expect(checkNumberSign(0)).toBe("zero");
      });
})


