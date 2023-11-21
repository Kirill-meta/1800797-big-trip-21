import dayjs from 'dayjs';

const DATE_FORMAT = 'DD/MM/YY HH:mm';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const humanizeDate = (date) => date ? dayjs(date).format(DATE_FORMAT) : '';

const getDuration = (date1, date2) => {
  const hour = 3600000;
  const day = 86400000;
  const d1 = dayjs(date1);
  const d2 = dayjs(date2);
  const difference = d2.diff(d1);
  if (difference < hour) {
    return `${d2.diff(d1, 'minute')}M`;
  } else if (difference >= hour && difference < day) {
    console.log(dayjs(difference).format('HH:mm').split(':'));
    const [hours, minutes] = dayjs(difference).format('HH:mm').split(':')
    return `${hours}H ${minutes}M`;
  } else {
    return `${dayjs(difference).format('DD')}D ${dayjs(difference).format('HH')}H ${dayjs(difference).format('mm')}M`
  }
};



export {getRandomArrayElement, humanizeDate, getDuration};
