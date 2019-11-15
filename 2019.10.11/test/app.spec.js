describe("yesOrNo", function () {
    it("should return 'Yes' for input data = true", function () {
        expect(yesOrNo(true)).toBe("Yes");
    });

    it("should return 'No' for input data = false", function () {
        expect(yesOrNo(false)).toBe("No");
    });

    it("should return null for incorrect input data", function () {
        let value = "true";
        expect(yesOrNo(value)).toBe(null);
    });
});

describe("counter", function () {
    it("should return 5 for input data = 5", function () {
        expect(counter(5)).toBe(5);
    });

    it("should return '9+' for input data = 10", function () {
        expect(counter(10)).toBe("9+");
    });

    it("should return null for incorrect input data", function () {
        let total;
        expect(counter(total)).toBe(null);
    });

});

describe("calculateAge", function () {
    it("should return 50 for 15.07.1969", function () {
        let date = new Date(1969, 7, 15);
        expect(calculateAge(date)).toBe(50);
    });

    it("should be null for date in the future", function () {
        let date = new Date(2039, 7, 15);
        expect(calculateAge(date)).toBe(null);
    });

    it("should return null for incorrect input data", function () {
        let date = "15.07.1969";
        expect(calculateAge(date)).toBe(null);
    });
});

describe("getRandomItem", function () {
    it('should return random item for not empty array', function () {
        let list = [1, 2];

        expect(getRandomItem(list)).toBeGreaterThan(0);
        expect(getRandomItem(list)).toBeLessThan(3);
    });

    it('should return null for empty array', function () {
        let list = [];
        expect(getRandomItem(list)).toBe(null);
    });

    it('should return null for incorrect input data', function () {
        let list;
        expect(getRandomItem(list)).toBe(null);
    });
});
