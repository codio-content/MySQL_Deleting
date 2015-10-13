Just as with the `UPDATE` statement, the `WHERE` clause has a very important role inside the `DELETE` SQL statement. 

The `WHERE` clause is responsible of specifying the rows to be removed definitively. 

We've created a `guests_test` table inside the `hotel` database.

First, do a `SELECT * FROM hotel.guests_test;` to display the data and perform a `DELETE FROM hotel.guests_test;` statement afterwards (notice that `WHERE` is missing).

You should see this if you execute a `SELECT * FROM hotel.guests_test;` statement again:

```
Empty set (0.01 sec)
```

|||info
### What if my intention is to delete the table records and not the table itself?

Good question! 

SQL `TRUNCATE TABLE` statement lets you do just that and we will cover it in future sections. 

Ommitting `WHERE` however, it's not considered a good practice nor a convention.

|||

All right! Complete your first challenge in the next section!