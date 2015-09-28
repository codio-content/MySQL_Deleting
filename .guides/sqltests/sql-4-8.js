var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Delete all the records from the catalog table but not the table itself",
    "SELECT * FROM RE.catalog"
  ]
];

sqltest.init(tasks, "RE");