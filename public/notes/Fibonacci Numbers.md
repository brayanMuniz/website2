---
id: Fibonacci Numbers
aliases:
  - Fibonacci Numbers
tags: []
---

# Fibonacci Numbers

## Classic Use 
```python
def Fibonacci(n):

    # Check if input is 0 then it will
    # print incorrect input
    if n < 0:
        print("Incorrect input")

    # Check if n is 0
    # then it will return 0
    elif n == 0:
        return 0

    # Check if n is 1,2
    # it will return 1
    elif n == 1 or n == 2:
        return 1

    else:
        return Fibonacci(n-1) + Fibonacci(n-2)
```

This is very slow because you are solving the same sub problems.   

## Making recursion better 
Use [Memoization](notes/Memoization.md) to make it better by storing previous computations.   
$O(n)$ running time  

## Using a Loop instead 
We will fill out all the answers ahead of time, explicitly. 
To get the ith index get the previous 2 and sum them.  
$O(n)$ running time  


