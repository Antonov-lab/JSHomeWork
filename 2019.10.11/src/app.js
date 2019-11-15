function yesOrNo(value) {
    if (typeof (value) !== "boolean") {
        return null;
    }

    return (value === true) ? "Yes" : "No";
}

function counter(total) {
    if (Number.isInteger(total) && total > 0) {
        return (total > 9) ? "9+" : total;
    }

    return null;
}

function calculateAge(date) {
    if (!isValidDate(date)) {
        return null;
    }

    let diffMs = Date.now() - date.getTime();

    if (diffMs < 0){
        return null;
    }

    let ageDt = new Date(diffMs);
    let result = ageDt.getUTCFullYear() - 1970;

    return result;
}

function isValidDate(date) {
    return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
}

function getRandomItem(list) {
    if (Array.isArray(list) && list.length > 0) {
        return list[Math.floor(Math.random() * list.length)];
    }

    return null;
}
