In the previous unit:

### We updated table names and columns

With the `ALTER TABLE` SQL statement, it is possible to change the name of a column or to update its data types

The `RENAME TABLE` statement renames the specified existing table.

### We updated table data

On the other hand, the `UPDATE` SQL keyword, part of the _CRUD_ acronym, allows us to manipulate the values of table fields.

Here's a reminder of how the syntax looks like: 

```
UPDATE table_name
SET column1=value1,column2=value2,...
WHERE some_column=some_value;
```

Remember that omitting the `WHERE` clause may lead to changing every value in the specified column. Proceed with caution.

### We used MySQL multi-line statements

If we decide not to close SQL statements with a semicolon in the first line of the `mysql` command line client, the `->` prompt allows us to keep inserting parts of the statement until we decide to add the trailing semicolon `;`