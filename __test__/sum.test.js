const sum = require('../sum');

describe("Bu DSKALDK dalkda DSŞALKDALS alsdkaşsdk",()=>{
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("Bu Test Toplama İşlemi Kontrol Ediyor",()=>{
  test("5 + 4 Eşittir 9 Yapar",() => {
    const answer = sum(5,4);
    expect(answer).toBe(9);
  });
});

describe("Bu Test Toplama İşlemini Kontrol Ediyor", () =>{
  it("5 + 5 Eşittir 10 Yapar",() => {
    const answer = sum(5,5);
    expect(answer).toBe(10);
  });
});


describe("Negatif sayıları toplama", () =>{
  it("-5 + -5 Eşittir -10 Yapar",() => {
    const answer = sum(-5,-5);
    expect(answer).toBe(-10);
  });
});

describe("Negatif sayıları toplama", () =>{
  it("-5 + -5 Eşittir -10 Yapar",() => {
    const answer = sum(5,-5);
    expect(answer).toBe(0);
  });
});




