---
title: 'Hard and Soft Links'
date: '2022-04-25'
description: 'Breaking down the difference between hard links and soft links in Unix, and when to use each.'
tags: ['Engineering', 'Linux']
---

# Differences Between Hard link and Soft link

![Hard and soft links diagram](https://miro.medium.com/max/1028/1*u7HhTpzlyUlcK_fNPwKVqQ.jpeg)

In order to discuss the difference between Hard and Soft links, it is necessary to break down an essential component of each link. **Inode** is a data structure that stores all the information about files such as owner, permissions, file creation date, etc. **Inodes** do not store file names, it assigns a unique identifier called inode number to each file.

A **hard link** directly links two files in the same file system, to identify itself it uses the same inode number. In order to create a hard link one should use the "**ln"** command to create another file to link to the original. Since a hard link is a carbon copy it will have the same contents and have the same owner and permissions. The removal of the original file will not impact the hard link and it will continue to exist.

A **soft or symbolic link** is a shortcut to the original link. When a file is accessed through a **s**oft link**,** you are redirected to the target link from a path written by the soft link. The easiest way to look at a soft link is to think of a bookmark on a browser. When you bookmark a page you give yourself an easy way to connect to a website. The bookmark is dependent on the content on the webpage and any edit or change on the bookmark will have no effect on the actual content on the webpage. If the webpage goes down the bookmark will then become invalid. The command to create a soft link is "**ln -s**". Due to the similarities of both **ln** and **ln -s** I heavily recommend reading the man page.

To summarize hard links do not require extra space but any edit to a hard link will reflect in the original file. Soft links do need extra space but any change in the soft link will not affect the original file. Each link has it's own use case that I hope you find value in your coding journey.

![Links comparison diagram](https://miro.medium.com/max/1400/1*s5z0bxRt-hwFQxFE4jhHbg.png)
