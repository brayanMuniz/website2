---
id: Data-Dictionary
aliases:
  - Data-Dictionary
tags: []
---

# Data Dictionary
This can best be described as a helper for the [DBMS](./DBMS.md).   
It defines all the data in the database in order to prevent data redundancy. 
Because of this, it is one of the main reason why you would use a DBMS over something like a [File Processing](./File%20Processing.md) system. 

The data dictionary will look something like this: 
| **Field Name**  | **Data Type** | **Field Size for Display** | **Description**                       | **Example**       |
|-----------------|---------------|----------------------------|---------------------------------------|-------------------|
| **EmployeeID**  | Integer       | 8                          | Unique ID of each employee            | 100025            |
| **FullName**    | Text          | 30                         | Full name of the employee             | Emily Johnson     |
| **DOB**         | Date/Time     | 10                         | Date of birth of employee             | 1990-05-15        |
| **PhoneNumber** | Integer       | 10                         | Phone number of employee              | 555-123-4567      |

