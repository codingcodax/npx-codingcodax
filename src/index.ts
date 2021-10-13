#!/usr/bin/env node
import chalk from 'chalk';
import boxen from 'boxen';
import inquirer from 'inquirer';
import clear from 'clear';

import data from './data';
import questions from './questions';

clear();

const prompt = inquirer.createPromptModule();

const me = boxen(
  [
    `${data.name}`,
    `${data.work}`,
    ``,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic('I am currently looking for new opportunities,')}`,
    `${chalk.italic('my inbox is always open. Whether you have a')}`,
    `${chalk.italic('question or just want to say hi, I will try ')}`,
    `${chalk.italic('my best to get back to you!')}`,
  ].join('\n'),
  {
    margin: 1,
    float: 'center',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'green',
  }
);

console.log(me);

const tip = [
  `Tip: Try ${chalk.cyanBright.bold('cmd/ctrl + click')} on the links above`,
  '',
].join('\n');
console.log(tip);

prompt(questions).then((answer) => answer.action());
