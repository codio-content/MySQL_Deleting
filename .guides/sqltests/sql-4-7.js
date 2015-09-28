var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Delete all the records from the payments table where paid equals 1",
    "SELECT * FROM RE.payments WHERE paid = 1"
  ]
];

sqltest.init(tasks, "RE");