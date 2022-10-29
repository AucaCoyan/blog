---
title: git
socialImage: images/git.png
domain: aucacoyan.hashnode.dev
subtitle: Distributed is the new centralized
tags: git
slug: git
ignorePost: false
---

git is such an amazing piece of software. It has some complexity to understand it, but once it clicks, you cannot live without it.

The best tutorial I found of git is the playlist [Git and Github for poets - The Coding Train](https://www.youtube.com/watch?v=BCQHnlnPusY&list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV). Really, git is normally not clearly explained for beginners and Daniel Shiffman does a great job here.

Also, there are a couple sites that worth checking:

- [This response of Stackoverflow](https://stackoverflow.com/a/3690796/8552476) is clear and concise.
- [An excellent git cheatsheet per area](https://ndpsoftware.com/git-cheatsheet.html#loc=index).
- [Which has also a decision tree on how to resolve a git mess](http://justinhileman.info/article/git-pretty/git-pretty.png).
- Bitbucket [has a good guide on how to resolve merge conflicts](https://support.atlassian.com/bitbucket-cloud/docs/resolve-merge-conflicts/).
- This [article has](https://marklodato.github.io/visual-git-guide/index-en.html) a nice longer explanation.
- This explains [what is `origin`](https://medium.com/tech-journey-with-anna/what-is-origin-in-git-894e3701dbe1)
- A more advanced resource, the [FreeCAD wiki has a good overview about the source code management](https://wiki.freecadweb.org/Source_code_management).

# Make your log history prettier

Instead of `git log` and scroll away the changes, use:

```sh
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'
```

source: [this](https://blog.scottnonnenberg.com/better-git-configuration/#alias) blog post.

Speaking of which...

# you should use standard git commit messages

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

# Show `git diff` with style

Install [`delta`](https://github.com/dandavison/delta) and copy [this](https://github.com/dandavison/delta#get-started) into your home user `~./gitconfig` file.

![](https://user-images.githubusercontent.com/52205/87230973-412eb900-c381-11ea-8aec-cc200290bd1b.png)

# also, you can see the diffs with the commits messages

with

```sh
git show
```

# you can use shortcuts to checkout "next-to-last" commit

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

source: [this too](https://blog.scottnonnenberg.com/better-git-configuration/#bonus-more-revisions)

# clean the merged branches from your local

For POSIX compliant OSes

```sh
git branch -d $(git branch --merged=master | grep -v master)
git fetch ---prune
```

source: [this medium post](https://medium.com/@FlorentDestrema/a-simple-way-to-clean-up-your-git-project-branches-283b87478fbc)

# delete a branch locally and in the remote

```sh
// delete branch locally
git branch -d localBranchName

// delete branch remotely
git push origin --delete remoteBranchName
```

# you can see the differences with a specific commit

```sh
git diff 5eba8a
```

# create a new branch and switch to it

instead of doing

```sh
git branch -b newFeature
git switch newFeature
```

you can do

```sh
git checkout newFeature
```

# branches

```sh
git branch -m oldName newName               # rename a branch
git branch -d goodbye_branch                # delete a branch locally
git push origin --delete goodbye_branch     # delete a remote branch
git branch                                  # list local branches
git branch -a                               # list all branches (local and remote)
```

# did you make changes in main?

Don't worry, `git stash` is here to rescue

```
git stash

git checkout correctBranch
git checkout -b ifYouWantToCreateANewBranch

git stash pop
```

# RepoZ is a pretty nice software

![](https://raw.githubusercontent.com/awaescher/RepoZ/master/_doc/QuickNavigation.gif)
[https://github.com/awaescher/RepoZ](https://github.com/awaescher/RepoZ)

this post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/git.md)
