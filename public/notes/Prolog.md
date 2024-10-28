---
id: Prolog
aliases:
  - Prolog
tags: []
---

# Prolog

TODO: TEMP
```prolog
new_list([apple, grape, orange]). 
new_list2([apple | [grape, orange] ]).

new_list3([apple, grape | [orange] ]).

new_list4([apple, grape, orange | [] ]).

append([], List, List).
append([Head | List_1], List2, [Head | List3]):-append(List_1, List2, List3).

member(Element, [Elment|_]).
member(Element, [_, Tail]):-member(Element, Tail).
```
