
const fs = require('fs');
const colors = require('colors');

const createFile = async (base = 1, limit = 10, list = false) => {
  try {
    let out = '';

    for (let index = 1; index <= limit; index++) {
      out += `${base} x ${index} = ${base * index} \n`;
    }

    // fs.writeFile('5-multiplication-table.txt', out, (err) => {
    //   if (err) throw err;
    //   console.log('The file has been saved!');
    // });

    if (list) {
      console.log('=========================='.green);
      console.log('     ', colors.blue(base), 'times table'.green);
      console.log('=========================='.green);
      console.log();
      console.log(out);
    }

    fs.writeFileSync(`./output/${base}-mtab.txt`, out);
    return 'The file has been saved!'.rainbow;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile
}