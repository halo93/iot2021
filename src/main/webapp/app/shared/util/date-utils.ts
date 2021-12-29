import dayjs from 'dayjs';

import { APP_LOCAL_DATETIME_FORMAT } from 'app/config/constants';

export const convertDateTimeFromServer = date => (date ? dayjs(date).format(APP_LOCAL_DATETIME_FORMAT) : null);

export const convertDateTimeToServer = date => (date ? dayjs(date).toDate() : null);

export const displayDefaultDateTime = () => dayjs().startOf('day').format(APP_LOCAL_DATETIME_FORMAT);

export const isSummerTimeInEurope = () => {
  const currentDate = new Date();
  switch (currentDate.getMonth()) {
    case 10:
    case 11:
    case 0:
    case 1:
    case 2:
      return false;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      return true;
    default:
      return false;
  }
};
