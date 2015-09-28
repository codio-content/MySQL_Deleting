var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Remove the property_id column from the clients table",
    "SELECT property_id FROM RE.clients"
  ]
];

sqltest.init(tasks, "RE");