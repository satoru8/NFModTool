// Generated from x:/Repo/NFModTool/octdatidx/Octdat.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,102,1183,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,
2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,
7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,
34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,
7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,
48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,
2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,
63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,
7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,
77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,
2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,91,2,
92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,98,7,98,2,99,
7,99,2,100,7,100,2,101,7,101,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,
1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,
15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,
21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,
23,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,
1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,
28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
30,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,
32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,
33,1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,
36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,
39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,
1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,
41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,
1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,
44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,
1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,
46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,
1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,
48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,
1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,50,1,50,1,50,1,50,1,50,1,50,1,
50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,51,
1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,
52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,53,1,53,
1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,
54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,1,55,
1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,
55,1,56,1,56,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,
1,57,1,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,
58,1,58,1,58,1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,
1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,
60,1,60,1,60,1,60,1,60,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,
1,63,1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,
64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,
1,65,1,65,1,66,1,66,1,66,1,66,1,66,1,66,1,67,1,67,1,67,1,67,1,67,1,67,1,
68,1,68,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,69,1,70,
1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,71,1,72,1,
72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,73,1,73,1,73,1,73,1,73,1,73,1,73,
1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,75,1,
75,1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,
1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,77,1,78,1,
78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,
1,79,1,79,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,
81,1,82,1,82,1,82,1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,84,
1,84,5,84,1115,8,84,10,84,12,84,1118,9,84,1,85,1,85,1,85,5,85,1123,8,85,
10,85,12,85,1126,9,85,1,85,1,85,1,86,4,86,1131,8,86,11,86,12,86,1132,1,87,
1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,3,87,1144,8,87,1,88,1,88,4,88,1148,
8,88,11,88,12,88,1149,1,89,1,89,1,89,1,90,1,90,1,91,1,91,1,92,1,92,1,93,
1,93,1,94,1,94,1,95,1,95,1,96,1,96,1,97,1,97,1,98,1,98,1,99,1,99,1,100,1,
100,1,101,4,101,1178,8,101,11,101,12,101,1179,1,101,1,101,1,1124,0,102,1,
1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,
31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,
55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,
79,40,81,41,83,42,85,43,87,44,89,45,91,46,93,47,95,48,97,49,99,50,101,51,
103,52,105,53,107,54,109,55,111,56,113,57,115,58,117,59,119,60,121,61,123,
62,125,63,127,64,129,65,131,66,133,67,135,68,137,69,139,70,141,71,143,72,
145,73,147,74,149,75,151,76,153,77,155,78,157,79,159,80,161,81,163,82,165,
83,167,84,169,85,171,86,173,87,175,88,177,89,179,90,181,91,183,92,185,93,
187,94,189,95,191,96,193,97,195,98,197,99,199,100,201,101,203,102,1,0,7,
3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,1,0,34,34,1,0,48,57,
3,0,48,57,65,70,97,102,2,0,100,100,121,121,3,0,9,10,13,13,32,32,1189,0,1,
1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,
0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,
0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,
47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,
0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,
1,0,0,0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,
0,81,1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,
0,0,0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,
0,103,1,0,0,0,0,105,1,0,0,0,0,107,1,0,0,0,0,109,1,0,0,0,0,111,1,0,0,0,0,
113,1,0,0,0,0,115,1,0,0,0,0,117,1,0,0,0,0,119,1,0,0,0,0,121,1,0,0,0,0,123,
1,0,0,0,0,125,1,0,0,0,0,127,1,0,0,0,0,129,1,0,0,0,0,131,1,0,0,0,0,133,1,
0,0,0,0,135,1,0,0,0,0,137,1,0,0,0,0,139,1,0,0,0,0,141,1,0,0,0,0,143,1,0,
0,0,0,145,1,0,0,0,0,147,1,0,0,0,0,149,1,0,0,0,0,151,1,0,0,0,0,153,1,0,0,
0,0,155,1,0,0,0,0,157,1,0,0,0,0,159,1,0,0,0,0,161,1,0,0,0,0,163,1,0,0,0,
0,165,1,0,0,0,0,167,1,0,0,0,0,169,1,0,0,0,0,171,1,0,0,0,0,173,1,0,0,0,0,
175,1,0,0,0,0,177,1,0,0,0,0,179,1,0,0,0,0,181,1,0,0,0,0,183,1,0,0,0,0,185,
1,0,0,0,0,187,1,0,0,0,0,189,1,0,0,0,0,191,1,0,0,0,0,193,1,0,0,0,0,195,1,
0,0,0,0,197,1,0,0,0,0,199,1,0,0,0,0,201,1,0,0,0,0,203,1,0,0,0,1,205,1,0,
0,0,3,208,1,0,0,0,5,213,1,0,0,0,7,221,1,0,0,0,9,227,1,0,0,0,11,232,1,0,0,
0,13,244,1,0,0,0,15,249,1,0,0,0,17,262,1,0,0,0,19,273,1,0,0,0,21,279,1,0,
0,0,23,290,1,0,0,0,25,301,1,0,0,0,27,309,1,0,0,0,29,321,1,0,0,0,31,338,1,
0,0,0,33,345,1,0,0,0,35,365,1,0,0,0,37,373,1,0,0,0,39,379,1,0,0,0,41,389,
1,0,0,0,43,401,1,0,0,0,45,411,1,0,0,0,47,422,1,0,0,0,49,438,1,0,0,0,51,446,
1,0,0,0,53,460,1,0,0,0,55,470,1,0,0,0,57,479,1,0,0,0,59,490,1,0,0,0,61,506,
1,0,0,0,63,523,1,0,0,0,65,541,1,0,0,0,67,565,1,0,0,0,69,577,1,0,0,0,71,583,
1,0,0,0,73,592,1,0,0,0,75,607,1,0,0,0,77,621,1,0,0,0,79,633,1,0,0,0,81,651,
1,0,0,0,83,662,1,0,0,0,85,672,1,0,0,0,87,678,1,0,0,0,89,688,1,0,0,0,91,696,
1,0,0,0,93,715,1,0,0,0,95,729,1,0,0,0,97,747,1,0,0,0,99,758,1,0,0,0,101,
773,1,0,0,0,103,793,1,0,0,0,105,806,1,0,0,0,107,821,1,0,0,0,109,837,1,0,
0,0,111,851,1,0,0,0,113,867,1,0,0,0,115,873,1,0,0,0,117,885,1,0,0,0,119,
902,1,0,0,0,121,922,1,0,0,0,123,929,1,0,0,0,125,934,1,0,0,0,127,939,1,0,
0,0,129,945,1,0,0,0,131,963,1,0,0,0,133,970,1,0,0,0,135,976,1,0,0,0,137,
982,1,0,0,0,139,987,1,0,0,0,141,996,1,0,0,0,143,1004,1,0,0,0,145,1010,1,
0,0,0,147,1019,1,0,0,0,149,1028,1,0,0,0,151,1039,1,0,0,0,153,1044,1,0,0,
0,155,1058,1,0,0,0,157,1068,1,0,0,0,159,1078,1,0,0,0,161,1086,1,0,0,0,163,
1095,1,0,0,0,165,1099,1,0,0,0,167,1103,1,0,0,0,169,1112,1,0,0,0,171,1119,
1,0,0,0,173,1130,1,0,0,0,175,1143,1,0,0,0,177,1145,1,0,0,0,179,1151,1,0,
0,0,181,1154,1,0,0,0,183,1156,1,0,0,0,185,1158,1,0,0,0,187,1160,1,0,0,0,
189,1162,1,0,0,0,191,1164,1,0,0,0,193,1166,1,0,0,0,195,1168,1,0,0,0,197,
1170,1,0,0,0,199,1172,1,0,0,0,201,1174,1,0,0,0,203,1177,1,0,0,0,205,206,
5,105,0,0,206,207,5,100,0,0,207,2,1,0,0,0,208,209,5,116,0,0,209,210,5,121,
0,0,210,211,5,112,0,0,211,212,5,101,0,0,212,4,1,0,0,0,213,214,5,105,0,0,
214,215,5,110,0,0,215,216,5,104,0,0,216,217,5,101,0,0,217,218,5,114,0,0,
218,219,5,105,0,0,219,220,5,116,0,0,220,6,1,0,0,0,221,222,5,97,0,0,222,223,
5,108,0,0,223,224,5,105,0,0,224,225,5,97,0,0,225,226,5,115,0,0,226,8,1,0,
0,0,227,228,5,110,0,0,228,229,5,97,0,0,229,230,5,109,0,0,230,231,5,101,0,
0,231,10,1,0,0,0,232,233,5,100,0,0,233,234,5,101,0,0,234,235,5,115,0,0,235,
236,5,99,0,0,236,237,5,114,0,0,237,238,5,105,0,0,238,239,5,112,0,0,239,240,
5,116,0,0,240,241,5,105,0,0,241,242,5,111,0,0,242,243,5,110,0,0,243,12,1,
0,0,0,244,245,5,105,0,0,245,246,5,99,0,0,246,247,5,111,0,0,247,248,5,110,
0,0,248,14,1,0,0,0,249,250,5,109,0,0,250,251,5,111,0,0,251,252,5,100,0,0,
252,253,5,105,0,0,253,254,5,102,0,0,254,255,5,105,0,0,255,256,5,101,0,0,
256,257,5,114,0,0,257,258,5,73,0,0,258,259,5,99,0,0,259,260,5,111,0,0,260,
261,5,110,0,0,261,16,1,0,0,0,262,263,5,97,0,0,263,264,5,116,0,0,264,265,
5,116,0,0,265,266,5,114,0,0,266,267,5,105,0,0,267,268,5,98,0,0,268,269,5,
117,0,0,269,270,5,116,0,0,270,271,5,101,0,0,271,272,5,115,0,0,272,18,1,0,
0,0,273,274,5,108,0,0,274,275,5,105,0,0,275,276,5,109,0,0,276,277,5,105,
0,0,277,278,5,116,0,0,278,20,1,0,0,0,279,280,5,97,0,0,280,281,5,99,0,0,281,
282,5,116,0,0,282,283,5,105,0,0,283,284,5,118,0,0,284,285,5,97,0,0,285,286,
5,116,0,0,286,287,5,105,0,0,287,288,5,111,0,0,288,289,5,110,0,0,289,22,1,
0,0,0,290,291,5,116,0,0,291,292,5,97,0,0,292,293,5,114,0,0,293,294,5,103,
0,0,294,295,5,101,0,0,295,296,5,116,0,0,296,297,5,84,0,0,297,298,5,121,0,
0,298,299,5,112,0,0,299,300,5,101,0,0,300,24,1,0,0,0,301,302,5,97,0,0,302,
303,5,99,0,0,303,304,5,116,0,0,304,305,5,105,0,0,305,306,5,111,0,0,306,307,
5,110,0,0,307,308,5,115,0,0,308,26,1,0,0,0,309,310,5,105,0,0,310,311,5,110,
0,0,311,312,5,103,0,0,312,313,5,114,0,0,313,314,5,101,0,0,314,315,5,100,
0,0,315,316,5,105,0,0,316,317,5,101,0,0,317,318,5,110,0,0,318,319,5,116,
0,0,319,320,5,115,0,0,320,28,1,0,0,0,321,322,5,105,0,0,322,323,5,110,0,0,
323,324,5,103,0,0,324,325,5,114,0,0,325,326,5,101,0,0,326,327,5,100,0,0,
327,328,5,105,0,0,328,329,5,101,0,0,329,330,5,110,0,0,330,331,5,116,0,0,
331,332,5,67,0,0,332,333,5,111,0,0,333,334,5,108,0,0,334,335,5,111,0,0,335,
336,5,114,0,0,336,337,5,115,0,0,337,30,1,0,0,0,338,339,5,112,0,0,339,340,
5,114,0,0,340,341,5,101,0,0,341,342,5,102,0,0,342,343,5,97,0,0,343,344,5,
98,0,0,344,32,1,0,0,0,345,346,5,99,0,0,346,347,5,111,0,0,347,348,5,110,0,
0,348,349,5,115,0,0,349,350,5,117,0,0,350,351,5,109,0,0,351,352,5,97,0,0,
352,353,5,98,0,0,353,354,5,108,0,0,354,355,5,101,0,0,355,356,5,77,0,0,356,
357,5,111,0,0,357,358,5,100,0,0,358,359,5,105,0,0,359,360,5,102,0,0,360,
361,5,105,0,0,361,362,5,101,0,0,362,363,5,114,0,0,363,364,5,115,0,0,364,
34,1,0,0,0,365,366,5,99,0,0,366,367,5,114,0,0,367,368,5,97,0,0,368,369,5,
102,0,0,369,370,5,116,0,0,370,371,5,65,0,0,371,372,5,116,0,0,372,36,1,0,
0,0,373,374,5,118,0,0,374,375,5,97,0,0,375,376,5,108,0,0,376,377,5,117,0,
0,377,378,5,101,0,0,378,38,1,0,0,0,379,380,5,100,0,0,380,381,5,114,0,0,381,
382,5,111,0,0,382,383,5,112,0,0,383,384,5,83,0,0,384,385,5,111,0,0,385,386,
5,117,0,0,386,387,5,110,0,0,387,388,5,100,0,0,388,40,1,0,0,0,389,390,5,99,
0,0,390,391,5,97,0,0,391,392,5,114,0,0,392,393,5,114,0,0,393,394,5,121,0,
0,394,395,5,67,0,0,395,396,5,104,0,0,396,397,5,97,0,0,397,398,5,110,0,0,
398,399,5,99,0,0,399,400,5,101,0,0,400,42,1,0,0,0,401,402,5,109,0,0,402,
403,5,111,0,0,403,404,5,111,0,0,404,405,5,100,0,0,405,406,5,66,0,0,406,407,
5,111,0,0,407,408,5,111,0,0,408,409,5,115,0,0,409,410,5,116,0,0,410,44,1,
0,0,0,411,412,5,105,0,0,412,413,5,109,0,0,413,414,5,112,0,0,414,415,5,111,
0,0,415,416,5,114,0,0,416,417,5,116,0,0,417,418,5,97,0,0,418,419,5,110,0,
0,419,420,5,99,0,0,420,421,5,101,0,0,421,46,1,0,0,0,422,423,5,105,0,0,423,
424,5,109,0,0,424,425,5,112,0,0,425,426,5,111,0,0,426,427,5,114,0,0,427,
428,5,116,0,0,428,429,5,97,0,0,429,430,5,110,0,0,430,431,5,99,0,0,431,432,
5,101,0,0,432,433,5,82,0,0,433,434,5,97,0,0,434,435,5,110,0,0,435,436,5,
103,0,0,436,437,5,101,0,0,437,48,1,0,0,0,438,439,5,115,0,0,439,440,5,117,
0,0,440,441,5,98,0,0,441,442,5,106,0,0,442,443,5,101,0,0,443,444,5,99,0,
0,444,445,5,116,0,0,445,50,1,0,0,0,446,447,5,100,0,0,447,448,5,101,0,0,448,
449,5,102,0,0,449,450,5,101,0,0,450,451,5,99,0,0,451,452,5,116,0,0,452,453,
5,105,0,0,453,454,5,118,0,0,454,455,5,101,0,0,455,456,5,78,0,0,456,457,5,
111,0,0,457,458,5,117,0,0,458,459,5,110,0,0,459,52,1,0,0,0,460,461,5,105,
0,0,461,462,5,116,0,0,462,463,5,101,0,0,463,464,5,109,0,0,464,465,5,67,0,
0,465,466,5,108,0,0,466,467,5,97,0,0,467,468,5,115,0,0,468,469,5,115,0,0,
469,54,1,0,0,0,470,471,5,99,0,0,471,472,5,97,0,0,472,473,5,116,0,0,473,474,
5,101,0,0,474,475,5,103,0,0,475,476,5,111,0,0,476,477,5,114,0,0,477,478,
5,121,0,0,478,56,1,0,0,0,479,480,5,115,0,0,480,481,5,116,0,0,481,482,5,97,
0,0,482,483,5,99,0,0,483,484,5,107,0,0,484,485,5,76,0,0,485,486,5,105,0,
0,486,487,5,109,0,0,487,488,5,105,0,0,488,489,5,116,0,0,489,58,1,0,0,0,490,
491,5,117,0,0,491,492,5,115,0,0,492,493,5,97,0,0,493,494,5,98,0,0,494,495,
5,108,0,0,495,496,5,101,0,0,496,497,5,83,0,0,497,498,5,116,0,0,498,499,5,
97,0,0,499,500,5,99,0,0,500,501,5,107,0,0,501,502,5,83,0,0,502,503,5,105,
0,0,503,504,5,122,0,0,504,505,5,101,0,0,505,60,1,0,0,0,506,507,5,105,0,0,
507,508,5,110,0,0,508,509,5,100,0,0,509,510,5,111,0,0,510,511,5,111,0,0,
511,512,5,114,0,0,512,513,5,68,0,0,513,514,5,101,0,0,514,515,5,99,0,0,515,
516,5,97,0,0,516,517,5,121,0,0,517,518,5,65,0,0,518,519,5,102,0,0,519,520,
5,116,0,0,520,521,5,101,0,0,521,522,5,114,0,0,522,62,1,0,0,0,523,524,5,111,
0,0,524,525,5,117,0,0,525,526,5,116,0,0,526,527,5,100,0,0,527,528,5,111,
0,0,528,529,5,111,0,0,529,530,5,114,0,0,530,531,5,68,0,0,531,532,5,101,0,
0,532,533,5,99,0,0,533,534,5,97,0,0,534,535,5,121,0,0,535,536,5,65,0,0,536,
537,5,102,0,0,537,538,5,116,0,0,538,539,5,101,0,0,539,540,5,114,0,0,540,
64,1,0,0,0,541,542,5,116,0,0,542,543,5,101,0,0,543,544,5,109,0,0,544,545,
5,112,0,0,545,546,5,101,0,0,546,547,5,114,0,0,547,548,5,97,0,0,548,549,5,
116,0,0,549,550,5,117,0,0,550,551,5,114,0,0,551,552,5,101,0,0,552,553,5,
65,0,0,553,554,5,102,0,0,554,555,5,102,0,0,555,556,5,101,0,0,556,557,5,99,
0,0,557,558,5,116,0,0,558,559,5,115,0,0,559,560,5,68,0,0,560,561,5,101,0,
0,561,562,5,99,0,0,562,563,5,97,0,0,563,564,5,121,0,0,564,66,1,0,0,0,565,
566,5,99,0,0,566,567,5,111,0,0,567,568,5,109,0,0,568,569,5,109,0,0,569,570,
5,97,0,0,570,571,5,110,0,0,571,572,5,100,0,0,572,573,5,84,0,0,573,574,5,
121,0,0,574,575,5,112,0,0,575,576,5,101,0,0,576,68,1,0,0,0,577,578,5,98,
0,0,578,579,5,97,0,0,579,580,5,116,0,0,580,581,5,99,0,0,581,582,5,104,0,
0,582,70,1,0,0,0,583,584,5,97,0,0,584,585,5,98,0,0,585,586,5,115,0,0,586,
587,5,116,0,0,587,588,5,114,0,0,588,589,5,97,0,0,589,590,5,99,0,0,590,591,
5,116,0,0,591,72,1,0,0,0,592,593,5,99,0,0,593,594,5,111,0,0,594,595,5,115,
0,0,595,596,5,109,0,0,596,597,5,101,0,0,597,598,5,116,0,0,598,599,5,105,
0,0,599,600,5,99,0,0,600,601,5,80,0,0,601,602,5,114,0,0,602,603,5,101,0,
0,603,604,5,102,0,0,604,605,5,97,0,0,605,606,5,98,0,0,606,74,1,0,0,0,607,
608,5,101,0,0,608,609,5,113,0,0,609,610,5,117,0,0,610,611,5,105,0,0,611,
612,5,112,0,0,612,613,5,109,0,0,613,614,5,101,0,0,614,615,5,110,0,0,615,
616,5,116,0,0,616,617,5,83,0,0,617,618,5,108,0,0,618,619,5,111,0,0,619,620,
5,116,0,0,620,76,1,0,0,0,621,622,5,115,0,0,622,623,5,116,0,0,623,624,5,97,
0,0,624,625,5,116,0,0,625,626,5,105,0,0,626,627,5,99,0,0,627,628,5,66,0,
0,628,629,5,117,0,0,629,630,5,102,0,0,630,631,5,102,0,0,631,632,5,115,0,
0,632,78,1,0,0,0,633,634,5,101,0,0,634,635,5,113,0,0,635,636,5,117,0,0,636,
637,5,105,0,0,637,638,5,112,0,0,638,639,5,109,0,0,639,640,5,101,0,0,640,
641,5,110,0,0,641,642,5,116,0,0,642,643,5,67,0,0,643,644,5,111,0,0,644,645,
5,115,0,0,645,646,5,109,0,0,646,647,5,101,0,0,647,648,5,116,0,0,648,649,
5,105,0,0,649,650,5,99,0,0,650,80,1,0,0,0,651,652,5,99,0,0,652,653,5,111,
0,0,653,654,5,108,0,0,654,655,5,111,0,0,655,656,5,114,0,0,656,657,5,83,0,
0,657,658,5,108,0,0,658,659,5,111,0,0,659,660,5,116,0,0,660,661,5,115,0,
0,661,82,1,0,0,0,662,663,5,98,0,0,663,664,5,117,0,0,664,665,5,102,0,0,665,
666,5,102,0,0,666,667,5,83,0,0,667,668,5,99,0,0,668,669,5,97,0,0,669,670,
5,108,0,0,670,671,5,101,0,0,671,84,1,0,0,0,672,673,5,115,0,0,673,674,5,116,
0,0,674,675,5,97,0,0,675,676,5,116,0,0,676,677,5,115,0,0,677,86,1,0,0,0,
678,679,5,115,0,0,679,680,5,97,0,0,680,681,5,108,0,0,681,682,5,118,0,0,682,
683,5,97,0,0,683,684,5,103,0,0,684,685,5,101,0,0,685,686,5,65,0,0,686,687,
5,116,0,0,687,88,1,0,0,0,688,689,5,115,0,0,689,690,5,97,0,0,690,691,5,108,
0,0,691,692,5,118,0,0,692,693,5,97,0,0,693,694,5,103,0,0,694,695,5,101,0,
0,695,90,1,0,0,0,696,697,5,112,0,0,697,698,5,114,0,0,698,699,5,111,0,0,699,
700,5,103,0,0,700,701,5,114,0,0,701,702,5,101,0,0,702,703,5,115,0,0,703,
704,5,115,0,0,704,705,5,77,0,0,705,706,5,117,0,0,706,707,5,108,0,0,707,708,
5,116,0,0,708,709,5,105,0,0,709,710,5,112,0,0,710,711,5,108,0,0,711,712,
5,105,0,0,712,713,5,101,0,0,713,714,5,114,0,0,714,92,1,0,0,0,715,716,5,114,
0,0,716,717,5,101,0,0,717,718,5,115,0,0,718,719,5,101,0,0,719,720,5,97,0,
0,720,721,5,114,0,0,721,722,5,99,0,0,722,723,5,104,0,0,723,724,5,69,0,0,
724,725,5,110,0,0,725,726,5,116,0,0,726,727,5,114,0,0,727,728,5,121,0,0,
728,94,1,0,0,0,729,730,5,113,0,0,730,731,5,117,0,0,731,732,5,97,0,0,732,
733,5,108,0,0,733,734,5,105,0,0,734,735,5,116,0,0,735,736,5,121,0,0,736,
737,5,68,0,0,737,738,5,105,0,0,738,739,5,102,0,0,739,740,5,102,0,0,740,741,
5,105,0,0,741,742,5,99,0,0,742,743,5,117,0,0,743,744,5,108,0,0,744,745,5,
116,0,0,745,746,5,121,0,0,746,96,1,0,0,0,747,748,5,115,0,0,748,749,5,107,
0,0,749,750,5,105,0,0,750,751,5,108,0,0,751,752,5,108,0,0,752,753,5,67,0,
0,753,754,5,117,0,0,754,755,5,114,0,0,755,756,5,118,0,0,756,757,5,101,0,
0,757,98,1,0,0,0,758,759,5,114,0,0,759,760,5,101,0,0,760,761,5,108,0,0,761,
762,5,97,0,0,762,763,5,116,0,0,763,764,5,101,0,0,764,765,5,100,0,0,765,766,
5,83,0,0,766,767,5,117,0,0,767,768,5,98,0,0,768,769,5,106,0,0,769,770,5,
101,0,0,770,771,5,99,0,0,771,772,5,116,0,0,772,100,1,0,0,0,773,774,5,102,
0,0,774,775,5,111,0,0,775,776,5,114,0,0,776,777,5,72,0,0,777,778,5,101,0,
0,778,779,5,114,0,0,779,780,5,98,0,0,780,781,5,97,0,0,781,782,5,118,0,0,
782,783,5,111,0,0,783,784,5,114,0,0,784,785,5,101,0,0,785,786,5,65,0,0,786,
787,5,110,0,0,787,788,5,105,0,0,788,789,5,109,0,0,789,790,5,97,0,0,790,791,
5,108,0,0,791,792,5,115,0,0,792,102,1,0,0,0,793,794,5,100,0,0,794,795,5,
114,0,0,795,796,5,111,0,0,796,797,5,112,0,0,797,798,5,73,0,0,798,799,5,116,
0,0,799,800,5,101,0,0,800,801,5,109,0,0,801,802,5,84,0,0,802,803,5,121,0,
0,803,804,5,112,0,0,804,805,5,101,0,0,805,104,1,0,0,0,806,807,5,100,0,0,
807,808,5,114,0,0,808,809,5,111,0,0,809,810,5,112,0,0,810,811,5,73,0,0,811,
812,5,116,0,0,812,813,5,101,0,0,813,814,5,109,0,0,814,815,5,67,0,0,815,816,
5,104,0,0,816,817,5,97,0,0,817,818,5,110,0,0,818,819,5,99,0,0,819,820,5,
101,0,0,820,106,1,0,0,0,821,822,5,115,0,0,822,823,5,104,0,0,823,824,5,97,
0,0,824,825,5,114,0,0,825,826,5,101,0,0,826,827,5,100,0,0,827,828,5,77,0,
0,828,829,5,97,0,0,829,830,5,116,0,0,830,831,5,101,0,0,831,832,5,114,0,0,
832,833,5,105,0,0,833,834,5,97,0,0,834,835,5,108,0,0,835,836,5,115,0,0,836,
108,1,0,0,0,837,838,5,108,0,0,838,839,5,101,0,0,839,840,5,110,0,0,840,841,
5,103,0,0,841,842,5,116,0,0,842,843,5,104,0,0,843,844,5,77,0,0,844,845,5,
105,0,0,845,846,5,110,0,0,846,847,5,117,0,0,847,848,5,116,0,0,848,849,5,
101,0,0,849,850,5,115,0,0,850,110,1,0,0,0,851,852,5,99,0,0,852,853,5,111,
0,0,853,854,5,111,0,0,854,855,5,108,0,0,855,856,5,100,0,0,856,857,5,111,
0,0,857,858,5,119,0,0,858,859,5,110,0,0,859,860,5,77,0,0,860,861,5,105,0,
0,861,862,5,110,0,0,862,863,5,117,0,0,863,864,5,116,0,0,864,865,5,101,0,
0,865,866,5,115,0,0,866,112,1,0,0,0,867,868,5,114,0,0,868,869,5,97,0,0,869,
870,5,110,0,0,870,871,5,103,0,0,871,872,5,101,0,0,872,114,1,0,0,0,873,874,
5,97,0,0,874,875,5,117,0,0,875,876,5,116,0,0,876,877,5,111,0,0,877,878,5,
69,0,0,878,879,5,110,0,0,879,880,5,101,0,0,880,881,5,109,0,0,881,882,5,105,
0,0,882,883,5,101,0,0,883,884,5,115,0,0,884,116,1,0,0,0,885,886,5,115,0,
0,886,887,5,116,0,0,887,888,5,97,0,0,888,889,5,116,0,0,889,890,5,117,0,0,
890,891,5,115,0,0,891,892,5,69,0,0,892,893,5,102,0,0,893,894,5,102,0,0,894,
895,5,101,0,0,895,896,5,99,0,0,896,897,5,116,0,0,897,898,5,78,0,0,898,899,
5,97,0,0,899,900,5,109,0,0,900,901,5,101,0,0,901,118,1,0,0,0,902,903,5,115,
0,0,903,904,5,116,0,0,904,905,5,97,0,0,905,906,5,116,0,0,906,907,5,117,0,
0,907,908,5,115,0,0,908,909,5,69,0,0,909,910,5,102,0,0,910,911,5,102,0,0,
911,912,5,101,0,0,912,913,5,99,0,0,913,914,5,116,0,0,914,915,5,77,0,0,915,
916,5,105,0,0,916,917,5,110,0,0,917,918,5,117,0,0,918,919,5,116,0,0,919,
920,5,101,0,0,920,921,5,115,0,0,921,120,1,0,0,0,922,923,5,101,0,0,923,924,
5,102,0,0,924,925,5,102,0,0,925,926,5,101,0,0,926,927,5,99,0,0,927,928,5,
116,0,0,928,122,1,0,0,0,929,930,5,115,0,0,930,931,5,101,0,0,931,932,5,108,
0,0,932,933,5,102,0,0,933,124,1,0,0,0,934,935,5,115,0,0,935,936,5,116,0,
0,936,937,5,97,0,0,937,938,5,116,0,0,938,126,1,0,0,0,939,940,5,100,0,0,940,
941,5,101,0,0,941,942,5,108,0,0,942,943,5,116,0,0,943,944,5,97,0,0,944,128,
1,0,0,0,945,946,5,109,0,0,946,947,5,105,0,0,947,948,5,110,0,0,948,949,5,
117,0,0,949,950,5,116,0,0,950,951,5,101,0,0,951,952,5,115,0,0,952,953,5,
84,0,0,953,954,5,111,0,0,954,955,5,77,0,0,955,956,5,97,0,0,956,957,5,116,
0,0,957,958,5,117,0,0,958,959,5,114,0,0,959,960,5,105,0,0,960,961,5,116,
0,0,961,962,5,121,0,0,962,130,1,0,0,0,963,964,5,102,0,0,964,965,5,105,0,
0,965,966,5,108,0,0,966,967,5,116,0,0,967,968,5,101,0,0,968,969,5,114,0,
0,969,132,1,0,0,0,970,971,5,99,0,0,971,972,5,111,0,0,972,973,5,117,0,0,973,
974,5,110,0,0,974,975,5,116,0,0,975,134,1,0,0,0,976,977,5,99,0,0,977,978,
5,111,0,0,978,979,5,108,0,0,979,980,5,111,0,0,980,981,5,114,0,0,981,136,
1,0,0,0,982,983,5,112,0,0,983,984,5,97,0,0,984,985,5,116,0,0,985,986,5,104,
0,0,986,138,1,0,0,0,987,988,5,98,0,0,988,989,5,101,0,0,989,990,5,104,0,0,
990,991,5,97,0,0,991,992,5,118,0,0,992,993,5,105,0,0,993,994,5,111,0,0,994,
995,5,114,0,0,995,140,1,0,0,0,996,997,5,112,0,0,997,998,5,104,0,0,998,999,
5,121,0,0,999,1000,5,115,0,0,1000,1001,5,105,0,0,1001,1002,5,99,0,0,1002,
1003,5,115,0,0,1003,142,1,0,0,0,1004,1005,5,110,0,0,1005,1006,5,97,0,0,1006,
1007,5,109,0,0,1007,1008,5,101,0,0,1008,1009,5,115,0,0,1009,144,1,0,0,0,
1010,1011,5,109,0,0,1011,1012,5,97,0,0,1012,1013,5,116,0,0,1013,1014,5,101,
0,0,1014,1015,5,114,0,0,1015,1016,5,105,0,0,1016,1017,5,97,0,0,1017,1018,
5,108,0,0,1018,146,1,0,0,0,1019,1020,5,115,0,0,1020,1021,5,116,0,0,1021,
1022,5,97,0,0,1022,1023,5,116,0,0,1023,1024,5,78,0,0,1024,1025,5,97,0,0,
1025,1026,5,109,0,0,1026,1027,5,101,0,0,1027,148,1,0,0,0,1028,1029,5,109,
0,0,1029,1030,5,117,0,0,1030,1031,5,108,0,0,1031,1032,5,116,0,0,1032,1033,
5,105,0,0,1033,1034,5,112,0,0,1034,1035,5,108,0,0,1035,1036,5,105,0,0,1036,
1037,5,101,0,0,1037,1038,5,114,0,0,1038,150,1,0,0,0,1039,1040,5,103,0,0,
1040,1041,5,111,0,0,1041,1042,5,111,0,0,1042,1043,5,100,0,0,1043,152,1,0,
0,0,1044,1045,5,109,0,0,1045,1046,5,97,0,0,1046,1047,5,115,0,0,1047,1048,
5,107,0,0,1048,1049,5,77,0,0,1049,1050,5,97,0,0,1050,1051,5,116,0,0,1051,
1052,5,101,0,0,1052,1053,5,114,0,0,1053,1054,5,105,0,0,1054,1055,5,97,0,
0,1055,1056,5,108,0,0,1056,1057,5,115,0,0,1057,154,1,0,0,0,1058,1059,5,109,
0,0,1059,1060,5,97,0,0,1060,1061,5,116,0,0,1061,1062,5,101,0,0,1062,1063,
5,114,0,0,1063,1064,5,105,0,0,1064,1065,5,97,0,0,1065,1066,5,108,0,0,1066,
1067,5,115,0,0,1067,156,1,0,0,0,1068,1069,5,114,0,0,1069,1070,5,101,0,0,
1070,1071,5,102,0,0,1071,1072,5,101,0,0,1072,1073,5,114,0,0,1073,1074,5,
101,0,0,1074,1075,5,110,0,0,1075,1076,5,99,0,0,1076,1077,5,101,0,0,1077,
158,1,0,0,0,1078,1079,5,102,0,0,1079,1080,5,111,0,0,1080,1081,5,114,0,0,
1081,1082,5,109,0,0,1082,1083,5,117,0,0,1083,1084,5,108,0,0,1084,1085,5,
97,0,0,1085,160,1,0,0,0,1086,1087,5,109,0,0,1087,1088,5,111,0,0,1088,1089,
5,100,0,0,1089,1090,5,105,0,0,1090,1091,5,102,0,0,1091,1092,5,105,0,0,1092,
1093,5,101,0,0,1093,1094,5,114,0,0,1094,162,1,0,0,0,1095,1096,5,109,0,0,
1096,1097,5,105,0,0,1097,1098,5,110,0,0,1098,164,1,0,0,0,1099,1100,5,109,
0,0,1100,1101,5,97,0,0,1101,1102,5,120,0,0,1102,166,1,0,0,0,1103,1104,5,
105,0,0,1104,1105,5,116,0,0,1105,1106,5,101,0,0,1106,1107,5,109,0,0,1107,
1108,5,84,0,0,1108,1109,5,121,0,0,1109,1110,5,112,0,0,1110,1111,5,101,0,
0,1111,168,1,0,0,0,1112,1116,7,0,0,0,1113,1115,7,1,0,0,1114,1113,1,0,0,0,
1115,1118,1,0,0,0,1116,1114,1,0,0,0,1116,1117,1,0,0,0,1117,170,1,0,0,0,1118,
1116,1,0,0,0,1119,1124,5,34,0,0,1120,1123,5,32,0,0,1121,1123,8,2,0,0,1122,
1120,1,0,0,0,1122,1121,1,0,0,0,1123,1126,1,0,0,0,1124,1125,1,0,0,0,1124,
1122,1,0,0,0,1125,1127,1,0,0,0,1126,1124,1,0,0,0,1127,1128,5,34,0,0,1128,
172,1,0,0,0,1129,1131,7,3,0,0,1130,1129,1,0,0,0,1131,1132,1,0,0,0,1132,1130,
1,0,0,0,1132,1133,1,0,0,0,1133,174,1,0,0,0,1134,1135,5,116,0,0,1135,1136,
5,114,0,0,1136,1137,5,117,0,0,1137,1144,5,101,0,0,1138,1139,5,102,0,0,1139,
1140,5,97,0,0,1140,1141,5,108,0,0,1141,1142,5,115,0,0,1142,1144,5,101,0,
0,1143,1134,1,0,0,0,1143,1138,1,0,0,0,1144,176,1,0,0,0,1145,1147,5,35,0,
0,1146,1148,7,4,0,0,1147,1146,1,0,0,0,1148,1149,1,0,0,0,1149,1147,1,0,0,
0,1149,1150,1,0,0,0,1150,178,1,0,0,0,1151,1152,3,173,86,0,1152,1153,7,5,
0,0,1153,180,1,0,0,0,1154,1155,5,61,0,0,1155,182,1,0,0,0,1156,1157,5,123,
0,0,1157,184,1,0,0,0,1158,1159,5,125,0,0,1159,186,1,0,0,0,1160,1161,5,91,
0,0,1161,188,1,0,0,0,1162,1163,5,93,0,0,1163,190,1,0,0,0,1164,1165,5,40,
0,0,1165,192,1,0,0,0,1166,1167,5,41,0,0,1167,194,1,0,0,0,1168,1169,5,44,
0,0,1169,196,1,0,0,0,1170,1171,5,58,0,0,1171,198,1,0,0,0,1172,1173,5,46,
0,0,1173,200,1,0,0,0,1174,1175,5,47,0,0,1175,202,1,0,0,0,1176,1178,7,6,0,
0,1177,1176,1,0,0,0,1178,1179,1,0,0,0,1179,1177,1,0,0,0,1179,1180,1,0,0,
0,1180,1181,1,0,0,0,1181,1182,6,101,0,0,1182,204,1,0,0,0,8,0,1116,1122,1124,
1132,1143,1149,1179,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class OctdatLexer extends antlr4.Lexer {

    static grammarFileName = "Octdat.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'id'", "'type'", "'inherit'", "'alias'", 
                         "'name'", "'description'", "'icon'", "'modifierIcon'", 
                         "'attributes'", "'limit'", "'activation'", "'targetType'", 
                         "'actions'", "'ingredients'", "'ingredientColors'", 
                         "'prefab'", "'consumableModifiers'", "'craftAt'", 
                         "'value'", "'dropSound'", "'carryChance'", "'moodBoost'", 
                         "'importance'", "'importanceRange'", "'subject'", 
                         "'defectiveNoun'", "'itemClass'", "'category'", 
                         "'stackLimit'", "'usableStackSize'", "'indoorDecayAfter'", 
                         "'outdoorDecayAfter'", "'temperatureAffectsDecay'", 
                         "'commandType'", "'batch'", "'abstract'", "'cosmeticPrefab'", 
                         "'equipmentSlot'", "'staticBuffs'", "'equipmentCosmetic'", 
                         "'colorSlots'", "'buffScale'", "'stats'", "'salvageAt'", 
                         "'salvage'", "'progressMultiplier'", "'researchEntry'", 
                         "'qualityDifficulty'", "'skillCurve'", "'relatedSubject'", 
                         "'forHerbavoreAnimals'", "'dropItemType'", "'dropItemChance'", 
                         "'sharedMaterials'", "'lengthMinutes'", "'cooldownMinutes'", 
                         "'range'", "'autoEnemies'", "'statusEffectName'", 
                         "'statusEffectMinutes'", "'effect'", "'self'", 
                         "'stat'", "'delta'", "'minutesToMaturity'", "'filter'", 
                         "'count'", "'color'", "'path'", "'behavior'", "'physics'", 
                         "'names'", "'material'", "'statName'", "'multiplier'", 
                         "'good'", "'maskMaterials'", "'materials'", "'reference'", 
                         "'formula'", "'modifier'", "'min'", "'max'", "'itemType'", 
                         null, null, null, null, null, null, "'='", "'{'", 
                         "'}'", "'['", "']'", "'('", "')'", "','", "':'", 
                         "'.'", "'/'" ];
	static symbolicNames = [ null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, null, null, null, 
                          null, null, null, null, null, "ID", "STRING", 
                          "NUMBER", "BOOLEAN", "COLOR", "DURATION", "ASSIGN", 
                          "LBRACE", "RBRACE", "LBRACKET", "RBRACKET", "LPAREN", 
                          "RPAREN", "COMMA", "COLON", "DOT", "SLASH", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", 
                      "T__7", "T__8", "T__9", "T__10", "T__11", "T__12", 
                      "T__13", "T__14", "T__15", "T__16", "T__17", "T__18", 
                      "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
                      "T__25", "T__26", "T__27", "T__28", "T__29", "T__30", 
                      "T__31", "T__32", "T__33", "T__34", "T__35", "T__36", 
                      "T__37", "T__38", "T__39", "T__40", "T__41", "T__42", 
                      "T__43", "T__44", "T__45", "T__46", "T__47", "T__48", 
                      "T__49", "T__50", "T__51", "T__52", "T__53", "T__54", 
                      "T__55", "T__56", "T__57", "T__58", "T__59", "T__60", 
                      "T__61", "T__62", "T__63", "T__64", "T__65", "T__66", 
                      "T__67", "T__68", "T__69", "T__70", "T__71", "T__72", 
                      "T__73", "T__74", "T__75", "T__76", "T__77", "T__78", 
                      "T__79", "T__80", "T__81", "T__82", "T__83", "ID", 
                      "STRING", "NUMBER", "BOOLEAN", "COLOR", "DURATION", 
                      "ASSIGN", "LBRACE", "RBRACE", "LBRACKET", "RBRACKET", 
                      "LPAREN", "RPAREN", "COMMA", "COLON", "DOT", "SLASH", 
                      "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

OctdatLexer.EOF = antlr4.Token.EOF;
OctdatLexer.T__0 = 1;
OctdatLexer.T__1 = 2;
OctdatLexer.T__2 = 3;
OctdatLexer.T__3 = 4;
OctdatLexer.T__4 = 5;
OctdatLexer.T__5 = 6;
OctdatLexer.T__6 = 7;
OctdatLexer.T__7 = 8;
OctdatLexer.T__8 = 9;
OctdatLexer.T__9 = 10;
OctdatLexer.T__10 = 11;
OctdatLexer.T__11 = 12;
OctdatLexer.T__12 = 13;
OctdatLexer.T__13 = 14;
OctdatLexer.T__14 = 15;
OctdatLexer.T__15 = 16;
OctdatLexer.T__16 = 17;
OctdatLexer.T__17 = 18;
OctdatLexer.T__18 = 19;
OctdatLexer.T__19 = 20;
OctdatLexer.T__20 = 21;
OctdatLexer.T__21 = 22;
OctdatLexer.T__22 = 23;
OctdatLexer.T__23 = 24;
OctdatLexer.T__24 = 25;
OctdatLexer.T__25 = 26;
OctdatLexer.T__26 = 27;
OctdatLexer.T__27 = 28;
OctdatLexer.T__28 = 29;
OctdatLexer.T__29 = 30;
OctdatLexer.T__30 = 31;
OctdatLexer.T__31 = 32;
OctdatLexer.T__32 = 33;
OctdatLexer.T__33 = 34;
OctdatLexer.T__34 = 35;
OctdatLexer.T__35 = 36;
OctdatLexer.T__36 = 37;
OctdatLexer.T__37 = 38;
OctdatLexer.T__38 = 39;
OctdatLexer.T__39 = 40;
OctdatLexer.T__40 = 41;
OctdatLexer.T__41 = 42;
OctdatLexer.T__42 = 43;
OctdatLexer.T__43 = 44;
OctdatLexer.T__44 = 45;
OctdatLexer.T__45 = 46;
OctdatLexer.T__46 = 47;
OctdatLexer.T__47 = 48;
OctdatLexer.T__48 = 49;
OctdatLexer.T__49 = 50;
OctdatLexer.T__50 = 51;
OctdatLexer.T__51 = 52;
OctdatLexer.T__52 = 53;
OctdatLexer.T__53 = 54;
OctdatLexer.T__54 = 55;
OctdatLexer.T__55 = 56;
OctdatLexer.T__56 = 57;
OctdatLexer.T__57 = 58;
OctdatLexer.T__58 = 59;
OctdatLexer.T__59 = 60;
OctdatLexer.T__60 = 61;
OctdatLexer.T__61 = 62;
OctdatLexer.T__62 = 63;
OctdatLexer.T__63 = 64;
OctdatLexer.T__64 = 65;
OctdatLexer.T__65 = 66;
OctdatLexer.T__66 = 67;
OctdatLexer.T__67 = 68;
OctdatLexer.T__68 = 69;
OctdatLexer.T__69 = 70;
OctdatLexer.T__70 = 71;
OctdatLexer.T__71 = 72;
OctdatLexer.T__72 = 73;
OctdatLexer.T__73 = 74;
OctdatLexer.T__74 = 75;
OctdatLexer.T__75 = 76;
OctdatLexer.T__76 = 77;
OctdatLexer.T__77 = 78;
OctdatLexer.T__78 = 79;
OctdatLexer.T__79 = 80;
OctdatLexer.T__80 = 81;
OctdatLexer.T__81 = 82;
OctdatLexer.T__82 = 83;
OctdatLexer.T__83 = 84;
OctdatLexer.ID = 85;
OctdatLexer.STRING = 86;
OctdatLexer.NUMBER = 87;
OctdatLexer.BOOLEAN = 88;
OctdatLexer.COLOR = 89;
OctdatLexer.DURATION = 90;
OctdatLexer.ASSIGN = 91;
OctdatLexer.LBRACE = 92;
OctdatLexer.RBRACE = 93;
OctdatLexer.LBRACKET = 94;
OctdatLexer.RBRACKET = 95;
OctdatLexer.LPAREN = 96;
OctdatLexer.RPAREN = 97;
OctdatLexer.COMMA = 98;
OctdatLexer.COLON = 99;
OctdatLexer.DOT = 100;
OctdatLexer.SLASH = 101;
OctdatLexer.WS = 102;



