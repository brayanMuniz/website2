---
id: Scheme
aliases:
  - Scheme
tags: []
---

# Scheme
The Scheme language, a [Functional Programming Languages](./Functional%20Programming%20Languages.md), which is a dialect of [LISP](./LISP.md), was developed at MIT in the mid-1970s.  

- List Functions
  • The `CAR` function returns the first element of its list parameter.
  • The `CDR` function returns its parameter list minus its first element
  - The function `CONS` takes two parameters and returns a new list with its first parameter as the first element and its second parameter as the remainder of that list.
  - The `LIST` function takes any number of parameters and returns a new list with the parameters as its elements. 

Null list is only one place in memory, so if you declare two list defined by null, and check their eq, will return true.  

## Functions 
Recursively check each part of `a_list` and see if the `atm` is in there.  
```scheme
(DEFINE (member atm a_list)
  (COND
    ((NULL? a_list) #F)
    ((EQ? atm (CAR a_list)) #T)
    (ELSE (member atm (CDR a_list))))
)
```

Recursively check the elements of the list 
> There are not any list within list 
```scheme
(DEFINE (equalsimp list1 list2)
  (COND
    ((NULL? list1) (NULL? list2))
    ((NULL? list2) #F)
    ((EQ? (CAR list1) (CAR list2))
     (equalsimp (CDR list1) (CDR list2)))
    (ELSE #F)))
```

Recursively check the list to see if they are equal
> list can have list 
```scheme
(DEFINE (equal list1 list2)
  (COND
    ((NOT (LIST? list1)) (EQ? list1 list2))
    ((NOT (LIST? list2)) #F)
    ((NULL? list1) (NULL? list2))
    ((NULL? list2) #F)
    ((equal (CAR list1) (CAR list2))
     (equal (CDR list1) (CDR list2)))
    (ELSE #F))
)
```

