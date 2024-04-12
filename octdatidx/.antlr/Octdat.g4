// Extension: ANTRL4 grammar syntax support. For Dev testing.
// Extension Settings: ANTRL4 Generation
//        "language": "JavaScript",
//        "mode": "internal",
//        "listeners": true,
//        "visitors": true

grammar Octdat;

octdatObject: '{' properties '}' EOF;

properties: property*;

property: identifier '=' value;

identifier: 'id' ID | 'type' ID | ID;

value:
	arrayValue
	| objectValue
	| booleanValue
	| numberValue
	| stringValue;

arrayValue: '[' (arrayElement (',' arrayElement)*)? ']';

arrayElement:
	objectValue
	| booleanValue
	| numberValue
	| stringValue;

objectValue: '{' properties '}';

booleanValue: 'true' | 'false';

numberValue: DECIMAL;

stringValue: STRING;

ID: [a-zA-Z0-9.]+;

DECIMAL: [0-9]+;

STRING: '"' ~["\r\n]* '"';

WS: [ \t\r\n]+ -> skip;