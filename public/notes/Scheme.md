---
id: Scheme
aliases:
  - Scheme
tags: []
---

# Scheme
The Scheme language, a [Functional Programming Languages](./Functional%20Programming%20Languages.md), which is a dialect of [LISP](./LISP.md), was developed at MIT in the mid-1970s.  

- List Functions I am allowed to use 
  - The `CAR` function returns the first element of its list parameter.
  - The `CDR` function returns its parameter list minus its first element
  - The function `CONS` takes two parameters and returns a new list with its first parameter as the first element and its second parameter as the remainder of that list.
  - The `LIST` function takes any number of parameters and returns a new list with the parameters as its elements. 
  - `list?` 
  - `eq?` is used to determine if two objects are identical. It checks whether the two arguments refer to the exact same object in memory.
  - `eqv?` is similar, but is slightly more flexible. It is used to compare objects for equivalence, meaning it checks if they are the same in terms of value and type.
  - `append` 
  - `cond` 
  - `NOT` 
  - `null?` 
  - `let` 
  - `if` and `else`  
  - Booleans: `#F` and `#T` 
  - `even?`, `odd?`, `zero?`   

## Variables
`(define <variable name> <variable value>)` 
`(let ((x some-expr))` 


Null list is only one place in memory, so if you declare two list defined by null, and check their eq, will return true.  

## List 
`'(1 2 3)` makes a list, think of it as `[1, 2, 3]` 

## Functions
recursively check each part of `a_list` and see if the `atm` is in there.  
```scheme
(define (member atm a_list)
  (cond
    ((null? a_list) #f)
    ((eq? atm (car a_list)) #t)
    (else (member atm (cdr a_list))))
)
```

Recursively check the elements of the list 
> There are not any list within list 
```scheme
(define (equalsimp list1 list2)
  (cond
    ((null? list1) (null? list2))
    ((null? list2) #f)
    ((eq? (car list1) (car list2))
     (equalsimp (cdr list1) (cdr list2)))
    (else #f)))
)
```

Recursively check the list to see if they are equal
> list can have list 
```scheme
(define (equal list1 list2)
  (cond
    ((not (list? list1)) (eq? list1 list2))
    ((not (list? list2)) #f)
    ((null? list1) (null? list2))
    ((null? list2) #f)
    ((equal (car list1) (car list2))
     (equal (cdr list1) (cdr list2)))
    (else #f))
)
```

