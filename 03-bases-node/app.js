const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');


const argv = require('yargs')
                .options('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                })
                .check((argv, options) => {
                    if( isNaN(argv.b) ) {
                        throw ('La base tiene que ser un número');
                    }
                    return true;
                })
                .argv;


console.clear();

console.log(argv);

console.log('base: yargs', argv.base);

// const [,,arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

// console.log(base)

// const base = 5;

// crearArchivo(argv.b)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));