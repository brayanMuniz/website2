---
id: Functional Dependency in DBMS
aliases:
  - Functional Dependency in DBMS
tags: []
---

# Functional Dependency in [DBMS](notes/DBMS.md)
[Lecture by Jenny](https://youtu.be/dR-jJimWWHA?si=4LRsFXGKkRIEO8K8) 

## FD Rule:
- **FD:** x → y 
- If `t₁.x = t₂.x`, then `t₁.y = t₂.y`

The determinant $X$ can only output one value of $Y$.  
If $X$ value is same in the tuple, $Y$ value **must** be same.  

### Student Table Example:

| R No | Name | Marks | Dept | Course |
|------|------|-------|------|--------|
| 1    | a    | 78    | CS   | C1     |
| 2    | b    | 60    | EE   | C1     |
| 3    | a    | 78    | CS   | C2     |
| 4    | b    | 60    | EE   | C2     |
| 5    | c    | 80    | IT   | C3     |
| 6    | d    | 80    | EC   | C2     |

| Dependency               | x               | y                | Pass/Fail |
|--------------------------|-----------------|------------------|-----------|
| R No → Name              | R No            | Name             | Pass      |
| Name → R No              | Name            | R No             | Fail      |
| R No → Marks             | R No            | Marks            | Pass      |
| Dept → Course            | Dept            | Course           | Fail      |
| Course → Dept            | Course          | Dept             | Fail      |
| Marks → Dept             | Marks           | Dept             | Fail      |
| (R No, Name) → Marks     | R No, Name      | Marks            | Pass      |
| Name → Marks             | Name            | Marks            | Fail      |
| (Name, Marks) → Dept     | Name, Marks     | Dept             | Pass      |
| (Name, Marks) → Dept, Course | Name, Marks | Dept, Course     | Fail      |

If all the $X$ values are unique, then you don't need to check the condition and they all pass.  


