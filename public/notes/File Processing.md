---
id: File Processing
aliases:
  - File Processing
tags: []
---

# File Processing
I am going to tackle this from the perspective of someone who codes and has to read and write to a file and contrast it against someone who read data using a [DBMS](./DBMS.md).

## The drawbacks of coding in the values
When there are two different people that need to read some data you hard code in the source code what you want to read back.   
For example, let's say the data is formatted as: 
| Name | Age|
| -------------- | --------------- |
| 10 characters| 2 characters|

You would read the first 10 characters and then the next 2 to get the whole data.  
But someone just turned 100, so you have to update it to have the code to fit that.  
Now you have to repeat this process multiple times if you hard coded it in. 
This problem is exasperated as every person using the [Database](./Database.md) has their own hard-coded source code. 

## Using a DBMS
Now if you are using a DBMS, you can easily get the metadata of how many characters the age takes up and then just call the query. 

