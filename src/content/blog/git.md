---
title: git
heroImage: "/images/git.png"
domain: aucacoyan.hashnode.dev
description: Distributed is the new centralized
pubDate: "Jul 01 2022"
tags: git
slug: git
ignorePost: false
---

`git` is such an amazing piece of software. It has some complexity to understand it, but once it clicks, you cannot live without it.

# Learning resources

The best tutorial I found of git is the playlist [Git and Github for poets - The Coding Train](https://www.youtube.com/watch?v=BCQHnlnPusY&list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV). For real, git is normally not explained clearly to beginners and Daniel Shiffman does a great job here.

Also, there are a couple sites that worth checking:

- [This response of Stackoverflow](https://stackoverflow.com/a/3690796/8552476) is clear and concise.
- [An excellent git cheatsheet per area](https://ndpsoftware.com/git-cheatsheet.html#loc=index).
- [Which has also a decision tree on how to resolve a git mess](http://justinhileman.info/article/git-pretty/git-pretty.png).
- Bitbucket [has a good guide on how to resolve merge conflicts](https://support.atlassian.com/bitbucket-cloud/docs/resolve-merge-conflicts/).
- This [article has](https://marklodato.github.io/visual-git-guide/index-en.html) a nice longer explanation.
- This explains [what is `origin`](https://medium.com/tech-journey-with-anna/what-is-origin-in-git-894e3701dbe1)
- A more advanced resource, the [FreeCAD wiki has a good overview about the source code management](https://wiki.freecadweb.org/Source_code_management).

# Using `git`

### You should use standard git commit messages

Like this:

```sh
$ git log --oneline -5 --author pwebb --before "Sat Aug 30 2014"

5ba3db6 Fix failing CompositePropertySourceTests
84564a0 Rework @PropertySource early parsing logic
e142fd1 Add tests for ImportSelector meta-data
887815f Update docbook dependency and generate epub
ac8326d Polish mockito usage
```

[This](https://cbea.ms/git-commit/) is a nice article explaining the why.

[This](https://dev.to/timmybytes/keeping-git-commit-messages-consistent-with-a-custom-template-1jkm?signin=true) is a blog post explaining the how.

If you want a reminder, you can check this [GitHub Gist](https://gist.github.com/lisawolderiksen/a7b99d94c92c6671181611be1641c733#using-git-commit-message-templates-to-write-better-commit-messages) about setting up a `.gitmessage` file.

### clean the merged branches from your local

For POSIX compliant OSes

```sh
git branch -d $(git branch --merged=master | grep -v master)
git fetch ---prune
```

source: [this medium post](https://medium.com/@FlorentDestrema/a-simple-way-to-clean-up-your-git-project-branches-283b87478fbc)

if you have `nushell` shell installed

```sh
git branch --merged | lines | where $it !~ '\*' | str trim | where $it != 'master' and $it != 'main' | each { |it| git branch -d $it } 
```

source: [this script](https://github.com/nushell/nu_scripts/blob/e60d20733e86b3fde6b7a596bab4ee6c14d4e3dc/sourced/cool-oneliners/git_gone.nu)

### delete a branch locally and in the remote

```sh
// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName
```

### instead you want to delete a file which is currently tracked?

Of course you can do
```sh
rm .\this-file.txt
# and then
git add .\this-file.txt
```

but

```sh
git rm .\this-file.txt --cached
```
does the same.
The `--cached` part does delete the file from the index (adding it to staging area of the next commit), but doesn't delete the file on your computer.

### Keep the file on the repo, but don't track newer changes

That's `git update-index –skip-worktree file1.txt` is for

### you can see the differences with a specific commit

```sh
git diff 5eba8a
```

### create a new branch and switch to it

instead of doing

```sh
git branch -b newFeature
git switch newFeature
```

you can do

```sh
git checkout newFeature
```

### branches

```sh
git branch -m oldName newName               # rename a branch
git branch -d goodbye_branch                # delete a branch locally
git push origin --delete goodbye_branch     # delete a remote branch
git branch                                  # list local branches
git branch -a                               # list all branches (local and remote)
```

### did you make changes in main?

Don't worry, `git stash` is here to rescue

```
git stash

git checkout correctBranch
git checkout -b ifYouWantToCreateANewBranch

git stash pop
```

If you don't want the stash anymore, you can `git stash drop` to delete the topmost stash.

### do you want to roll back git changes?

All right, easy. There is always a solution:

If you want to throw away all the changes on the current status and return to HEAD, write:

```sh
git reset --hard HEAD
```

Or, if you want to change history and leave a note that you did it, the `revert` command will create a commit that reverts the changes of the commit passed to the terminal. You can use it to revert the last commit like this:

```sh
git revert <commit hash to revert>
```

source: [git revert commit - how to undo the last commit](https://www.freecodecamp.org/news/git-revert-commit-how-to-undo-the-last-commit/)

# Tips and tricks

### Make your log history prettier

Instead of `git log` and scroll away the changes, use:

```sh
git log --graph --pretty=format:'%C(bold red)%an%C(reset) - %C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white) %C(bold cyan)%d%C(reset)'
```

source: [this](https://blog.scottnonnenberg.com/better-git-configuration/#alias) blog post.

Speaking of which...

### Show `git diff` with style

Install [`delta`](https://github.com/dandavison/delta) and copy [this](https://github.com/dandavison/delta#get-started) into your home user `~./gitconfig` file.

![delta sample](https://user-images.githubusercontent.com/52205/87230973-412eb900-c381-11ea-8aec-cc200290bd1b.png)

### also, you can see the diffs with the commits messages

with

```sh
git show
```

### you can use shortcuts to checkout "next-to-last" commit

Instead of `git checkout main`

```sh
# ^ means 'first parent commit,' therefore the second-most recent commit in the main branch
git checkout main^

# If it's a merge commit, with more than one parent, this gets the second parent
git checkout main^2

# Same thing as three ^ characters - three 'first-parent' steps up the tree
git checkout main~3

# The first commit prior to a day ago
git checkout main@{yesterday}

# The first commit prior to 5 minutes ago
git checkout main@{5.minutes.ago}
```

source: [here](https://blog.scottnonnenberg.com/better-git-configuration/#bonus-more-revisions)

# Tools

### You can convert markdown task lists into issues in GitHub

see [source](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/about-task-lists#creating-task-lists)

### RepoZ is a pretty nice software

![RepoZ gif](https://raw.githubusercontent.com/awaescher/RepoZ/master/_doc/QuickNavigation.gif)
[https://github.com/awaescher/RepoZ](https://github.com/awaescher/RepoZ)

this post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/src/content/blog/git.md)
