/**
 * @function randomInRange, a function that generates random number between @param min and @param max
 * @param min , the minimum value
 * @param max , the maximum value
 * @returns
 */
function randomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { randomInRange };
