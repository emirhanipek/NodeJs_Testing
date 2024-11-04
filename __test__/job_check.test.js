const fonx = require('../job_check');

describe("Kullanıcı dizisi kontrol eden test", () => {
    test("Meslek gruplarına göre istatistikleri hesapla", () => {
        const users = [
            { name: "Alice", age: 22, job: "developer", gender: "female", location: "USA" },
            { name: "Bob", age: 25, job: "developer", gender: "male", location: "USA" },
            { name: "Charlie", age: 30, job: "teacher", gender: "male", location: "Canada" },
        ];

        const req = fonx(users);
        
        expect(req).toEqual([
            expect.objectContaining({
                job: "developer",
                averageAge: 23.5,
                totalUsers: 2,
                names: "Alice, Bob"
            }),
            expect.objectContaining({
                job: "teacher",
                averageAge: 30,
                totalUsers: 1,
                names: "Charlie"
            }),
        ]);
    });

    test("Filtrelenmiş kullanıcı yoksa boş bir dizi döndürmeli", () => {
        const users = [
            { name: "ARDA", age: 15, job: "grafik", gender: "male", location: "Turkey" },
            { name: "ads", age: 17, job: "adasd", gender: "male", location: "Turkey" },
        ];

        const req = fonx(users);
        expect(req).toEqual([]);
    });
});
