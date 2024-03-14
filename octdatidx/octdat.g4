grammar Octdat;

// Parser rules
octdatFile: objectDefinition*;

objectDefinition: LBRACE objectBody RBRACE;

objectBody: objectProperty*;

objectProperty:
	idProp
	| typeProp
	| inheritProp
	| aliasProp
	| nameProp
	| descriptionProp
	| iconProp
	| modifierIconProp
	| attributesProp
	| limitProp
	| activationProp
	| targetTypeProp
	| actionsProp
	| ingredientsProp
	| colorsProp
	| prefabProp
	| consumableModifiersProp
	| craftAtProp
	| valueProp
	| dropSoundProp
	| carryChanceProp
	| moodBoostProp
	| importanceProp
	| importanceRangeProp
	| subjectProp
	| defectiveNounProp
	| itemClassProp
	| categoryProp
	| stackLimitProp
	| usableStackSizeProp
	| indoorDecayAfterProp
	| outdoorDecayAfterProp
	| temperatureAffectsDecayProp
	| commandTypeProp
	| batchProp
	| abstractProp
	| cosmeticPrefabProp
	| equipmentSlotProp
	| staticBuffsProp
	| equipmentCosmeticProp
	| colorSlotsProp
	| buffScaleProp
	| statsProp
	| salvageAtProp
	| salvageProp
	| progressMultiplierProp
	| researchEntryProp
	| qualityDifficultyProp
	| skillCurveProp
	| relatedSubjectProp
	| forHerbavoreAnimalsProp
	| dropItemTypeProp
	| dropItemChanceProp
	| sharedMaterialsProp;

idProp: 'id' ID;
typeProp: 'type' ID;
inheritProp: 'inherit' ID;
aliasProp: 'alias' ID;
nameProp: 'name' ASSIGN STRING;
descriptionProp: 'description' ASSIGN STRING;
iconProp: 'icon' ASSIGN STRING;
modifierIconProp: 'modifierIcon' ASSIGN STRING;
attributesProp:
	'attributes' ASSIGN LBRACKET attributeList RBRACKET;
limitProp: 'limit' ASSIGN NUMBER;
activationProp:
	'activation' ASSIGN LBRACE activationBody RBRACE;
targetTypeProp:
	'targetType' ASSIGN LBRACE targetTypeBody RBRACE;
actionsProp: 'actions' ASSIGN LBRACKET actionList RBRACKET;
ingredientsProp:
	'ingredients' ASSIGN LBRACKET ingredientList RBRACKET;
colorsProp:
	'ingredientColors' ASSIGN LBRACKET colorList RBRACKET;
prefabProp: 'prefab' ASSIGN LBRACE prefabBody RBRACE;
consumableModifiersProp:
	'consumableModifiers' ASSIGN LBRACKET modifierList RBRACKET;
craftAtProp: 'craftAt' ASSIGN LBRACKET craftAtList RBRACKET;
valueProp: 'value' ASSIGN NUMBER;
dropSoundProp: 'dropSound' ASSIGN ID;
carryChanceProp: 'carryChance' ASSIGN NUMBER;
moodBoostProp: 'moodBoost' ASSIGN NUMBER;
importanceProp: 'importance' ASSIGN NUMBER;
importanceRangeProp: 'importanceRange' ASSIGN NUMBER;
subjectProp: 'subject' ASSIGN BOOLEAN;
defectiveNounProp: 'defectiveNoun' ASSIGN BOOLEAN;
itemClassProp: 'itemClass' ASSIGN ID;
categoryProp: 'category' ASSIGN ID;
stackLimitProp: 'stackLimit' ASSIGN NUMBER;
usableStackSizeProp: 'usableStackSize' ASSIGN NUMBER;
indoorDecayAfterProp: 'indoorDecayAfter' ASSIGN DURATION;
outdoorDecayAfterProp: 'outdoorDecayAfter' ASSIGN DURATION;
temperatureAffectsDecayProp:
	'temperatureAffectsDecay' ASSIGN BOOLEAN;
