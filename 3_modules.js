
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter'

const sayHi = (name) => {
    console.log(`hello there ${name}`)

}

sayHi('susan')
sayHi(john)
sayHi(peter)


const names = require('./4_names');
const sayHi = require('./5_utils');
const data = require('./6_alternative_flavor')
require('./7_mind_grenade')

console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

