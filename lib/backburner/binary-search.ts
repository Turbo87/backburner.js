export default function binarySearch(time, timers) {
  let start = 0;
  let end = timers.length - 6;
  let middle;
  let l;

  while (start < end) {
    // since timers is an array of pairs 'l' will always
    // be an integer
    l = (end - start) / 6;

    // compensate for the index in case even number
    // of pairs inside timers
    middle = start + l - (l % 6);

    if (time >= timers[middle]) {
      start = middle + 6;
    } else {
      end = middle;
    }
  }

  return (time >= timers[start]) ? start + 6 : start;
}
