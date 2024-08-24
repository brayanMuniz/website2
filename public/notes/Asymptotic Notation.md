---
id: Asymptotic Notation
aliases:
  - Asymptotic Notation
tags: []
---

# Asymptotic Notation

Asymptotic notation consists of six symbols used to describe the relative growth rates of functions. These six symbols are defined in the table below.

| Notation   | Description                       | Definition |
|------------|-----------------------------------|------------|
| $f = \Theta(g)$ | $f$ grows at the same rate as $g$ | There exists a $n_0$ and constants $c_1, c_2 > 0$ such that for all $n > n_0$, $c_1g(n) \leq \|f(n)\| \leq c_2g(n)$. |
| $f = O(g)$     | $f$ grows no faster than $g$      | There exists a $n_0$ and a constant $c > 0$ such that for all $n > n_0$, $\|f(n)\| \leq cg(n)$. |
| $f = \Omega(g)$ | $f$ grows at least as fast as $g$ | There exists a $n_0$ and a constant $c > 0$ such that for all $n > n_0$, $cg(n) \leq \|f(n)\|$. |
| $f = o(g)$     | $f$ grows slower than $g$         | For all $c > 0$, there exists a $n_0$ such that for all $n > n_0$, $\|f(n)\| \leq cg(n)$. |
| $f = \omega(g)$ | $f$ grows faster than $g$         | For all $c > 0$, there exists a $n_0$ such that for all $n > n_0$, $cg(n) \leq \|f(n)\|$. |
| $f \sim g$     | $f/g$ approaches 1               | $\lim_{n \to \infty} \frac{f(n)}{g(n)} = 1$ |

## Testing for Same Growth Rate

$$f(n) \text{ and } g(n) \text{ have the same growth rate if }$$

$$\lim_{N \to \infty} \frac{f(N)}{g(N)}=c, 0 < c < \infty$$

$$\text{if } c \text{ is some constant} \rightarrow f(N)=\Theta(g(N))$$

> Note: No little theta exists

# 3 Rules

1. **Additive and Multiplicative Property**

   If $T_1(n) = O(f(n))$ and $T_2(n) = O(g(n))$, then

   (a) $T_1(n) + T_2(n) = O(f(n) + g(n))$ (intuitively and less formally it is $O(\text{max}(f(n), g(n)))$),

   (b) $T_1(n) \times T_2(n) = O(f(n) \times g(n))$.

2. If $T(n)$ is a polynomial of degree $k$, then $T(n) = \Theta(n^k)$

3. $\log^k(n) = O(n)$ for any constant $k$
   
   a. This means that no matter what power of $k$, it will not surpass $O(n)$.
   
   b. **However:** $\log^k(n)$ has a faster growth rate than $\log(n)$.


# Quiz
## Question 1

If $f(n) = O(1)$ and $g(n) = O(n)$, determine if the following statements are true or false.

- $f(n) = \Theta(g(n)) \rightarrow \text{False, constant function does not grow at the same rate as } n$
- $f(n) = o(g(n)) \rightarrow \text{True. } f(n) \text{ grows at a slower rate than } g(n)$
- $f(n) = O(g(n)) \rightarrow \text{True. } f(n) \text{ is bounded above by some constant multiple of } g(n)$
- $f(n) = \omega(g(n)) \rightarrow \text{False. It would mean that } f(n) \text{ grows faster than } g(n)$

## Question 2

Given $f(n) = 10n^5 + 5n^2 + 30n$ and $g(n) = 3n^3$, determine the validity of the following:

- $f(n) = O(n^5) \rightarrow \text{True}$
- $g(n) = O(n^3) \rightarrow \text{True}$
- $f(n) = \Theta(g(n)) \rightarrow \text{False. } n^5 \text{ grows faster than } n^3$
- $f(n) = \Omega(g(n)) \rightarrow \text{True. } f(n) \text{ grows at least as fast as } g(n)$
- $f(n) = o(g(n)) \rightarrow \text{False. } o(g(n)) \text{ would mean that } f(n) \text{ grows slower than } g(n).$
- $f(n) = \omega(g(n)) \rightarrow \text{True. } f(n) \text{ grows strictly faster than } g(n)$

