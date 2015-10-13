var sqltest = require("./fw-sqltests.js");

/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
    "'Hotel' database",
    "DROP DATABASE IF EXISTS hotel"
  ],
  [
    "'Hotel' database",
    "CREATE DATABASE IF NOT EXISTS hotel"
  ],
  [
    "'Hotel' database",
    "CREATE TABLE hotel.guests (id mediumint(8) unsigned NOT NULL auto_increment,name varchar(255) default NULL,room mediumint default NULL,PRIMARY KEY (id)) AUTO_INCREMENT=1"
  ],
  [
    "'Hotel' database",
    'INSERT INTO hotel.guests (name,room) VALUES ("Mcpherson, Cailin C.",78),("Drake, Wade M.",81),("Randolph, Inga J.",11),("Villarreal, Channing D.",77),("Levine, Arden S.",58)'
  ],
  [
    "'Hotel' database",
    "CREATE TABLE hotel.guests_test (id mediumint(8) unsigned NOT NULL auto_increment,name varchar(255) default NULL,room mediumint default NULL,PRIMARY KEY (id)) AUTO_INCREMENT=1"
  ],
  [
    "'Hotel' database",
    'INSERT INTO hotel.guests_test (name,room)VALUES("Sargent, Kane G.",8),("Pierce, Maggie F.",50),("Harris, Daquan N.",1),("Pitts, Drake T.",132),("Huffman, Hayes Y.",135)'
  ],
  [
    "'Hotel' database",
    "CREATE TABLE hotel.rooms (id mediumint(8) unsigned NOT NULL auto_increment,room_number mediumint default NULL,beds mediumint default NULL,PRIMARY KEY (id)) AUTO_INCREMENT=1"
  ],
  [
    "'Hotel' database",
    "INSERT INTO hotel.rooms (room_number,beds) VALUES (105,2),(50,1),(108,2)"
  ],
  [
    "'Hotel' database",
    "CREATE TABLE hotel.maintenance (id mediumint)"
  ],
  [
    "'Hotel' database",
    "CREATE TABLE hotel.inventory (id mediumint(8) unsigned NOT NULL auto_increment,serial_number mediumint default NULL,PRIMARY KEY (id)) AUTO_INCREMENT=1"
  ],
  [
    "'Hotel' database",
    "INSERT INTO hotel.inventory (serial_number) VALUES (7551),(6551),(5261)"
  ]
];

sqltest.reset(tasks);