---
title: PowerShell
domain: aucacoyan.hashnode.dev
tags: powershell
slug: powershell
ignorePost: false
---

PowerShell is my preferred shell in windows. Even if its not as famous as `bash` or `zsh`, powershell is useful enough. So, here are my notes.

# What is `...` syntax?

You will probably need [this short notes](https://learnxinyminutes.com/docs/powershell/)

And read [this other doc](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_operators?view=powershell-7.2) about operators (arithmetic, assignment, logical, `&`, `.`, etc.)

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

_note that if you want to replace `$PROFILE` you need to type the folder, not the ENV variable, for example:_

```shell
New-Item -ItemType HardLink -Path C:\Users\aucac\Documents\PowerShell\Microsoft.PowerShell_profile.ps1 -Target <Your personal folder>/PowerShell_profile.ps1
```

source: [this post](https://winaero.com/create-symbolic-link-windows-10-powershell/)

# How to append text from stdin to a file with PS?

You `echo "pnpm-lock.yaml" | Out-File Output_file.txt -Append` with the append flag.

---

This post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/powershell.md)
