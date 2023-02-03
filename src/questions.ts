import chalk from 'chalk';
import open from 'open';

const questions = [
  {
    type: 'list',
    name: 'action',
    message: 'What you want to do?',
    choices: [
      {
        name: `Send me an ${chalk.underline.bold('email')}?`,
        value: () => {
          open('mailto:codingcodax@gmail.com');
          console.log('\nDone, see you soon at inbox.\n');
        },
      },
      {
        name: `See my ${chalk.underline.bold('Resume')}?`,
        value: () => {
          open('https://read.cv/codingcodax');
          console.log('\nDone, I hope you have fun\n');
        },
      },
      {
        name: 'Just quit.',
        value: () => {
          console.log('Bye bye!.\n');
        },
      },
    ],
  },
];

export default questions;
