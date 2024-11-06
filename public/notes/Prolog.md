---
id: Prolog
aliases:
  - Prolog
tags: []
---

# Prolog

```pl
new_list([apple, grape, orange]). 
new_list2([apple | [grape, orange] ]).

new_list3([apple, grape | [orange] ]).

new_list4([apple, grape, orange | [] ]).

append([], List, List).
append([Head | List_1], List2, [Head | List3]):-append(List_1, List2, List3).

member(Element, [Elment|_]).
member(Element, [_, Tail]):-member(Element, Tail).

% if M < N, 
minimum(M,N,M) :- M =< N.
minimum(M,N,N) :- N =< M.

% is is assign operator
len([], 0).
len([_|Y], LenResult):- len(Y, L), LenResult is L + 1.

% checks head of list to determine if its a member, otherwise checks the tail
member(Element, [Element | _]). 
member(Element, [_, List]):-member(Element, List).

% checks if the sum in left param == right param
% example list_sum([2,3,4], 9) returns true
list_sum([], 0).
list_sum([Head|Tail], TotalSum):-
    list_sum(Tail, Sum1),
    TotalSum is Head+Sum1.

even(X) :-
    Y is mod(X,2), Y =:= 0.

odd(X) :-
    Y is X + 1, even(Y).

sum_even(X, [H|T]) :-
    even(H), sum_even(Y, T), X is Y+H. 

sum_even(X, [H|T]) :-
    odd(H), sum_even(Y, T).

sum_even2([H|T], X) :-
    even(H), sum_even2(T,Y), X is Y+H.

append([], List, List).
append([Head | List1], List_2, [Head | List_3]) :-
    append(List_1, List_2, List_3).

% insert recursive 
insert(Element, [], [Element]).
insert(Element, [Head | Tail], [Element, Head | Tail]) :- Element =< Head.
insert(Element, [Head | Tail], [Head | NewTail]) :-
    Element > Head,
    insert(Element, Tail, NewTail).

% Predicate to sort a list using insertion sort
insertion_sort([], []).
insertion_sort([Head | Tail], SortedList) :-
    insertion_sort(Tail, SortedTail),
    insert(Head, SortedTail, SortedList).


```
