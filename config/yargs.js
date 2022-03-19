const argv = require('yargs')
  .options({
    'b': {
      alias: 'base',
      type: 'number',
      demandOption: true,
      description: 'Base of the multiplication table'
    },
    'l': {
      alias: 'list',
      type: 'boolean',
      description: 'Show the multiplication table',
      default: false
    },
    'u': {
      alias: 'limit',
      type: 'number',
      description: 'Upper limit',
      default: 10
    }
  }
  )
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw 'The base (b) has to be a number.';
    }
    if (isNaN(argv.limit)) {
      throw 'The upper limit (lm) has to be a number.';
    }
    return true;
  })
  .argv;

module.exports = argv;