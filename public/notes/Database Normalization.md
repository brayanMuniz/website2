---
id: Database Normalization
aliases:
  - Database Normalization
tags: []
---

# Database Normalization
[Video](https://www.youtube.com/watch?v=GFQaEYEc8_8)

## First Normal Form (1NF)
- Eliminate repeating groups and ensure that each column contains atomic values.
- Guidelines:
  1. Using row order to convey information is not permitted.
  2. Mixing data types within the same column is not permitted.
  3. Every table must have a primary key.
  4. Repeating groups are not allowed, and each column should hold a single value.

---

## Second Normal Form (2NF)
- Eliminate partial dependencies on the primary key.
- Guidelines:
  - A relation must already be in 1NF.
  - Each non-key attribute must depend on the entire primary key (not just part of it).

![img](../Images/c7.png)
> This is a violation of second normal form.

---

## Third Normal Form (3NF)
- Eliminate transitive dependencies.
- Guidelines:
  - A relation must already be in 2NF.
  - Every non-key attribute must depend only on the primary key, the whole key, and nothing but the key.

![img](../Images/c8.png)
> An example of a violation of third normal form.

---

## Fourth Normal Form (4NF)
- Eliminate multi-valued dependencies.
- Guidelines:
  - A relation must already be in 3NF.
  - No attribute should have more than one independent multi-valued dependency on the key.

> Multi-valued dependencies can lead to redundancy and potential anomalies in a table.

---

## Mnemonic for Normal Forms (1NF to 4NF)

**"All Cats Try Meowing"**

- **A**: **Atomicity** for 1NF (ensuring atomic values).
- **C**: **Composite keys** for 2NF (removing partial dependencies).
- **T**: **Transitive dependencies** for 3NF (removing transitive dependencies).
- **M**: **Multi-valued dependencies** for 4NF (removing multi-valued dependencies).

