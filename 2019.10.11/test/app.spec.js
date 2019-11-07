describe("App", function () {

    //yesOrNo(value)
    it("should return yes", function () {
        expect(yesOrNo("some data")).toBe("Yes");
    });

    it("should return no", function () {
        expect(yesOrNo(0)).toBe("No");
    });

    it("should return null", function () {
        let value;
        expect(yesOrNo(value)).toBe(null);
    });


    //counter(total)
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
    it("should return 50", function () {
        let date = new Date(1969, 7, 15);
        expect(calculateAge(date)).toBe(50);
    });

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
