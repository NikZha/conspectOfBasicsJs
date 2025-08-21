/**
 * Task 1:
 */




/**
 * Task 2:
 */

function getWeekDay(date) {
    let weekDay = date.getDay()
    switch (weekDay) {
        case 0:
            return "ВС"

        case 1:
            return "ПН"
        case 2:
            return "ВТ"
        case 3:
            return "СР"
        case 4:
            return "ЧТ"
        case 5:
            return "ПТ"
        case 6:
            return "СБ"
        default:
            return "НЕТ ДНЯ НЕДЕЛИ"
    }
}

/**
 * Task 3:
 */

function getLocalDay(date) {
    if (date.getDay() === 0) return 7
    return date.getDay()
}


/**
 * Task 4
 */

function getDateAgo(date, days) {
    return (new Date(date.getTime() - days * 8_640_000_0).getDate())
}


/**
 * Task 5
 */

function getLastDayOfMonth(year, month) {
    let datePlusMounth = new Date(year, month + 1);
    return new Date(datePlusMounth.getTime() - 8_640_000_0).getDate()
}

/**
 * Task 6
 */

function getSecondsToday() {
    let now = new Date()
    return (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds())
}



/**
 * Tast 7
 */
function getSecondsToTomorrow() {
    let now = new Date()
    let tomorrow = new Date().setHours(23, 59, 59, 59)
    return ((tomorrow - now.getTime()) / 1000 + 1)
}

/**
 * Task 8
 */

function formatDate(date) {
    let now = new Date().getTime()
    let befor = date.getTime();
    let diff = now - befor;
    if (diff < 1000) return `прямо сейчас`
    if (diff < 60000) return `${diff / 1000} сек. назад`
    if (diff < 3_600_000) return `${diff / 60000} мин. назад`
    let year = 0;
    if (date.getFullYear() > 1999) year = date.getFullYear() - 2000
    if (date.getFullYear() < 2000) year = date.getFullYear() - 1900
    let minutes = 0
    if (date.getMinutes() < 10) minutes = "0" + date.getMinutes();
    else minutes = date.getMinutes()
    let mounuths = date.getMonth() + 1;
    if (mounuths < 10) mounuths = '0' + (date.getMonth() + 1)
    let days = date.getDate()
    if (days < 10) days = '0' + days
    return `${days}.${mounuths}.${year} ${date.getHours()}:${minutes}`

}
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)))