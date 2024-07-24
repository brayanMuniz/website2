For a function $f : \mathbb{R}^{m \times n} \rightarrow \mathbb{R}$ mapping from $m$-by-$n$ matrices to the real numbers, we define the derivative of $f$ with respect to $A$ to be:

$$
\nabla_A f(A) = \begin{bmatrix}
\frac{\partial f}{\partial A_{11}} & \cdots & \frac{\partial f}{\partial A_{1n}} \\
\vdots & \ddots & \vdots \\
\frac{\partial f}{\partial A_{m1}} & \cdots & \frac{\partial f}{\partial A_{mn}}
\end{bmatrix}
$$

This means that the gradient $\nabla_A f(A)$ is itself a $m$-by-$n$ matrix, whose $(i,j)$-element is $\frac{\partial f}{\partial A_{ij}}$.   
For example, suppose $A = \begin{bmatrix}
A_{11} & A_{12} \\
A_{21} & A_{22}
\end{bmatrix}$ is a 2-by-2 matrix, and the function $f : \mathbb{R}^{2 \times 2} \rightarrow \mathbb{R}$ is given by
$$
f(A) = \frac{3}{2} A_{11} + 5 A_{12}^2 + A_{21}A_{22}.
$$

Here, $A_{ij}$ denotes the $(i,j)$ entry of the matrix $A$. We then have
$$
\nabla_A f(A) = \begin{bmatrix}
\frac{3}{2} & 10 A_{12} \\
A_{22} & A_{21}
\end{bmatrix}.
$$
Every position means that it is taking the partial derivative with respect to that position. 

## Using The Trace to get some Facts
For these next parts to make sense take a look at [[Matrix Trace]]. 

1. $$ \nabla_A \text{tr} AB = B^T $$
2. $$ \nabla_{A^T} f(A) = (\nabla_A f(A))^T $$
3. $$ \nabla_A \text{tr} ABA^T C = CAB + C^T AB^T $$
4. $$ \nabla_A |\!A\!| = |\!A\!| (A^{-1})^T $$

> Equation 4 only applies to non-singular square matrices 
### A short explanation 
$A \in \reals^{n \times m}$  
$B \in \reals^{m \times n}$  
$AB \text{ is a square matrix of dimensions } n \times n$

<details>
<summary>Equation 1 Example</summary>

$$
A = \begin{bmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{bmatrix}, \quad B = \begin{bmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end{bmatrix}
$$

Then:

$$
AB = \begin{bmatrix} a_{11}b_{11} + a_{12}b_{21} & a_{11}b_{12} + a_{12}b_{22} \\ a_{21}b_{11} + a_{22}b_{21} & a_{21}b_{12} + a_{22}b_{22} \end{bmatrix}
$$

The trace of $AB$ is:

$$
\text{tr}(AB) = (a_{11}b_{11} + a_{12}b_{21}) + (a_{21}b_{12} + a_{22}b_{22})
$$

Now, take the partial derivative of $\text{tr}(AB)$ with respect to each element of $A$   

- For $(\frac{\partial \text{tr}(AB)}{\partial a_{11}} ), \text{we get } ( b_{11} )$

- For $(\frac{\partial \text{tr}(AB)}{\partial a_{12}} ), \text{we get } ( b_{21} )$

- For $(\frac{\partial \text{tr}(AB)}{\partial a_{21}} ), \text{we get } ( b_{12} )$

- For $(\frac{\partial \text{tr}(AB)}{\partial a_{22}} ), \text{we get } ( b_{22} )$

Putting these together, the gradient matrix is:

$$
\nabla_A \text{tr}(AB) = \begin{bmatrix} b_{11} & b_{21} \\ b_{12} & b_{22} \end{bmatrix} = B^T
$$
</details>


