---
id: Process
aliases:
  - Process
tags: []
---

# Process
- **A program in execution**.
- **An instance of a program running on a computer**.
- **The entity that can be assigned to and executed on a processor**.
- **A unit of activity** characterized by the execution of a sequence of instructions, a current state, and an associated set of system resources.

## Process Control Block 
A process can be identified as follows: 
- **Identifier**: A unique identifier associated with this process, to distinguish it from all other processes.
- **State**: If the process is currently executing, it is in the running state.
- **Priority**: Priority level relative to other processes.
- **Program counter**: The address of the next instruction in the program to be executed.
- **Memory pointers**: Include pointers to the program code and data associated with this process, plus any memory blocks shared with other processes.
- **Context data**: These are data that are present in registers in the processor while the process is executing.
- **I/O status information**: Includes outstanding I/O requests, I/O devices assigned to this process, a list of files in use by the process, and so on.
- **Accounting information**: May include the amount of processor time and clock time used, time limits, account numbers, and so on.


