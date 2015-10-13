var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "'Bank' database",
    "DROP DATABASE IF EXISTS bank"
  ],
  [
    "'Bank' database",
    "CREATE DATABASE IF NOT EXISTS bank"
  ],
  [
    "'Bank' database",
    "CREATE TABLE bank.u_accounts (id mediumint(8) unsigned NOT NULL auto_increment,user_id mediumint default NULL,account_num varchar(34),cc_num varchar(16) default NULL,PRIMARY KEY (id)) AUTO_INCREMENT=1"
  ],
  [
    "'Bank' database",
    'INSERT INTO bank.u_accounts (user_id,account_num,cc_num) VALUES (734,"DE31030693573335825732","4932364013930786"),(213,"ME52719667250643201762","4504066913714636"),(609,"AT894344222676414837","4733176642982282"),(446,"LV34CMTY2825895812548","5190185056338082"),(528,"DK4972620928789047","4434476207895208"),(414,"KZ287666089696715630","4263385316682971"),(281,"AL23643833826897915601655291","4244625497143719"),(147,"GR2217183169343818686531815","4931146970391271"),(696,"DK4051474341652089","5117032087561672"),(882,"CY72844842612001026327917521","4599714141851290")'
  ],
  [
    "'Bank' database",
    "CREATE TABLE bank.users (id mediumint(8) unsigned NOT NULL auto_increment,name varchar(255) default NULL,created_at varchar(255),PRIMARY KEY (id)) AUTO_INCREMENT=1"
  ],
  [
    "'Bank' database",
    'INSERT INTO bank.users (name,created_at) VALUES ("Hyatt Mason","2015-09-17 01:33:50"),("Hyatt Monroe","2015-12-19 23:52:40"),("Phelan Rush","2015-01-03 17:16:25"),("Alyssa Steele","2016-03-12 17:53:39"),("Silas Baxter","2016-07-13 21:54:51"),("MacKensie Nolan","2016-04-04 22:37:31"),("Holmes Frazier","2015-11-23 12:10:23"),("Caldwell Hansen","2016-06-09 13:26:59"),("Deacon Hurst","2014-12-13 19:11:09"),("Thor Wagner","2016-03-16 03:48:15")'
  ],
  [
    "'Bank' database",
    'CREATE TABLE bank.liabilities (id mediumint(8) unsigned NOT NULL auto_increment, PRIMARY KEY (id)) AUTO_INCREMENT=1'
  ],
  [
    "'Bank' database",
    'CREATE TABLE bank.assets (id mediumint(8) unsigned NOT NULL auto_increment, PRIMARY KEY (id)) AUTO_INCREMENT=1'
  ],
  [
    "'Bank' database",
    "INSERT INTO bank.assets (id) VALUES (1)"
  ]
];

sqltest.reset(tasks);