commandTypeProp: 'commandType' ASSIGN ID;
batchProp: 'batch' ASSIGN NUMBER;
abstractProp: 'abstract' ASSIGN BOOLEAN;
cosmeticPrefabProp: 'cosmeticPrefab' ASSIGN BOOLEAN;
equipmentSlotProp: 'equipmentSlot' ASSIGN ID;
staticBuffsProp:
	'staticBuffs' ASSIGN LBRACKET staticBuffList RBRACKET;
equipmentCosmeticProp:
	'equipmentCosmetic' ASSIGN LBRACE equipmentCosmeticBody RBRACE;
colorSlotsProp:
	'colorSlots' ASSIGN LBRACKET colorSlotList RBRACKET;
buffScaleProp: 'buffScale' ASSIGN NUMBER;
statsProp: 'stats' ASSIGN LBRACKET statList RBRACKET;
salvageAtProp: 'salvageAt' ASSIGN ID;
salvageProp: 'salvage' ASSIGN LBRACKET salvageList RBRACKET;
progressMultiplierProp: 'progressMultiplier' ASSIGN NUMBER;
researchEntryProp: 'researchEntry' ASSIGN ID;
qualityDifficultyProp: 'qualityDifficulty' ASSIGN NUMBER;
skillCurveProp: 'skillCurve' ASSIGN NUMBER;
relatedSubjectProp: 'relatedSubject' ASSIGN ID;
forHerbavoreAnimalsProp: 'forHerbavoreAnimals' ASSIGN BOOLEAN;
dropItemTypeProp: 'dropItemType' ASSIGN ID;
dropItemChanceProp: 'dropItemChance' ASSIGN NUMBER;
sharedMaterialsProp:
	'sharedMaterials' ASSIGN LBRACKET sharedMaterialsList RBRACKET;

attributeList: attribute (COMMA attribute)*;
attribute: ID;

activationBody:
	'type' ID 'lengthMinutes' ASSIGN NUMBER 'cooldownMinutes' ASSIGN NUMBER;
targetTypeBody: 'type' ID targetTypeProps?;
targetTypeProps:
	targetTypeRangeProp
	| targetTypeAutoEnemiesProp;
targetTypeRangeProp: 'range' ASSIGN NUMBER;
targetTypeAutoEnemiesProp: 'autoEnemies' ASSIGN BOOLEAN;

actionList: action (COMMA action)*;
action: LBRACE actionBody RBRACE;
actionBody: 'type' ID actionProps?;
actionProps:
	actionStatusEffectNameProp
	| actionStatusEffectMinutesProp
	| actionEffectProp
	| actionSelfProp
	| actionStatProp
	| actionDeltaProp
	| actionMinutesToMaturityProp;
actionStatusEffectNameProp: 'statusEffectName' ASSIGN STRING;
actionStatusEffectMinutesProp:
	'statusEffectMinutes' ASSIGN NUMBER;
actionEffectProp: 'effect' ASSIGN ID;
actionSelfProp: 'self' ASSIGN BOOLEAN;
actionStatProp: 'stat' ASSIGN ID;
actionDeltaProp: 'delta' ASSIGN NUMBER;
actionMinutesToMaturityProp: 'minutesToMaturity' ASSIGN NUMBER;

ingredientList: ingredient (COMMA ingredient)*;
ingredient: LBRACE ingredientBody RBRACE;
ingredientBody: 'type' ID ingredientProps?;
ingredientProps: ingredientFilterProp | ingredientCountProp;
ingredientFilterProp: 'filter' ASSIGN ID;
ingredientCountProp: 'count' ASSIGN NUMBER;

colorList: color (COMMA color)*;
color: 'color' LPAREN COLOR RPAREN;

prefabBody: 'type' ID prefabProps?;
prefabProps:
	prefabPathProp
	| prefabNameProp
	| prefabBehaviorProp
	| prefabPhysicsProp
	| sharedMaterialProp;
prefabPathProp: 'path' ASSIGN STRING;
prefabNameProp: 'name' ASSIGN STRING;
prefabBehaviorProp: 'behavior' ASSIGN ID;
prefabPhysicsProp: 'physics' ASSIGN BOOLEAN;

sharedMaterialsList:
	sharedMaterialProp (COMMA sharedMaterialProp)*;
sharedMaterialProp: LBRACE sharedMaterialBody RBRACE;
sharedMaterialBody: 'type' ID sharedMaterialProps?;
sharedMaterialProps:
	sharedMaterialNamesProp
	| sharedMaterialMaterialProp;
