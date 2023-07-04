export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  return [...set]
    .filter((item) => item.startsWith(startString))
    .map((elem) => elem.slice(startString.length))
    .join('-');
}
