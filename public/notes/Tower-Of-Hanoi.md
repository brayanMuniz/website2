---
id: Tower-Of-Hanoi
aliases:
  - Tower-Of-Hanoi
tags: []
---

# Tower Of Hanoi

The great temple at Benares has 3 diamond needles and 64 golden disks stacked from largest at the bottom to the smallest on top.   
Monks move the disks one at a time between needles, never placing a larger disk on a smaller one.   
When all disks are moved from the starting needle to a destination needle, the temple will crumble and the world will end.

## The solution
![Tower-Of-Hanoi-Image](../Images/Tower.png) 
1. _recursively_ move the smaller `n−1` disks off the largest one
2. move the largest disk to its destination
3. _recursively_ stack the smaller `n−1` disks back on top
```python
def Hanoi(n, src, dst, tmp):
    if n > 0:
        Hanoi(n - 1, src, tmp, dst) # 〈〈Recurse!〉〉 T(n - 1)
        move(n, src, dst) # +1
        Hanoi(n - 1, tmp, dst, src) # 〈〈Recurse!〉〉 T(n - 1)
```
## Duration

Derive an exact count of the number of moves we perform. Easiest way to do so is to express this number using a recurrence relation, and then find a closed form solution to the recurrence.

$T(n)$ = number of moves made by `Hanoi(n,src,dst,tmp)` 

When $n=0, T(0)=0$

When $n>0$ do 2 recursive calls(where it says <Recurse!>) on $n-1$ disks plus one additional move, so $T(n) = 2T(n-1)+1$. 


