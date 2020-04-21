import { differenceInCalendarMonths } from 'date-fns';


export default function findIdadeHumana(birth) {
  const differentYear = differenceInCalendarMonths(new Date(), birth) / 12;
  const yearsOldHuman = 16 * Math.log(differentYear) + 31;
  return Math.trunc(yearsOldHuman);
}
