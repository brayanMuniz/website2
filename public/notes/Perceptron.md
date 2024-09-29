---
id: Perceptron
aliases:
  - Perceptron
tags: []
---

# Perceptron
[Video Explanation](https://www.youtube.com/watch?v=4Gac5I64LM4)   
Binary Classification of classifiers  

## Perceptron Training Rule 

in linear regresion, our measurment of error was the loss function, but here its more like a total unit test 

- converges only if data is linearly separable (there exists a hyper-plane which can separate positive examples from negative examples).
- works very well when the number of input features is large.
- The threshold function is not differentiable, two alternative optimization methods:
1. Perceptron training rule updates weights based on the error in the thresholded perceptron output.
2. Use a linear approximation for the output (removing threshold function) and using GD to update weights based on the error in the unthresholded linear combination of inputs.

