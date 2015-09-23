What if we want to __delete the data inside the table but not the table itself?__

The SQL `TRUNCATE TABLE` statement is designed to accomplish this. 

The `hotel` database performance team has decided to remove the data from the `hotel.inventory` table but keep the table for future inventory updates.

Execute a `SELECT * FROM hotel.inventory` to confirm that the data is there:

```
+----+---------------+
| id | serial_number |
+----+---------------+
|  1 |          7551 |
|  2 |          6551 |
|  3 |          5261 |
+----+---------------+
3 rows in set (0.01 sec)
```

Remove the table data entirely by executing: 

```
mysql> TRUNCATE TABLE hotel.inventory;
``` 

This time, the `SHOW TABLES;` statement (remember that the `hotel` database must be in `USE`) displays the `inventory` table. However if we do a `SELECT * FROM hotel.inventory;` again:

```
Empty set (0.00 sec)
```

Complete a challenge on _truncating_ database tables in the next section.