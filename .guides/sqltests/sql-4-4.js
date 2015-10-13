var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Delete the entire liabilities table",
    "show columns from bank.liabilities"
  ]
];

sqltest.init(tasks, "bank");