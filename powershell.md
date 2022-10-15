---
title: PowerShell
domain: aucacoyan.hashnode.dev
tags: powershell
slug: powershell
ignorePost: false
---

PowerShell is my preferred shell in windows. Even if its not as famous as `bash` or `zsh`, powershell is useful enough. So, here are my notes.

# Create hard links

Hard links are some of the most useful features I found in an OS. To create a single file hard link

```powershell
New-Item -ItemType HardLink -Path "link" -Target "target"
```

our process starts in the `link` file and ends at the `target` destination. Keep in mind that the `link` must not exist at the moment of creating the hard link.

For a folder link:

```powershell
New-Item -ItemType Junction -Path "link" -Target "target"
```

`link` and `target` behave the same.

source: [this post](https://winaero.com/create-symbolic-link-windows-10-powershell/)

---

This post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/powershell.md)
