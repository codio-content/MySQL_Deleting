var sqltest = require("./fw-sqltests.js");

var tasks = [
  [
    "Delete all the records from the users table",
    "SELECT * FROM bank.users"
  ]
];

sqltest.init(tasks, "bank");