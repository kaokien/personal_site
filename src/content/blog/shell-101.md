---
title: 'Shell 101'
date: '2022-04-24'
description: 'What actually happens when you type ls *.c in the terminal. A look at how the shell interprets wildcards.'
tags: ['Engineering', 'Linux']
---

# What happens when you type ls \*.c

![Shell terminal](https://miro.medium.com/max/1400/1*dklmQ3JUzx9AVlNMqwQ2Kg.jpeg)

The very first time one uses a terminal on mac or unix based operating system they are likely to find their way to the **ls** command. The purpose of the command is to list all files and subdirectories contained in a directory. The command **man ls** provides a breakdown of all the features available to **ls** and how to use them.

The next item to focus on is **\***. The asterisk plays an important role in what the **ls \*.c** command will do. **\*** is considered a wildcard which unlike what the name conveys actually provides a lot of simplicity in searching for specific files. What the command does in combination with .c is scour the files and subdirectories in the the current working directly that end in .c
