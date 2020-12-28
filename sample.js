const alasql = require('alasql')
const data = [
  {a: 1, b: 10},
  {a: 2, b: 9},
  {a: 3, b: 8},
  {a: 4, b: 7},
]

//const res = alasql('SELECT a, b FROM ? WHERE a > 2 AND b > 7', [data]) // AND
const res = alasql('SELECT a, b FROM ? WHERE a > 3 OR b > 9', [data]) // OR
//const res = alasql('SELECT * FROM ? WHERE a > 2 AND b > 7', [data])
//const res = alasql('SELECT * FROM ? WHERE a > 2', [data])
console.log(`${JSON.stringify(res)}`)

