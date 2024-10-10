---
id: ER Model
aliases:
  - ER Model
tags: []
---

# Entity-Relationship Model
[video](https://www.youtube.com/watch?v=xsg9BDiwiJE) 
![erModel](../Images/erModel.png) 

- Entity Type
  - Collection of set of entities that have the same attributes  

Relationship = Diamond   
Attributes = open circle

## Types of attributes
- Composite Attributes: Attributes that can be subdivided into smaller parts. 
- Atomic Attributes: Attributes that can not be divided into smaller parts. 
I like to think of these as a tree, with atomic being the leaves and composite being everything else. 
- Single vs Multivalued: can have more than one value, social security number vs multiple phone numbers.  
- Stored vs Derived: don't need to store it if you can compute it.
  - age is a good example
    - also you would need to update everyday if you have a lot of employees
![compositeAttributes](../Images/compositeAttributes.png) 

## Attribute Constraints 
- Uniqueness 
- Value sets (domain values)

## Relationship Degree 
- Unary (Recursive) 

## Binary Relationship Types 
Depends on direction of how you read it
- one to one 
- one to many 
- many to many 

## Participation Constraint 
double line means each must participate  
single line means that they may participate

## Weak Entity Types
- double rectangle   
Depends on existence of a strong entity  
in order to fill in the partial key, use the identifier diamond 
to connect back to identifier, must have double line  

## Style
Left to right reading, and up to down  
descriptors must make sense  


Arrow means 1, no arrow means many 

many to many? create a table 
