var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Delete all the records from the users table",
    "SELECT * FROM bank.users"
  ]
];

sqltest.init(tasks, "bank");