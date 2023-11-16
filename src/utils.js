import dayjs from 'dayjs';

const DATE_FORMAT = 'D MMMM';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const humanizeDate = (date) => date ? dayjs(date).format(DATE_FORMAT) : '';

export {getRandomArrayElement, humanizeDate};
