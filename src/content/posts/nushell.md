---
title: nushell
heroImage: "./images/nushell.png"
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

## use `help` to help you

The command `help` of nushell have syntax coloring and a few goodies, but you should generate first the options, types and descriptions. (Checkout the nushell community, there are high chances that they have done it already!)

`help git push` outputs
```
Check out git branches and files


Usage:
  > git checkout {flags} ...(targets)

Flags:
  --conflict <String> - conflict style (merge or diff3)
  -d, --detach - detach HEAD at named commit
  -f, --force - force checkout (throw away local modifications)
  --guess - second guess 'git checkout <no-such-branch>' (default)
  --ignore-other-worktrees - do not check if another worktree is holding the given ref
  --ignore-skip-worktree-bits - do not limit pathspecs to sparse entries only
  -m, --merge - perform a 3-way merge with the new branch
  --orphan <String> - new unparented branch
  -2, --ours - checkout our version for unmerged files
  --overlay - use overlay mode (default)
  --overwrite-ignore - update ignored files (default)
  -p, --patch - select hunks interactively
  --pathspec-from-file <String> - read pathspec from file
  --progress - force progress reporting
  -q, --quiet - suppress progress reporting
  --recurse-submodules <String> - control recursive updating of submodules
  -3, --theirs - checkout their version for unmerged files
  -t, --track - set upstream info for new branch
  -b <String> - create and checkout a new branch
  -B <String> - create/reset and checkout a branch
  -l - create reflog for new branch
  --help - Display the help message for this command

Parameters:
  ...targets <string>: name of the branch or files to checkout
```

which comes from the code:

```
export extern "git checkout" [

    --conflict: string                              # conflict style (merge or diff3)
    --detach(-d)                                    # detach HEAD at named commit
    --force(-f)                                     # force checkout (throw away local modifications)
```
This lists the descriptions for options, and the types (`<String>` for `--conflict` and so on)

```
export extern "git checkout" [
    ...targets: string@"nu-complete git branches"   # name of the branch or files to checkout
etc
```

and after the `@` runs the function `nu-complete git branches` after you press `TAB` in the place you get `targets`
