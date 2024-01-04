---
title: PowerShell
heroImage: "../../images/powershell.png"
pubDate: "Oct 15 2022"
updatedDate: "Aug 12 2023"
description: if you want to use the terminal in Windows...
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

# Can I refresh the shell without quitting the window?

Run:

```powershell
refreshenv
```

# How to append text from stdin to a file with PS?

You `echo "pnpm-lock.yaml" | Out-File Output_file.txt -Append` with the append flag.

# You can list

The verbs with `Get-Verb`

The aliases with `Get-Alias`

or get help with

```powershell
Get-Help
help
# or
man
```

# some errors I came across and solved

```powershell
Update-Help: Failed to update Help for the module(s) 'ConfigDefenderPerformance' with UI culture(s) {en-US} : One or more errors occurred. (Response status code does not indicate success: 404 (Not Found).).
English-US help content is available and can be installed using: Update-Help -UICulture en-US.
```

This is because `Update-Help` updates both PowerShell 5 and 7 and looks for the modules in a case-sensitive way. I couldn't solve the error, but at least I found something more verbose to run:

```powershell
Update-Help -Verbose -Force -ErrorAction Continue
```

source: [StackOverflow](https://stackoverflow.com/questions/65980636/is-anybody-having-this-powershell-update-help-command-issue#comment127321723_65982117)

---

This post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/powershell.md)
