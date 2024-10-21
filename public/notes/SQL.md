---
id: SQL
aliases:
  - SQL
tags: []
---

# SQL
[video](https://www.youtube.com/watch?v=HXV3zeQKqGY) 

## Syntax 

### Referential Actions for Foreign Keys (ON DELETE, ON UPDATE)
[SQL 8 Documentation](https://dev.mysql.com/doc/refman/8.0/en/create-table-foreign-keys.html) 
When an `UPDATE` or `DELETE` operation affects a key value in the parent table that has matching rows in the child table, the result depends on the referential action specified by `ON UPDATE` and `ON DELETE` subclauses of the `FOREIGN KEY` clause. Referential actions include:

- **CASCADE**: 
  - Automatically deletes or updates the matching rows in the child table when the row from the parent table is deleted or updated.
  - Both `ON DELETE CASCADE` and `ON UPDATE CASCADE` are supported.
  - Be cautious not to define multiple `ON UPDATE CASCADE` clauses that act on the same column in the parent or child table.
  - If both tables in a foreign key relationship have `FOREIGN KEY` clauses, `ON DELETE CASCADE` or `ON UPDATE CASCADE` defined for one table must also be defined for the other to allow cascading operations.
  - **Note**: Cascaded foreign key actions do not activate triggers.

- **SET NULL**:
  - Automatically sets the foreign key column(s) in the child table to `NULL` when the corresponding row in the parent table is deleted or updated.
  - Both `ON DELETE SET NULL` and `ON UPDATE SET NULL` clauses are supported.
  - **Important**: Ensure that the foreign key columns in the child table are not defined as `NOT NULL`, as `SET NULL` requires the column to accept null values.

- **RESTRICT**:
  - Rejects the delete or update operation in the parent table if there are matching rows in the child table.
  - Specifying `RESTRICT` (or omitting the `ON DELETE` or `ON UPDATE` clause) ensures that no changes are allowed if there is a dependency.

- **NO ACTION**:
  - Similar to `RESTRICT`, it prevents the deletion or update of a row in the parent table if there are matching rows in the child table. 
  - The difference between `NO ACTION` and `RESTRICT` lies in timing, as `NO ACTION` allows for deferred constraint checks in certain systems (i.e., checking constraints at the end of a transaction rather than immediately).

- **SET DEFAULT**:
  - Sets the foreign key column in the child table to its default value when the parent row is deleted or updated, provided the column has a default value.

