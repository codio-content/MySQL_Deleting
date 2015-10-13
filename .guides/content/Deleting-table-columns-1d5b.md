The `hotel.rooms` table has a `beds` column that needs to be removed. 

First, do a `SELECT * FROM hotel.rooms;` to display the table records and columns: 

```
+----+-------------+------+
| id | room_number | beds |
+----+-------------+------+
|  1 |         105 |    2 |
|  2 |          50 |    1 |
|  3 |         108 |    2 |
+----+-------------+------+
3 rows in set (0.00 sec)
```

Remove the `beds` column entirely by executing: 

```
mysql> ALTER TABLE hotel.rooms DROP beds;
```

This time confirm that the `beds` column has been removed by doing a `SHOW COLUMNS FROM hotel.rooms;`

--- 
Complete a challenge on deleting table columns.