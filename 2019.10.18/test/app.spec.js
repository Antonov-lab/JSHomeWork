describe("Search", function () {
    let db = [
        {
            "id": 1
        },
        {
            "id": 2
        },
        {
            "id": 3
        },
        {
            "id": 4
        },
        {
            "id": 5
        }
    ];

    it("should return array(length = 2) for correct input and pageSize = 2", function () {
        expect(search(db, 1, 2)).toBeInstanceOf(Array);
        expect(search(db, 1, 2).length).toBeGreaterThan(0);
        expect(search(db, 1, 2).length).toBeLessThan(3);
    });

    it("should return empty array, because input items[] is empty", function () {
        let emptyDb = [];
        expect(search(emptyDb, 1, 2)).toEqual([]);
    });

    it("should return empty array, because pageSize is negative", function () {
        expect(search(db, 1, -1)).toEqual([]);
    });

    it("should return empty array, because output array is empty", function () {
        expect(search(db, 5, 2)).toEqual([]);
    });
});

describe("createdAtSort", function () {
    let db = [
        {
            "createdAt": "2014-12-02T11:10:49Z"
        },
        {
            "createdAt": "2012-05-20T00:15:15Z"
        },
        {
            "createdAt": "2016-06-23T01:05:33Z"
        },
        {
            "createdAt": "2015-04-19T18:04:21Z"
        },
        {
            "createdAt": "2018-05-03T04:11:57Z"
        }
    ].map(function (e) {
        return {
            createdAt: new Date(e.createdAt)
        }
    });

    it('should return first element of sorted array - latest date', function () {
        expect(createdAtSort(db)[0].createdAt).toEqual(new Date('2012-05-20T00:15:15Z'));
    });

    it('should return last element of sorted array - early date', function () {
        expect(createdAtSort(db)[4].createdAt).toEqual(new Date('2018-05-03T04:11:57Z'));
    });
});

describe("tagsFilter", function () {
    let db = [
        {
            "tags": "com"
        },
        {
            "tags": "com"
        },
        {
            "tags": "ru"
        },
        {
            "tags": "ru"
        },
        {
            "tags": "ru"
        },
    ];

    it("should return filtered array(length = 2) with 'com' items", function () {
        expect(tagsFilter(db).length).toBeGreaterThan(0);
        expect(tagsFilter(db).length).toBeLessThan(3);

        expect(tagsFilter(db).every(elem => elem.tags === 'com')).toBeTrue();
    });
});
