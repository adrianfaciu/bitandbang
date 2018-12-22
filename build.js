'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Adrian Faciu'),
  handle: chalk.white('adrianfaciu'),
  work: chalk.white('Writing code ') + chalk.red('@Visma'),

  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('adrianfaciu'),
  github: chalk.gray('https://github.com/') + chalk.cyan('adrianfaciu'),
  stackoverflow: chalk.gray('https://stackoverflow.com/users/225780/') + chalk.green('adrian-fâciu'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.cyan('adrianfaciu'),
  blog: chalk.gray('https://medium.com/') + chalk.green('@adrianfaciu'),
  npx: chalk.red('npx') + ' ' + chalk.white('adrianfaciu'),

  labelWork: chalk.white.bold('         Work:'),
  labelTwitter: chalk.white.bold('      Twitter:'),
  labelGitHub: chalk.white.bold('       GitHub:'),
  labelStackoverflow: chalk.white.bold('StackOverflow:'),
  labelLinkedIn: chalk.white.bold('     LinkedIn:'),
  labelBlog: chalk.white.bold('         Blog:'),
  labelCard: chalk.white.bold('         Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const bloging = `${data.labelBlog}  ${data.blog}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const stackOverflow = `${data.labelStackoverflow}  ${data.stackoverflow}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               bloging + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               stackOverflow + newline +  // data.labelWeb + data.web
               linkedining + newline + newline +// data.labelLinkedIn + data.linkedin
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
