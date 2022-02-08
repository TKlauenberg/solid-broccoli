/**
 * Generate a random integer between two numbers.
 * @param {number} min - The minimum number in the range.
 * @param {number} max - number - The maximum number to be returned.
 * @return {number} A random integer between min and max.
 */
function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Given a pattern and a list of symbols, generate a string that matches the pattern.
 * @param {string} pattern - The pattern to be generated.
 * @param {string[]} symbols - an array of symbols to use in the pattern
 * @return {string} The string with the # replaced with a random symbol from the symbols array.
 */
export function generate(pattern: string, symbols: string[]): string {
  return pattern.replace(
    /#/g,
    () => symbols[randomIntFromInterval(0, symbols.length - 1)],
  );
}

console.log(generate('asdf###', ['x', 'y', 'z']));
