import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const array = [19, 20, 34];
  const newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    newArray[i] = new ClassRoom(array[i]);
  }
  return newArray;
}
