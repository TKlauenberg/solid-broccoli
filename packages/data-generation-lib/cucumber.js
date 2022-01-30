const base = [
  '../../features/**/*.feature.md',
  '--publish-quiet',
  `--format '@serenity-js/cucumber'`,
  '--require features/stepdefs/**/*.js',
].join(' ');

const generate = [base, `--format snippets:new.ts`];

module.exports = {
  default: base,
  generate: generate,
};
