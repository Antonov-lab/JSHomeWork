describe("App", function () {
    // на самом деле это 4 отдельных describe, по одному на каждую фичу
    //yesOrNo(value)
    it("should return yes", function () {
        expect(yesOrNo("some data")).toBe("Yes"); // этот тест точно должен был null вернуть для некорректных данных
    });

    // и ни одного теста, который проверяет что нужно, где проверка true / false
    it("should return no", function () {
        expect(yesOrNo(0)).toBe("No");
    });

    // нужно в описании указывать что вернётся и в зависимости от чего, типа should be null for incorrect data
    it("should return null", function () {
        let value;
        expect(yesOrNo(value)).toBe(null);
    });


    //counter(total)
    // тесты счётчика некорректны, задача другая
    it("should return 15", function () {
        expect(counter(5)).toBe(15);
    });

    it("should return 9+", function () {
        expect(counter(10)).toBe("9+");
    });

    it("should return 'incorrect input data'", function () {
        expect(counter("123r")).toBe("Incorrect input data");
    });

    it("should return null", function () {
        let total;
        expect(counter(total)).toBe(null);
    });


    //calculateAge(date)
    // ужасные описания, should be null for 15.08.1969
    it("should return 50", function () {
        let date = new Date(1969, 7, 15);
        expect(calculateAge(date)).toBe(50);
    });

    it("should be null for date in the future", function () {
        let date = new Date(2039, 7, 15);
        expect(calculateAge(date)).toBe(null); // ?
    });

    // should be null for incorrect data
    it("should return null", function () {
        let date;
        expect(calculateAge(date)).toBe(null);
    });


    //getRandomItem(list)
    it('should return random item', function () {
        let list = [1, 2];

        expect(getRandomItem(list)).toBeGreaterThan(0);
        expect(getRandomItem(list)).toBeLessThan(3);
    });

    it('should return null', function () {
        let list = [];
        expect(getRandomItem(list)).toBe(null);
    });

    it('should return null', function () {
        let list;
        expect(getRandomItem(list)).toBe(null);
    });
});
