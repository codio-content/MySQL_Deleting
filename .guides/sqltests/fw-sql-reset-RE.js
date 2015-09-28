var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "'RE' database",
    "DROP DATABASE IF EXISTS RE"
  ],
  [
    "'RE' database",
    "CREATE DATABASE IF NOT EXISTS RE"
  ],
  [
    "'RE' database",
    "CREATE TABLE RE.payments (id mediumint(8) unsigned NOT NULL auto_increment, paid TINYINT(1) UNSIGNED NOT NULL, PRIMARY KEY (id)) AUTO_INCREMENT=1"
  ],
  [
    "'RE' database",
    "INSERT INTO RE.payments (paid) VALUES (0),(0),(1),(0)"
  ],
  [
    "'RE' database",
    "CREATE TABLE RE.catalog (id mediumint(8) unsigned NOT NULL auto_increment, property_id mediumint(8) UNSIGNED NOT NULL, PRIMARY KEY (id)) AUTO_INCREMENT=1"
  ],
  [
    "'RE' database",
    "INSERT INTO RE.catalog (property_id) VALUES (234),(27),(89),(157)"
  ],
  [
    "'RE' database",
    "CREATE TABLE RE.clients (id mediumint(8) unsigned NOT NULL auto_increment, property_id mediumint(8) UNSIGNED NOT NULL, PRIMARY KEY (id)) AUTO_INCREMENT=1"
  ],
  [
    "'RE' database",
    "INSERT INTO RE.clients (property_id) VALUES (234),(27),(89),(157)"
  ],
];

sqltest.reset(tasks);