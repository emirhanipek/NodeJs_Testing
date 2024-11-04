const fonx = require("../newjob");

describe("New Job Fonksiyonları Burda Çalıştırılır.", () => {

    it("Array Dizimi Denemesi",()=>{
        const user = [
            { name: "Alice", age: 22, job: "developer" },
            { name: "ARDA", age: 13, job: "grafik" },
            { name: "Messi", age: 43, job: "developer" },
            { name: "ads", age: 34, job: "adasd" },
        ];

        const req = fonx(user);
        expect(req).toBe("Alice, Messi"); 
    })
    

    it("Bütün Diziler Boş Dönmesi Gerekmektedir",() =>{
        const user = [
            { name: "Alice", age: 22, job: "dsalfkşdls" },
            { name: "ARDA", age: 13, job: "dasasdlşk" },
        ];

        const req = fonx(user);
        expect(req).toBe("")
    });

    it("Tek Bir Kullanıcı",()=>{
        const user = [
            { name: "Alice", age: 22, job: "dsalfkşdls" },
            { name: "ARDA", age: 19, job: "developer" },
            { name: "Alice", age: 22, job: "dsalfkşdls" },
            { name: "ARDA", age: 13, job: "dasasdlşk" },
        ]
        const req = fonx(user);
        expect(req).toBe("ARDA")
    });

    it("Sıralama İşlemini Kontrol Eder",()=>{
    const user = [
        { name: "a", age: 22, job: "developer" },
        { name: "b", age: 19, job: "developer" },
        { name: "c", age: 22, job: "developer" },
        { name: "d", age: 13, job: "developer" },
        { name: "e", age: 19, job: "developer" },
        { name: "f", age: 120, job: "developer" },
    ] 
    const req = fonx(user);
    expect(req).toBe("a, b, c, e, f")
    });

    it("Boş Bir Dizi",()=>{
        const user = [];
        const req = fonx(user);
        expect(req).toBe("");
    });


});