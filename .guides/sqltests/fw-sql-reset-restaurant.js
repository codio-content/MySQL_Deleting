var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "'restaurant' database",
    "DROP DATABASE IF EXISTS restaurant"
  ],
  [
    "'restaurant' database",
    "CREATE DATABASE IF NOT EXISTS restaurant"
  ]
];

sqltest.reset(tasks);