---
id: Mergesort
aliases:
  - Mergesort
tags: []
---

# Mergesort
This is a [Divide-And-Conquer](notes/Divide-And-Conquer) sorting algorithm that takes advantage of [Recursion](./Recursion.md)

## Algorithm 
1. **Divide**: The array into roughly 2 parts
2. **[Recursion](./Recursion)**: Use the [Recursion-Elf](./Recursion-Elf) and combine the two subarrays together.  
3. Merge the newly sorted arrays into a single sorted Array. 

![mergesortExample](../Images/mergeSortExample.png) 

## Correctness 
The first step is easy, cut the array in 2.  
What about the second step? You don't need to know the second step, that is the whole point of the Elf.  
The real meat and potatoes is in the third step. 

![mergesort.png](../Images/mergesort.PNG)

| Merge Proof | My visual follow along |
| -------------- | --------------- |
| ![Merge Proof](../Images/mergeProof.png) | ![followAlong](../Images/followAlong.jpg) |
