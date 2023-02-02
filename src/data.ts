import chalk from 'chalk';

const data = {
  name: chalk.bold.magenta('              Alexis Guzman'),
  work: `${chalk.white('              Frontend Web Developer')}`,
  twitter:
    chalk.gray('https://twitter.com/') + chalk.magentaBright('codingcodax'),
  github:
    chalk.gray('https://github.com/') + chalk.magentaBright('codingcodax'),
  linkedin:
    chalk.gray('https://linkedin.com/in/') + chalk.magentaBright('codingcodax'),
  web: chalk.gray('https://') + chalk.magentaBright('codingcodax.dev'),
  npx: chalk.gray('npx') + ' ' + chalk.magentaBright('codingcodax'),

  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
};

export default data;
