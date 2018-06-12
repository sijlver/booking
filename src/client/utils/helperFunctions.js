function checkStatusError(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function checkType(value) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

function changeFormatDate(date, dayDiff = 0) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate() + dayDiff;

    if (day < 10) {
        day = `0${day}`;
    }
    if (month < 10) {
        month = `0${month}`;
    }
    return `${year}-${month}-${day}`;
}

export { checkStatusError, changeFormatDate, checkType };
