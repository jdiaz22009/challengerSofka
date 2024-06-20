import {format, parse} from 'date-fns';

export const dateFormat =
  /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[0-2])[/](19|20)\d\d$/;

export const parsedate = (date: string): String => {
  const parseDate = parse(date, 'dd/MM/yyyy', new Date());
  return format(parseDate, 'yyyy-MM-dd');
};
