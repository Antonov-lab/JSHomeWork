function yesOrNo(value) {
    // лучше через typeof boolean
    if (value === null || value === undefined) {
        return null;
    }

    // тогда это привидение типа не потребуется
    let result = Boolean(value) === true ? "Yes" : "No";
    return result;
}

function counter(total) {
    // надежнее Number.isInteger && Number >= 0
    if (total === null || total === undefined) {
        return null;
    }

    if (!Number(total)) {
        return "Incorrect input data"; // ужасно, почему вернулась строка? это throw Error, или хотя бы null (но лучше нет), если этот счётчик для DOM будет использоваться
    } else if (Number(total) > 9) {
        return "9+";
    }

    // некорректно понял задачу. Ты же видел как работают счетчики в ВК или скайпе, должно быть обычное число на выходе.
    // если кол-во входящих больше N, то пишут N+, зачем здесь прогрессия?
    let result = 0;
    for (let index = 1; index <= total; index++) {
        result += index;
    }

    return result;
}

/**
 *
 * @param {Date} date
 */
// вот ведь, скопипастил и исправил на некорретное форматирование, в js юзается camelCase
// при этом, загугли заодно как валидируют на Date тип, эта проверка не очень хорошая
// когда копипастишь пример, указывай исходник
function calculateAge(date) {
    if (date === null || date === undefined) {
        return null;
    }

    let diff_ms = Date.now() - date.getTime();
    let age_dt = new Date(diff_ms);
    let result = Math.abs(age_dt.getUTCFullYear() - 1970);

    return result;
}

/**
 *
 * @param {Array} list
 */
function getRandomItem(list) {
    // Array.isArray()
    if (list === null || list === undefined || list.length === 0) {
        return null;
    }

    let result = list[Math.floor(Math.random() * list.length)];
    return result;
}
