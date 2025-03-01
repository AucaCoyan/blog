---
title: My tools
heroImage: "../../images/tools.png"
domain: aucacoyan.hashnode.dev
description: My favorite tools to develop everyday
pubDate: "Jun 15 2022"
updatedDate: "Aug 12 2023"
tags: python, vscode, tools
---

> Update Feb-2025:
This is really old, I changed much of this tools for others. I'll update it when
I have a sec!

I have many tools which easy my work (almost) everyday, here are a few of them.
I'll promise I'll update if a new toy comes to the playground!

## My IDE

- 🧰 My IDE: [VS Code](https://code.visualstudio.com/)

### 📓 and its Extensions

- 🖌️ Theme: [Shades of Purple](https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple)
  ![img](https://cdn.hashnode.com/res/hashnode/image/upload/v1657642760203/rGiW18dDd.png?auto=compress)
- ▶️ Vim shortcuts (a MUST have!) : [Vim](https://marketplace.visualstudio.com/publishers/vscodevim)
- ⏲️ Track your time while you develop: [WakaTime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime)
- 🔍 Better highlight the errors and warnings [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

- My Shell config is always up to date in in my [dotfiles](https://github.com/AucaCoyan/dotfiles) repo, but here is a quick rundown:

  - On Windows I use [nushell](https://www.nushell.sh/) in [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701), with a customized theme
  - On Ubuntu I use [Fish shell](https://fishshell.com/), also with some [touched settings](https://github.com/AucaCoyan/dotfiles/tree/main/.config/fish)

## Terminal Apps

As for the CLI tools, if available, I prefer tools developed in Rust, because usually runs in every OS flawlessly, nonetheless I also have many others:

- `pipx` for the global tools in python (`black`, `flake8`, `pipenv`, `mypy`, `pre-commit`, `all-repos`, etc).
- [Github CLI](https://github.com/cli/cli) is amazing.
- [Gitlab also has a CLI](https://gitlab.com/gitlab-org/cli).

- I use [`scoop`](scoop.sh/) package manager a lot.
- [`ripgrep`](https://github.com/BurntSushi/ripgrep) is your faster, better, stronger grep (and runs in Windows!)
- [`exa`](https://github.com/ogham/exa) a modern replacement for `ls`. (Works on linux tho). (Works only on linux tho)
- For Windows PowerShell I use [Terminal-Icons](https://github.com/devblackops/Terminal-Icons)
  ![terminal-icons preview](https://raw.githubusercontent.com/devblackops/Terminal-Icons/main/media/screenshot.png)
- [`bat`](https://github.com/sharkdp/bat) a cat clone, but better.

- I also use a series of apps to manage versions of common tools, like:
  - [`pyenv-win`](https://github.com/pyenv-win/pyenv-win) to manage python versions (so you can select which version python and manage installations).
  - [`fnm` (fast NodeJS Manager)](https://github.com/Schniz/fnm) is a NodeJS version manager written in Rust. Yes, you need that.
  - You want something to watch your files for changes and excecute a command when detect a difference? [`watchfiles`] got you covered
