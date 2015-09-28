var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "Delete the records where user_id equals 414, from the u_accounts table",
    "SELECT * FROM bank.u_accounts WHERE user_id = 414"
  ]
];

sqltest.init(tasks, "bank");