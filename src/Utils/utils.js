export const animals = [
  "elephant",
  "rabbit",
  "hamster",
  "turtle",
  "cat",
  "chick",
  "buttefly",
];
export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}