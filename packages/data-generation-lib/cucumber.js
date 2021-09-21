const base = [
  '../../features/**/*.feature.md',
  '--publish-quiet',
  `--format ${
    process.env.CI || !process.stdout.isTTY ? 'progress' : 'progress-bar'
  }`,
  '--require features/stepdefs/**/*.js',
].join(' ');

module.exports = {
  default: base
};
