var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Truncate the assets table",
    "SELECT * FROM bank.assets"
  ]
];

sqltest.init(tasks, "bank");