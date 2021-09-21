function randomIntFromInterval(min:number, max:number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generate(pattern: string, symbols: string[]): string {
  return pattern.replace(/#/g, (_) => symbols[randomIntFromInterval(0,symbols.length-1)]);
}

console.log(generate('asdf###', ['x', 'y', 'z']));