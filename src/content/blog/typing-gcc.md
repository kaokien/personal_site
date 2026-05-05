---
title: 'Typing GCC main.c in the Terminal'
date: '2022-04-25'
description: 'What actually happens under the hood when you compile a C file with GCC. Breaking down the four stages of compilation.'
tags: ['Engineering', 'C']
---

# Typing GCC main.c in the Terminal

![GCC compilation](https://miro.medium.com/max/1400/1*kgo7WVa7z1b3yEGUAOqW4w.jpeg)

GCC stands for GNU compiler collection which is a compiler system produced by the GNU project that supports a variety of languages. When this command is used to compile a .c file a lot happens underneath the hood that most are not privy to, but today I will break down each step.

The first step of the compiler is **pre-processing** which has three steps that it must operate on.

_(The -E flag tells gcc to stop at pre-processing)_ **_gcc -E main.c_**

1.  The pre-processor takes all the header files and includes them into the source.
2.  The macros names get replaced with their definitions.
3.  All comments include in the code gets removed.

After these steps of pre-processing occur we now move onto the second step of the compiler which is **compiling.** During this part of the program it is converted into assembly code.

_(The -S flag tells gcc stop at compiling)_ **_gcc -S main.c_**

Unfortunately the computer is still unable to understand **assembly code** which is essentially plain-text that uses mnemonics to create an almost 1:1 analog with machine instructions. In order to convert this still human like code, another element of the GCC compiler springs to actions; the **assembler.** During this process the output from compilation produces an assembly listing and the output is stored in an object file.

The fourth and final step **linking** takes files or libraries and links them into the program to create a single executable file.

So what happens when you enter **gcc main.c** into the terminal? Our file main.c will go through all 4 steps of the compiler and a single executable file in machine code to be interpreted by your computer.

![GCC process diagram](https://miro.medium.com/max/1400/1*F-wEvvqlYRZOTxYj17M0-Q.jpeg)
