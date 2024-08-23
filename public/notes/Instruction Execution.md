---
id: Instruction Execution
aliases:
  - Instruction Execution
tags: []
---

# Instruction Execution
When a program is executed by the processor, it is stored in memory. 
There are 2 steps to this
1. Fetch: The processor reads it from memory one at a time and increments it using the Program Counter
2. Execute: Repeat step 1 until done. 

## Fetched Instruction 
The fetched instruction is loaded into the Instruction Register, and the bits tell the processor what to do.  
From here the processor has 4 steps that it can take. 

- Processor-memory: Data may be transferred from processor to memory, or from memory to processor.
- Processor-I/O: Data may be transferred to or from a peripheral device by transferring between the processor and an I/O module.
- Data processing: The processor may perform some arithmetic or logic operation on data.
- Control: An instruction may specify that the sequence of execution be altered. As an example, if the PC tells the processor to go to this address instead of the next subsequent address in memory. 



