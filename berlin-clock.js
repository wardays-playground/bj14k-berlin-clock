const sec = document.getElementById('seconds').getElementsByClassName('second').item(0);
const min = document.getElementById('minutes').getElementsByClassName('element');
const lust = document.getElementById('lustrum').getElementsByClassName('element');
const hours = document.getElementById('hours').getElementsByClassName('element');
const fiveHours = document.getElementById('five-hours').getElementsByClassName('element');

const arrMin = [].slice.call(min);
const arrLust = [].slice.call(lust);
const arrHours = [].slice.call(hours);
const arrFiveHours = [].slice.call(fiveHours);

const addOrRemoveClass = (element, index, numberOfCells, color) => {
    if (index < numberOfCells) {
        element.classList.add(color);
    } else {
        element.classList.remove(color);
    }
}

const getFiveTicks = (interval, element, max, color) => {
    const numberOfCells = Math.floor(interval / 5);
    if (numberOfCells < max) {
        element.forEach((e, i) => addOrRemoveClass(e, i, numberOfCells, color));
    }
}

const getOneTick = (interval, element, max, color) => {
    const numberOfCells = interval % 5;
    if (numberOfCells < max) {
        element.forEach((e, i) => addOrRemoveClass(e, i, numberOfCells, color));
    }
}

const initializer = (date) => {
    getFiveTicks(date.getHours(), arrFiveHours, 5, 'red');
    getOneTick(date.getHours(), arrHours, 5, 'red');
    getFiveTicks(date.getMinutes(), arrLust, 12, 'yellow');
    getOneTick(date.getMinutes(), arrMin, 5, 'yellow');
}

initializer(new Date());

setInterval(() => {
    sec.classList.toggle('yellow');
    initializer(new Date());
}, 1000);
