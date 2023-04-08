---
title: nushell
heroImage: "/images/nushell.png"
description: use a shell newer than 20 years old
pubDate: "Jul 01 2022"
---

I like `nushell` because it works the same on all the operative systems. Something kind of obvious in the present date, but still unaddressed in some circumstances.

## You want to extract a piece of info from a `json` file

Get all the script from the package.json

```
open package.json | get scripts
```

List all the apps from the file `scoop-list.json` and get the key `apps`

```
open scoop-list.json | get 'apps'
```

source: [documentation](https://www.nushell.sh/book/loading_data.html#opening-files)

## get a fancy history commands menu with `fzf`

run:

```
commandline (history | each { |it| $it.command } | uniq | reverse | str join  (char nl) | fzf --tiebreak=chunk --layout=reverse  --multi --preview='echo {..}' --preview-window='bottom:3:wrap' --height=70% -q (commandline) | decode utf-8 | str trim)
```

source: [`nushell` discord](https://discord.com/channels/601130461678272522/615253963645911060/1093077154473975868)

## if you have a json output

try to pipe it with `| from json`
```
scoop export | from json
```

