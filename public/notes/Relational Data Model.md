---
id: Relational Data Model
aliases:
  - Relational Data Model
tags: []
---

# Relational Data Model

- Degree = Number of attributes
- Because it is a **Set** 
  - Order does not matter in the tuple 
  - Every tuple must be unique 

declared like this: 
```pseudocode
student = {<Benjamin...>, <Tom>}
```
### Alternative Definition of a Tuple 
```pseudocode
{<(attribute, value)...>, }
```
```pseudocode
student = {<(Name, Benjamin)...>, }
```



## Cardinality
Total number of possible unique values in a domain: 
denoted with |dom(A)|

## Flat Relational Model 
- Each attribute is atomic 
If you want to represent composite data, use another table.  

## NULL values
Null values are ambiguous
1. Value Unknown 
2. Value exist but is not available 
3. Attribute does not apply to this tuple

## Integrity Constraints 
- Domain 
  - Null
- Referential Integrity constraint 
  - When you do want to delete, you can set the values to `NULL`. Restrict: reject the deletion. Cascade: attempt to cascade (or propagate) the deletion by deleting tuples that reference the tuple that is being deleted. 

### Key Constraints

- Super Key
  - The unique identifier 
  - May have extra attributes
    - Example: `SerialNo, Make` for a Car 

- Key 
  - Minimal Superkey of R
  - Does not have extra attributes

- Candidate Key 
  - Must be minimal key 

- Entity Integrity 
  - No primary key value can be `NULL` 

> NOTE: in pure mathematical relations, `NULL` can be a unique key 

