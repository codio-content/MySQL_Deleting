|||info
### Reset section database
If you make a mistake while editing the `bank` database in this set of challenges or just want to reset the database back to its original state, return to this page and click the “Reset Section Database” button below.

{Reset Section Database}(node .guides/sqltests/fw-sql-reset-bank.js)
|||
---

{Check It!|assessment}(test-1381903051)

|||guidance

### Correct answer:

`USE bank;`

`DELETE FROM u_accounts WHERE user_id = 414;`

|||