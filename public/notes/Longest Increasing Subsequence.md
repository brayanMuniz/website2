---
id: Longest Increasing Subsequence
aliases:
  - Longest Increasing Subsequence
tags: []
---

# Longest Increasing Subsequence
**Problem Statement:** Given an array of integers, find the length of the longest subsequence that is strictly increasing. A subsequence is a sequence derived from the array by deleting some or no elements without changing the order of the remaining elements.

**Example:** Consider the array: `[10, 9, 2, 5, 3, 7, 101, 18]`

- A possible longest increasing subsequence is `[2, 3, 7, 101]`
- The length of this subsequence is `4`

A brute force approach, [Backtracking](notes/Backtracking.md) would take $2^n$ time. A [Dynamic Programming](notes/Dynamic%20Programming.md) approach uses [Memoization](notes/Memoization.md) to find the solution starting from the end of the list to the beginning.  

## Data Structure
2D Array 
### Dependencies 
`i` increases as you go down and `j` increases as you go to the right   
Fill out the data from the bottom right so all the dependencies are filed out first.  

## Space and Time 
Space: $O(n^2)$  
Time: $O(n^2)$

