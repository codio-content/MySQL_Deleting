It's time to cover the last SQL keyword that conforms the _CRUD_ acronym: `DELETE`

Just as the `UPDATE` SQL keyword works together with the `WHERE` clause, the `DELETE` keyword works by specifying: 

- The table name
- The column names and the values to be deleted

```
DELETE FROM table_name WHERE column_name = “Value”;
```

The `WHERE` clause allows us to use conditional operators in order to be more precise with our data. 

|||warning
### Be careful with omitting the `WHERE` clause in a `DELETE` statement

Unless you do it on purpose, all your data will be deleted if you forget to add the `WHERE` clause. 

In order to be more cautious when attempting to delete data from relational databases, we will cover SQL databases security and backup measures in future units.

|||