const sec = document.getElementById('seconds').getElementsByClassName('second').item(0);
const min = document.getElementById('minutes').getElementsByClassName('element');
const lust = document.getElementById('lustrum').getElementsByClassName('element');
const hours = document.getElementById('hours').getElementsByClassName('element');
const fiveHours = document.getElementById('five-hours').getElementsByClassName('element');

const arrMin = [].slice.call(min);
const arrLust = [].slice.call(lust);
const arrHours = [].slice.call(hours);
const arrFiveHours = [].slice.call(fiveHours);

const getFiveTicks = (date, element, max, color) => {
    date ? date = date : date = 0;
    if (date % 5 === 0) {
        date = date / 5;
    } else {
        let rest = date.toString().substr(1, 1) === '' ? date : date.toString().substr(1, 1);
        rest > 5 ? rest = rest - 5 : rest;
        date = (date - rest) / 5;
    }
    if (date < max) {
        element.forEach((e, i) => {
            if (i < date) {
                e.classList.add(color);
            } else {
                e.classList.remove(color);
            }
        });
    }
}

const getOneTick = (date, element, max, color) => {
    date ? date = date : date = 0;
    date > 10 ? date = date.toString().substr(1, 1) : date;
    date > 5 ? date = date - 5 : date = date;
    if (date < max) {
        element.forEach((e, i) => {
            if (i < date) {
                e.classList.add(color);
            } else {
                e.classList.remove(color);
            }
        });
    }
}

const initializer = (date) => {
    getOneTick(date.getMinutes(), arrMin, 5, 'yellow');
    getFiveTicks(date.getMinutes(), arrLust, 12, 'yellow');
    getOneTick(date.getHours(), arrHours, 5, 'red');
    getFiveTicks(date.getHours(), arrFiveHours, 5, 'red');
}

let date = new Date();
initializer(date);

setInterval(() => {
    sec.classList.toggle('yellow');
    date = new Date();
    initializer(date);
}, 1000);
