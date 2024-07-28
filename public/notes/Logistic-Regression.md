---
id: Logistic-Regression
aliases: []
tags: []
---

# Logistic Regression
[Supervised Learning](./Supervised-Learning) algorithm used for [Classification](./Classification) tasks where the goal is to predict the probability that an instance belongs to a given class or not.   
We use the [Sigmoid Function](./Sigmoid-Function) to transform the [Linear Regression](./LinearRegression) model's outputs into discreet values instead of continuous ones.  

## Changing the hypothesis function
$$
\text{Sigmoid Function: } g(z) = \frac{1}{1+e^{-z}}
$$
 
$$
h_\theta(x) = g(\theta^{T}x) =  \frac{1}{1+e^{-(\theta^{T}x)}}
$$

## Probability of classification 
So now we have a way of getting discreet values, if they are $0$ or $1$.  
We can write this as:
$$
P(y = 1 \mid x; \theta) = h_\theta(x)
$$

$$
P(y = 0 \mid x; \theta) = 1 - h_\theta(x)
$$

This can be combined to:

$$
p(y \mid x; \theta) = (h_\theta(x))^y (1 - h_\theta(x))^{1-y}
$$

When $y=1$ we get back the first equation and when $y=0$ we get back the second equation.  

## Getting our likelihood equation

We are going to assume that $m$ rows of data were generated independently (for the probability to make sense), we can then write down the likelihood of the parameters as

$$
\begin{aligned}
L(\theta) &= \prod_{i=1}^m p(y^{(i)} \mid x^{(i)}; \theta) \\
          &= \prod_{i=1}^m \left( h_\theta(x^{(i)}) \right)^{y^{(i)}} \left( 1 - h_\theta(x^{(i)}) \right)^{1 - y^{(i)}}
\end{aligned}
$$

We can use logs to bring down the exponents. 

$$
\ell(\theta) = \log L(\theta)
$$

$$
= \sum_{i=1}^m y^{(i)} \log h(x^{(i)}) + (1 - y^{(i)}) \log (1 - h(x^{(i)}))
$$

## Maximizing our log likelihood
Now that we have our $\ell(\theta)$, how can we maximize this in order to get the max likelihood? 
We use Gradient Ascent.   
Also take a look at the derivative of the [Sigmoid Function](./Sigmoid-Function) 
We also have to use vectorial notation in order to use our [Matrix Derivatives](./MatrixDerivatives) notation. 
For simplicity, we will derive it based on one row of data. 

$$
\begin{aligned}
\frac{\partial}{\partial \theta_j} \ell(\theta) 
&= \left( \frac{y}{g(\theta^T x)} - (1 - y) \frac{1}{1 - g(\theta^T x)} \right) \frac{\partial}{\partial \theta_j} g(\theta^T x) \\
&= \left( \frac{y}{g(\theta^T x)} - (1 - y) \frac{1}{1 - g(\theta^T x)} \right) g(\theta^T x) (1 - g(\theta^T x)) x_j \\
&= (y (1 - g(\theta^T x)) - (1 - y) g(\theta^T x)) x_j \\
&= (y - h_\theta(x)) x_j
\end{aligned}
$$

We have the derivation for one row of data, so if we keep updating it with more and more data, we can get closer to our maximum.   
We have our [[Stochastic Gradient]] ascent rule:
$$
\theta_j = \theta_j + \alpha (y^{i} - h_\theta(x)^{i}) x_j^{i}
$$

