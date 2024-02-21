import ply.lex as lex

tokens = (
    'ID', 'TYPE', 'NUMBER', 'STRING', 'BOOLEAN',
    'LBRACE', 'RBRACE', 'LSQUARE', 'RSQUARE',
    'EQUALS', 'REFERENCE', 'VECTOR', 'COLOR', 'CONDITION'
)

t_LBRACE = r'\{'
t_RBRACE = r'\}'
t_LSQUARE = r'\['
t_RSQUARE = r'\]'
t_EQUALS = r'='
t_REFERENCE = r'<[^>]+>'
t_CONDITION = r'\?\([^)]+\)'

def t_ID(t):
    r'[a-zA-Z_][a-zA-Z_.]*'
    return t

def t_TYPE(t):
    r'CharacterType(?:Variant|MaterialSlot|FootDef)|StatType|Prefab|AudioBankHandle|AudioClipHandle|AnimationTrack|ColorCharacterTypeMaterialDefinition|CharacterTypeMaterialColor|AudioHandleChance|GrazeInstinct|RelaxInstinct'
    return t

def t_VECTOR(t):
    r'vector\([-+]?[0-9]*\.?[0-9]+, [-+]?[0-9]*\.?[0-9]+, [-+]?[0-9]*\.?[0-9]+\)'
    return t

def t_COLOR(t):
    r'color\([-+]?[0-9]*\.?[0-9]+, [-+]?[0-9]*\.?[0-9]+, [-+]?[0-9]*\.?[0-9]+\)'
    return t

def t_NUMBER(t):
    r'-?[0-9]+(\.[0-9]+)?'
    t.value = float(t.value) if '.' in t.value else int(t.value)
    return t

def t_STRING(t):
    r'"[^"]*"'
    t.value = t.value.strip('"')
    return t

def t_BOOLEAN(t):
    r'true|false'
    t.value = True if t.value == 'true' else False
    return t

# Ignored characters (whitespace)
t_ignore = ' \t\n'

def t_error(t):
    print(f"Illegal character '{t.value[0]}'")
    t.lexer.skip(1)

lexer = lex.lex()
