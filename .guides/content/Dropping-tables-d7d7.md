The `hotel` database has a `maintenance` table that is not required anymore. 

Confirm that the `maintenance` table exists by doing a `SHOW TABLES` in the `hotel` database:

```
+-----------------+
| Tables_in_hotel |
+-----------------+
| guests          |
| guests_test     |
| maintenance     |
| rooms           |
+-----------------+
4 rows in set (0.02 sec)
```

Let's `DROP` the `maintenance` table by executing:

```
mysql> DROP TABLE hotel.maintenance;
```

`SHOW TABLES` the `hotel` tables again to confirm that the `maintenance` table has been removed: 

```
+-----------------+
| Tables_in_hotel |
+-----------------+
| guests          |
| guests_test     |
| rooms           |
+-----------------+
3 rows in set (0.02 sec)
```