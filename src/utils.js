import dayjs from 'dayjs';

const DATE_FORMAT = 'DD/MM/YY HH:mm';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const humanizeDate = (date) => date ? dayjs(date).format(DATE_FORMAT) : '';

const getDuration = (date1, date2) => {
  const HOURS_PER_DAY = 24
  const MINUTES_PER_HOUR = 60
  const MINUTES_PER_DAY = 60 * HOURS_PER_DAY
  const DurationUnits = {
    MINUTE: 'minute',
    HOUR: 'hour',
    DAY: 'day'
  }

  const d1 = dayjs(date1)
  const d2 = dayjs(date2)
  const differenceMinutes = d2.diff(d1, DurationUnits.MINUTE);
  const differenceHours = d2.diff(d1, DurationUnits.HOUR);
  const differenceDays = d2.diff(d1, DurationUnits.DAY);

  switch (true) {
    case (differenceMinutes < MINUTES_PER_HOUR):
      return `${differenceMinutes}M`
    case (differenceMinutes >= MINUTES_PER_HOUR && differenceMinutes < MINUTES_PER_DAY):
      return `${differenceHours}H ${differenceMinutes - differenceHours * MINUTES_PER_HOUR}M`
    default:
      return `${differenceDays}D ${differenceHours - differenceDays * HOURS_PER_DAY}H ${differenceMinutes - differenceHours * MINUTES_PER_HOUR}M`
  }
  }



export {getRandomArrayElement, humanizeDate, getDuration};
