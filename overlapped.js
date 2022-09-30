// Non overlap dates
const dateList = [
  {
    init: new Date("08-16-2022 12:00:00"),
    end: new Date("08-16-2022 15:00:00"),
  },
  {
    init: new Date("08-16-2022 16:00:00"),
    end: new Date("08-16-2022 18:00:00"),
  },
  {
    init: new Date("08-16-2022 21:00:00"),
    end: new Date("09-16-2022 02:00:00"),
  },
];

const overlapped = {
  init: new Date("08-16-2022 19:00:00"),
  end: new Date("08-16-2022 22:00:00"),
};

const nonOverlapped = {
  init: new Date("08-16-2022 19:00:00"),
  end: new Date("08-16-2022 20:00:00"),
};

const isOverlapped = (date, listOfDates) => {
  const initOverlap = listOfDates.map((item) => date.init <= item.end);
  const endOverlap = listOfDates.map((item) => date.end >= item.init);
  const crossed = initOverlap
    .map((item, i) => item && endOverlap[i])
    .some((i) => i);
  return crossed;
};

console.log("Non overlapped: ", isOverlapped(nonOverlapped, dateList)); // should be false
console.log("Overlapped: ", isOverlapped(overlapped, dateList)); // should be true

/**
 * Vague Javascript implementation of an algorithm to detect
 * if two (or more) date ranges are overlapped
 *
 * You can try passing other dates to the function or with
 * other dateList
 */
