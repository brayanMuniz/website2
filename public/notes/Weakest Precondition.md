---
id: Weakest Precondition
aliases:
  - Weakest Precondition
tags: []
---

# Weakest Precondition
The weakest precondition is the least restrictive precondition that will guarantee the validity of the associated postcondition.  

- **Pre and post condition form:** $\{P\} \text{ Statement } \{Q\}$
- **Example:**
  - $\{ b > 0 \} \quad a = b + 1 \quad \{ a > 1 \}$
    - **Precondition:** $\{ b > 0 \}$
    - **Statement:** $a = b + 1$
    - **Postcondition:** $\{ a > 1 \}$
    - **Justification:** $b + 1 > 1 \Rightarrow b > 0$
  - $\{ b > 10 \} \quad a = b + 1 \quad \{ a > 1 \}$


