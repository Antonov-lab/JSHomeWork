function yesOrNo(value) {
    if (value === null || value === undefined) {
        return null;
    }

    let result = Boolean(value) === true ? "Yes" : "No";
    return result;
}

function counter(total) {
    if (total === null || total === undefined) {
        return null;
    }

    if (!Number(total)) {
        return "Incorrect input data";
    } else if (Number(total) > 9) {
        return "9+";
    }

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
    if (list === null || list === undefined || list.length === 0) {
        return null;
    }

    let result = list[Math.floor(Math.random() * list.length)];
    return result;
}
