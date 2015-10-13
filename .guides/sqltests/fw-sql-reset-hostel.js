var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "'Hostel' database",
    "DROP DATABASE IF EXISTS hostel"
  ],
  [
    "'Hostel' database",
    "CREATE DATABASE IF NOT EXISTS hostel"
  ]
];

sqltest.reset(tasks);