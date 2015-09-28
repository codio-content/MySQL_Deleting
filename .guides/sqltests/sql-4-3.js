var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Remove the cc_num (credit card number) column from the users table",
    "SELECT cc_num FROM bank.users"
  ]
];

sqltest.init(tasks, "bank");