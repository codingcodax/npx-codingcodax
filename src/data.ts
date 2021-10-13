import chalk from 'chalk';

const data = {
  name: chalk.bold.magenta('              Alexis Guzman Ines'),
  // handle: chalk.white('@__codax__'),
  work: `${chalk.white('              Frontend Web Developer')}`,
  twitter:
    chalk.gray('https://twitter.com/') + chalk.magentaBright('__codax__'),
  github: chalk.gray('https://github.com/') + chalk.magentaBright('a12989x'),
  linkedin:
    chalk.gray('https://linkedin.com/in/') + chalk.magentaBright('codax'),
  web:
    chalk.gray('https://') + chalk.magentaBright('codaxx.ml') + chalk.gray('/'),
  npx: chalk.gray('npx') + ' ' + chalk.magentaBright('codax'),

  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
};

export default data;