sharedMaterialNamesProp:
	'names' ASSIGN LBRACKET nameList RBRACKET;
sharedMaterialMaterialProp: 'material' ASSIGN ID;

nameList: STRING (COMMA STRING)*;

modifierList: modifier (COMMA modifier)*;
modifier: LBRACE modifierBody RBRACE;
modifierBody: 'type' ID modifierProps?;
modifierProps:
	modifierNameProp
	| modifierDeltaProp
	| modifierStatNameProp
	| modifierMultiplierProp
	| modifierGoodProp;
modifierNameProp: 'name' ASSIGN STRING;
modifierDeltaProp: 'delta' ASSIGN NUMBER;
modifierStatNameProp: 'statName' ASSIGN ID;
modifierMultiplierProp: 'multiplier' ASSIGN NUMBER;
modifierGoodProp: 'good' ASSIGN BOOLEAN;

craftAtList: craftAt (COMMA craftAt)*;
craftAt: ID;

staticBuffList: staticBuff (COMMA staticBuff)*;
staticBuff: LBRACE staticBuffBody RBRACE;
staticBuffBody: 'type' ID staticBuffProps?;
staticBuffProps:
	staticBuffStatNameProp
	| staticBuffMultiplierProp
	| staticBuffGoodProp;
staticBuffStatNameProp: 'statName' ASSIGN ID;
staticBuffMultiplierProp: 'multiplier' ASSIGN NUMBER;
staticBuffGoodProp: 'good' ASSIGN BOOLEAN;

equipmentCosmeticBody: 'type' ID equipmentCosmeticProps?;
equipmentCosmeticProps:
	equipmentCosmeticPrefabProp
	| equipmentCosmeticMaskMaterialsProp;
equipmentCosmeticPrefabProp: prefabProp;
equipmentCosmeticMaskMaterialsProp:
	'maskMaterials' ASSIGN LBRACKET maskMaterialList RBRACKET;

maskMaterialList: maskMaterial (COMMA maskMaterial)*;
maskMaterial: ID;

colorSlotList: colorSlot (COMMA colorSlot)*;
colorSlot: LBRACE colorSlotBody RBRACE;
colorSlotBody: 'type' ID colorSlotProps?;
colorSlotProps:
	colorSlotNameProp
	| colorSlotMaterialsProp
	| colorSlotReferenceProp;
colorSlotNameProp: 'name' ASSIGN STRING;
colorSlotMaterialsProp:
	'materials' ASSIGN LBRACKET materialList RBRACKET;
colorSlotReferenceProp: 'reference' ASSIGN ID;

materialList: material (COMMA material)*;
material: ID;

statList: stat (COMMA stat)*;
stat: LBRACE statBody RBRACE;
statBody: 'type' ID statProps?;
statProps:
	statNameProp
	| statFormulaProp
	| statModifierProp
	| statMinProp
	| statMaxProp;
statNameProp: 'name' ASSIGN ID;
statFormulaProp: 'formula' ASSIGN ID;
statModifierProp: 'modifier' ASSIGN BOOLEAN;
statMinProp: 'min' ASSIGN NUMBER;
statMaxProp: 'max' ASSIGN NUMBER;

salvageList: salvage (COMMA salvage)*;
salvage: LBRACE salvageBody RBRACE;
salvageBody: 'type' ID salvageProps?;
salvageProps: salvageItemTypeProp | salvageCountProp;
salvageItemTypeProp: 'itemType' ASSIGN ID;
salvageCountProp: 'count' ASSIGN NUMBER;

// Lexer rules
ID: ([A-Za-z0-9]+(.[A-Za-z0-9]+)+);
STRING: '"' (' ' | ~'"')*? '"';
NUMBER: [0-9]+;
BOOLEAN: 'true' | 'false';
COLOR: '#' [0-9a-fA-F]+;
DURATION: NUMBER ('d' | 'y');
ASSIGN: '=';
LBRACE: '{';
RBRACE: '}';
LBRACKET: '[';
RBRACKET: ']';
LPAREN: '(';
RPAREN: ')';
COMMA: ',';
COLON: ':';
DOT: '.';
SLASH: '/';
WS: [ \t\r\n]+ -> skip;