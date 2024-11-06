---
id: Anomalies in Relational Model
aliases:
  - Anomalies in Relational Model
tags: []
---

# Anomalies in Relational Model
Poor database design leads to 3 types of anomalies.   
- Insertion Anomalies
  - You **Must** fill out all the data in order for you to insert a row, even though you don't have to.  Or you cant add something because you need the primary key to be there first.  
- Deletion Anomalies
  - Deleting rows may lead to loss of data.  
- Update Anomalies.
  - To stay consistent, having to update one rows **requires** that you update other rows.  

Use [Database Normalization](notes/Database%20Normalization.md) to fix this.  

## An Example 
| Customer       | Purchase date | Product name   | Amount | Price | Total price |
|----------------|---------------|----------------|--------|-------|-------------|
| Joe Smith      | 2014-02-14    | Yoga mat       | 1      | 80    | 80          |
| Jane Bauer     | 2014-02-16    | Yoga block     | 2      | 30    | 60          |
| Joe Smith      | 2014-02-14    | Yoga block     | 2      | 30    | 60          |
| Joe Smith      | 2014-02-14    | Yoga strap     | 1      | 10    | 10          |
| Thomas Apple   | 2014-02-18    | Dumbbells 2kg  | 2      | 30    | 60          |
| Jane Bauer     | 2014-02-16    | Yoga mat       | 1      | 80    | 80          |
> Imagine this way the only table we used to hold *all* of the data.  

### Insert
If we wanted to **Insert** a new *Customer*, they **must** make a purchase.  
Similarly, if we wanted to add a `Proudct name` it must be purchased by a customer.  

### Delete 
If we wanted to delete rows 1, 3 and 4, we would lose the fact that **Joe Smith** is a customer.  

### Update 
If we wanted to update **Joe Smith**, we would have to update rows 1, 3 and 4.  


