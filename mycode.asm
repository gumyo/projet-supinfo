org 100h



MOV BX, 0x200h
MOV b.DS:[BX], 0x10h

MOV AX, 0x2F0h

DIV b.DS:[BX]
MOV DS:[BX + 2],AX

MUL b.DS:[BX]
MOV DS[BX + 4],AX

ret