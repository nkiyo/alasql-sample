const alasql = require('alasql')
let data = [
  {a: 1, b: 10},
  {a: 2, b: 9},
  {a: 3, b: 8},
  {a: 4, b: 7},
]

// https://www.w3schools.com/sql/sql_join.asp
const orders = [
  { id: 10308, customerId: 2,  orderedAt: "1996-09-18", items: 7 },
  { id: 10309, customerId: 3, orderedAt: "1996-09-19", items: 8 },
  { id: 10310, customerId: 1, orderedAt: "1996-09-20", items: 9 },
  { id: 10311, customerId: 1, orderedAt: "1996-09-21", items: 10 },
]

const customers = [
  { id: 1, name: "AAAA AAAA", country: "Germany" },
  { id: 2, name: "BBBB BBBB", country: "Mexico" },
  { id: 3, name: "CCCC CCCC", country: "Mexico" },
]

const res = alasql('SELECT customerId, Sum(items), Avg(items), Count(items) FROM ? AS orders INNER JOIN ? customers ON customerId = customers.id GROUP BY customerId HAVING Count(items) >= 2', [orders, customers]) // HAVING
//const res = alasql('SELECT a FROM ? WHERE a <= 2 EXCEPT SELECT a FROM ? WHERE a = 2', [data, data]) // INTERSECT
//const res = alasql('SELECT a FROM ? WHERE a <= 2 INTERSECT SELECT a FROM ? WHERE a >= 2', [data, data]) // INTERSECT
//const res = alasql('SELECT a FROM ? WHERE a = 2 UNION SELECT a FROM ? WHERE a = 3', [data, data]) // UNION
//alasql('UPDATE ? SET b = 99 WHERE a = 2', [data]) // UPDATE
//console.log(`${JSON.stringify(data, null, 2)}`)
//const res = alasql('SELECT customerId, Sum(items), Avg(items), Count(items) FROM ? AS orders INNER JOIN ? customers ON customerId = customers.id GROUP BY customerId', [orders, customers]) // GROUP BY, Sum, Avg, Count
//const res = alasql('SELECT * FROM ? AS orders INNER JOIN ? customers ON customerId = customers.id', [orders, customers]) // INNER JOIN
//const res = alasql('SELECT * FROM ? WHERE a > 1 ORDER BY a DESC', [data]) // ORDER BY
//const res = alasql('SELECT a, b FROM ? WHERE a > 2 AND b > 7', [data]) // AND
//const res = alasql('SELECT a, b FROM ? WHERE a > 3 OR b > 9', [data]) // OR
//const res = alasql('SELECT a, b FROM ? WHERE a IN (2, 4)', [data]) // IN
//const res = alasql('SELECT * FROM ? WHERE a > 2 AND b > 7', [data])
//const res = alasql('SELECT * FROM ? WHERE a > 2', [data])
console.log(`${JSON.stringify(res, null, 2)}`) // pritty-print https://stackoverflow.com/a/7220510

