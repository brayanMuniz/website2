---
id: Functional Dependency in DBMS
aliases:
  - Functional Dependency in DBMS
tags: []
---

# Functional Dependency in [DBMS](notes/DBMS.md)
> Way to help you find the types of keys in a [Relational Data Model](notes/Relational%20Data%20Model.md), and then from that you are able to do [Database Normalization](notes/Database%20Normalization.md). Use [Inference Rules](notes/Inference%20Rules.md) in order to break down the Functional dependencies.   

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

## Closure Set
[Jenny Lecture](https://youtu.be/AGFUfLPFJ7w?si=Ku-KnpHnuao03aQA) 
> The closure set is the total things that you can data mine using the [Functional Dependency in DBMS](notes/Functional%20Dependency%20in%20DBMS.md).  
> This helps with getting the types of ***Keys***.   

Abstractly it looks like this:
$$
X^{+} \to \text{Attribute Closure}
$$

### An example 
Given $R(A, B, C, D, E)$  
and the functional dependencies: $\text{FD: } \{A \to B, B \to C, C \to D, D \to E \}$

We can see that $A^{+}$ can data mine everything using the *transitive* property, so its closure is:
$\{ABCDE\}$  
$B^{+}$ can only data mine up to $\{BCDE\}$  
... And so on for $C, D \text{and } E$

---
#### Combine attributes
If you wanted to find the closure for something like $AD^{+}$, well you know that $A$ is the *parent* key(not an actual thing this is just the way I think about it), so you can still get $\{ABCDE\}$  

> Look at [Inference Rules](notes/Inference%20Rules.md) if you are confused by this.  

Notice here that anything used with $A$ is a **super key**, since it can data mine **all** the attributes. 
> Also note here that the only ***candidate key*** is $A^{+}$, since all the other super keys will create super keys 

What about $BC^{+}$? , well there is no way you can data mine $A$, so you can only get $\{BCDE\}$  
and so on... 

### Finding all the candidate keys in a relation 
[video](https://youtu.be/L0LEtrIDYrE?si=mQT3NfHdgh6IbUkI) 
> Shortcut: use the given functional dependencies in order to decrease the super key and find a valid candidate key 

Given $R(A, B, C, D)$  
and the functional dependencies: $\text{FD: } \{A \to B, B \to C, C \to A \}$

We can see that $\{ABCD \}$ is a **super key** .  
Note that because $\{A \to B, B \to C \}$ we can get $A \to C$  
From here, we can remove $B$ and $C$ from our **super key** , so now we have $\{AD\}$  
So is $\{AD\}$ a **candidate key**? Yes!
If you decompose $\{AD\}$, you can not get another **super key**.  

#### Prime Attributes 
> The attributes that are part of the candidate key
> If the prime attribute is in the **right side** of the functional dependency, then there might be another candidate key, replace it with the one on the left  

Current list of prime attributes consist of: $\{AD\}$

Going from our previous example, is $\{AD\}$ the only candidate key? 
No, because we have $A$ on the right side, of $C \to A$
This means that we might have another candidate key: $CD$
If you get the **attribute closure** of this you will **not** get a **super key**, so this is another candidate key.  

Current list of prime attributes consist of: $\{ADC\}$

Working with: $CD$
Notice again that $C$ is on the right side, $B \to C$  
So a candidate for our candidate key is $BD$  
Again, check the **attribute closure** and you will see that this is also a candidate key.  

Current list of prime attributes consist of: $\{ADCB\}$

Notice that you will go back to the original $AD$, when you replace $A$ with $B$, from here you are done.  
> [!IMPORTANT]
> Sometimes norm according to boyce-codd may lose some FD's in this case we should reject the norm process
