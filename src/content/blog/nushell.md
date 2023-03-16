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
