const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear();

createFile(argv.base, argv.limit, argv.list)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));