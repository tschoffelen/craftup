module.exports = (program) => {
  program
    .command('init <name>')
    .description('Create a new project')
    .action((name) => require('./init')(name))

  program
    .command('start')
    .description('Run project locally')
    .action(() => require('./start')())

  program
    .command('clean')
    .description('Clean up local environment')
    .action(() => require('./clean')())

  program
    .command('composer <package>')
    .description('Install a Composer package')
    .action((pkg) => require('./composer')(pkg))
}