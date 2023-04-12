grammar SolidBrocoli;

// Lexer rules

IMPORT: 'import';
TYPE: 'type';

LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
EQUALS: '=';
SEMICOLON: ';';
COMMA: ',';
DOT: '.';
STRING: '"' (ESC | .)*? '"';
INT: [1-9][0-9]*;
FLOAT: [1-9][0-9]*','[0-9]+;
ID: [a-zA-Z]+;

WS: [ \t\n\r]+ -> skip;
COMMENT: '#' .*? '\n' -> skip;

fragment ESC: '\\' [\\"bfnrt];

// Parser rules

program: importStmt* typeDecl+ EOF;

importStmt: IMPORT ID SEMICOLON;

typeDecl: TYPE ID LBRACE fieldDecl* RBRACE;

fieldDecl: ID EQUALS expr SEMICOLON;

expr: value | callExpr;

callExpr: ID DOT ID LBRACE ID (COMMA ID)* RBRACE;

value: STRING | INT | FLOAT;
