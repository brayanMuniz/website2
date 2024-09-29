---
id: Axiomatic Semantics
aliases:
  - Axiomatic Semantics
tags: []
---

# Axiomatic Semantics

## Program Proof Process

- **An inference rule** is a method of inferring the truth of one assertion on the basis of the values of other assertions.

- The general form of an inference rule is as follows:

  $$
  \begin{array}{c}
  S_1, S_2, \ldots, S_n \quad \text{(antecedent)} \\
  \hline
  S \quad \text{(consequent)}
  \end{array}
  $$

- This rule states that if $S_1, S_2, \ldots,$ and $S_n$ are true, then the truth of $S$ can be inferred.

- The top part of an inference rule is called its **antecedent**; the bottom part is called its **consequent**.

- An **axiom** is a logical statement that is assumed to be true. Therefore, an axiom is an inference rule without an antecedent.

# Axiomatic Semantics: Assignment

- Let $x = E$ be a general assignment statement and $Q$ be its postcondition.

- Then, its precondition, $P$, is defined by the axiom:

  $$
  P = Q_{x \leftarrow E}
  $$

- This means that $P$ is computed as $Q$ with all instances of $x$ replaced by $E$.

- **For example,** if we have the assignment statement and postcondition:

  $$
  \{ ? \} \quad a = \frac{b}{2} - 1 \quad \{ a < 10 \}
  $$

  We replace $a$ in $Q$ with $\frac{b}{2} - 1$:

  $$
  \frac{b}{2} - 1 < 10 \Rightarrow \{ b < 22 \}
  $$

# Axiomatic Semantics: Assignment

- Consider the logical statement:

  $$
  \{ x > 3 \} \quad x = x - 3 \quad \{ x > 0 \}
  $$

  - **Weakest precondition:** $\{ x > 3 \}$
  - $x - 3 > 0 \Rightarrow x > 3$

- $\{ x > 5 \}$ implies $\{ x > 3 \}$

---

- Next, consider the logical statement:

  $$
  \{ x > 5 \} \quad x = x - 3 \quad \{ x > 0 \}
  $$

  - **Precondition:** $\{ x > 5 \}$

# Axiomatic Semantics: Assignment

- **The inference rule** for computing the new precondition and new postcondition of an assignment statement:

  $$
  \{P'\} \quad S \quad \{Q\}, \quad P' \Rightarrow P, \quad Q \Rightarrow Q'
  $$

  $$
  \{P'\} \quad S \quad \{Q'\}
  $$

- The $\Rightarrow$ symbol means "implies," and $S$ can be any program statement.

- If we let $P$ be $\{ x > 3 \}$, $Q$ and $Q'$ be $\{ x > 0 \}$, and $P'$ be $\{ x > 5 \}$, we have:

  $$
  \{ x > 3 \} \quad x = x - 3 \quad \{ x > 0 \}
  $$

  $$
  x - 3 > 0 \Rightarrow x > 3
  $$

  $$
  \{ x > 5 \} \Rightarrow \{ x > 3 \} \quad \text{and} \quad \{ x > 3 \} \Rightarrow \{ x > 0 \} \Rightarrow \{ x > 0 \}
  $$

  $$
  \{ x > 5 \} \quad x = x - 3 \quad \{ x > 0 \}
  $$

- The first term of the antecedent $\{ x > 3 \} \quad x = x - 3 \quad \{ x > 0 \}$ was proven with the assignment axiom. The second and third terms are obvious. Therefore, by the rule of consequence, the consequent is true.

# Axiomatic Semantics: Sequences

- Let $S_1$ and $S_2$ be adjacent program statements. If $S_1$ and $S_2$ have the following pre- and postconditions:

  $$
  \{ P_1 \} \quad S_1 \quad \{ P_2 \}
  $$

  $$
  \{ P_2 \} \quad S_2 \quad \{ P_3 \}
  $$

- The inference rule for computing the precondition of a two-statement sequence is:

  $$
  \{ P_1 \} \quad S_1 \quad \{ P_2 \}, \quad \{ P_2 \} \quad S_2 \quad \{ P_3 \}
  $$

  $$
  \{ P_1 \} \quad S_1, S_2 \quad \{ P_3 \}
  $$

- The inference rule states that to get the sequence precondition, the precondition of the second statement is computed. This new assertion is then used as the postcondition of the first statement, which can then be used to compute the precondition of the first statement, which is also the precondition of the whole sequence.

# Example: Sequence and Postcondition

- For example, consider the following sequence and postcondition:

  $$
  \{ ? \} \quad S_1: \, y = 3 \times x + 1; \quad S_2: \, x = y + 3; \quad \{ x < 10 \}
  $$

  - **Step 1:** Derive $Q$ for $S_2$.
    
    $$
    \{ y < 7 \} \quad x = y + 3 \quad \{ x < 10 \}
    $$

    - $y + 3 < 10 \Rightarrow \{ y < 7 \}$

  - **Step 2:** Derive $P$ for $S_1$.

    $$
    \{ x < 2 \} \quad y = 3 \times x + 1 \quad \{ y < 7 \}
    $$

    - $3 \times x + 1 < 7 \Rightarrow \{ x < 2 \}$

- The **precondition** for the whole sequence is $\{ x < 2 \}$.

---

### Explanation

1. **For $S_2$:**
   - We need to find the condition $y$ must satisfy to make $x = y + 3$ less than 10.
   - Rearranging $y + 3 < 10$ gives us $y < 7$.

2. **For $S_1$:**
   - Using the derived condition $\{ y < 7 \}$ as the postcondition, we find the condition on $x$ for $y = 3 \times x + 1$.
   - Rearranging $3 \times x + 1 < 7$ gives us $x < 2$.

Thus, the precondition for the whole sequence is indeed $\{ x < 2 \}$, which is logically consistent.

