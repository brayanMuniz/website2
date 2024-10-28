---
id: Functional Dependency in DBMS
aliases:
  - Functional Dependency in DBMS
tags: []
---

# Functional Dependency in [DBMS](notes/DBMS.md)
> Functional Dependencies are a way to help you find the types of keys in a [Relational Data Model](notes/Relational%20Data%20Model.md), and then from that you are able to do [Database Normalization](notes/Database%20Normalization.md).  

[Lecture by Jenny](https://youtu.be/dR-jJimWWHA?si=4LRsFXGKkRIEO8K8)  

## Check if a functional dependency is valid
In order for it to be valid, it must only ***data mine*** one unique attribute, it can **not** have duplicates. 
Abstractly, this looks like 
$$
  X \rightarrow Y \newline
  \text{if } t_1 \cdot x = t_2 \cdot x \newline
  \text{then } t_1 \cdot y = t_2 \cdot y 
$$

$t_1$ and $t_2$ here are "selectors", what this means that if the $x$ values that you are choosing are the same, then the $y$ values **must** be the same.  

### Example 
Take this example where we have a student table: 

| Roll Number | Name |
| -------------- | --------------- |
|1|a|
|2|b|
|3|a|

Here we can see that Roll Number can data mine Name, but Name can **not** data mine Roll Number, since the first $a$ value does not match the second $a$ value.  

> Note: We can combine and data mine a *set* of attributes, so if we had more data in our student table, we could make $X$ be `(Roll Number, Name)` and that would try to data mine any other $Y$ that you would want.  

## [Inference Rules](notes/Inference%20Rules.md)

## Closure Set
[Jenny Lecture](https://youtu.be/AGFUfLPFJ7w?si=Ku-KnpHnuao03aQA) 







