var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Drop the entire restaurant database",
    "SELECT * FROM restaurant"
  ]
];

sqltest.init(tasks, "restaurant");