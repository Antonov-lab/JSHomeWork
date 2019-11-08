describe("App", function () {
    // db в данном случае должна быть заглушкой, а не частью реальных данных, чтобы ты мог проверить что например во второй записи содержится такая-то дата
    let db = [
        {
            "id": 1,
            "name": "Item1",
            "content": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
            "tags": "com",
            "createdAt": "2014-12-02T11:10:49Z"
        },
        {
            "id": 2,
            "name": "Item2",
            "content": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
            "tags": "net",
            "createdAt": "2012-05-20T00:15:15Z"
        },
        {
            "id": 3,
            "name": "Item3",
            "content": "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
            "tags": "com",
            "createdAt": "2016-06-23T01:05:33Z"
        },
        {
            "id": 4,
            "name": "Item4",
            "content": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
            "tags": "net",
            "createdAt": "2015-04-19T18:04:21Z"
        },
        {
            "id": 5,
            "name": "Item5",
            "content": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
            "tags": "net",
            "createdAt": "2018-05-03T04:11:57Z"
        }
    ];

    it("should return array with length = 2", function () {
        // у тебя здесь функции фильтра и сортировки никогда не должны были быть
        expect(search(db, 1, 2, createdAtSort, tagsFilter).length).toBeGreaterThan(0);
        expect(search(db, 1, 2, createdAtSort, tagsFilter).length).toBeLessThan(3);
    });

    it("should return not empty array", function () {
        expect(search(db, 1, 2, createdAtSort, tagsFilter)).toBeInstanceOf(Array);
        expect(search(db, 1, 2, createdAtSort, tagsFilter).length).toBeGreaterThan(0);
    });

    it("should return 'Incorrect input data', because items[] is empty", function () {
        let emptyDb = [];
        expect(search(emptyDb, 1, 2, createdAtSort, tagsFilter)).toBe("Incorrect input data");
    });

    it("should return 'Incorrect input data', because pageSize is negative", function () {
        expect(search(db, 1, -1, createdAtSort, tagsFilter)).toBe("Incorrect input data");
    });

    it("should return 'Empty result', because resultant array is empty", function () {
        expect(search(db, 5, 2, createdAtSort, tagsFilter)).toBe("Empty result");
    });
});
