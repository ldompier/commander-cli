const { v4: uuidv4 } = require('uuid');
const { Command } = require('commander');
const program = new Command();

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.command('uppercase')
  .description('Convert a string to uppercase')
  .argument('<string>', 'string to convert')
  .action((str) => {
    console.log(str.toUpperCase());
  });

program.command('lowercase')
  .description('Convert a string to lowercase')
  .argument('<string>', 'string to convert')
  .action((str) => {
    console.log(str.toLowerCase());
  });

  program.command('guid')
  .description('Generate a GUID')
  .action(() => {
    console.log(uuidv4());
  });

program.parse();
