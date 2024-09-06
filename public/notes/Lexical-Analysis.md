---
id: Lexical-Analysis
aliases:
  - Lexical-Analysis
tags: []
---

# Lexical-Analysis
Lexical tokenization is conversion of a text into meaningful lexical tokens belonging to categories defined by a "lexer" program. 
categories include identifiers, operators, grouping symbols and data types.
```go
type Tokentype string

type Token struct {
	Type    Tokentype
	Literal string
}

const (
	ILLEGAL = "ILLEGAL"
	EOF     = "EOF"

	// Identifiers + literals
	IDENT = "IDENT" // add, foobar, x, y, ...
	INT   = "INT"   // 1343456

	// Operators
	ASSIGN = "="
	PLUS   = "+"

	// Delimiters
	COMMA     = ","
	SEMICOLON = ";"

	LPAREN = "("
	RPAREN = ")"
	LBRACE = "{"
	RBRACE = "}"

	// Keywords
	FUNCTION = "FUNCTION"
	LET      = "LET"
)
```
