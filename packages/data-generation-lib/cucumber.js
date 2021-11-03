const base = [
  '../../features/**/*.feature.md',
  '--publish-quiet',
  `--format '@serenity-js/cucumber'`,
  '--require features/stepdefs/**/*.js',
].join(' ');

module.exports = {
  default: base
};
