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

const notOverlapped = {
  init: new Date("08-16-2022 18:00:00"),
  end: new Date("08-16-2022 21:00:00"),
};

const inside = {
  init: new Date("08-16-2022 16:30:00"),
  end: new Date("08-16-2022 18:00:00"),
}

const notInside = {
  init: new Date("08-16-2022 14:00:00"),
  end: new Date("08-16-2022 19:00:00"),
}  

// If it overlap one or more dates
const isOverlapped = (date, listOfDates) => {
  return listOfDates
    .map((item) => date.init < item.end === date.end > item.init)
    .some((i) => i);
};

// If it is inside another date
const isInside = (date, listOfDates) => {
  return listOfDates
    .map((item) => date.init >= item.init && date.end <= item.end)
    .some((i) => i);
}

console.time('nonOver')
console.log("Non overlapped: ", isOverlapped(notOverlapped, dateList)); // should be false
console.timeEnd('nonOver')
console.log('');

console.time('over')
console.log("Overlapped: ", isOverlapped(overlapped, dateList)); // should be true
console.timeEnd('over')
console.log('');

console.time('nonInside')
console.log("Non inside: ", isInside(notInside, dateList)); // should be false
console.timeEnd('nonInside')
console.log('');

console.time('inside')
console.log("Inside: ", isInside(inside, dateList)); // should be true
console.timeEnd('inside')

/**
 * Vague Javascript implementation of an algorithm to detect
 * if two (or more) date ranges are overlapped
 *
 * You can try passing other dates to the function or with
 * other dateList
 */
