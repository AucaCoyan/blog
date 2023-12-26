---
title: The layers of the Web
heroImage: "./images/layers_web.png"
domain: aucacoyan.hashnode.dev
description: HTML, CSS and JS are all you can touch and see
pubDate: "Jul 01 2022"
tags: html, css, javascript
slug: layers_of_the_web
ignorePost: false
---

The web browsers only know 3 languages, and those are HTML, CSS and Javascript. No matter which framework, library or module you are using, chances are that the module compiles to a couple of files that every browser can understand and run in every OS.

Those 3 technologies are many years old and they have been transformed over and over to satisfy the historically important needs (and continue to do it today).

Many of the features that were useful in the past, are now likely an annoyance or uncomfortable to work with and maintain with good quality.

That's why there are so many tools that "ease" the work with the browser-native languages.

Every framework compiles to one or many of the triad:

- [ReactJS](https://reactjs.org/) makes repeatable components so you don't have to manually manage JS in states with logic and helps you to stay [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).
- [Sass](https://sass-lang.com/) is a preprocessor that converts special `.scss` or `.sass` files into `.css` files, so you can use more advanced techniques like variables, mixins, functions, and more. _Special note: CSS got upgraded and now supports some of the features that Sass brought to the table a while ago_
- [typescript](https://www.typescriptlang.org/) is a superset of javascript that adds support to types and type checking in your IDE. So you know something is wrong even before you try in the browser.

As another layer of complexity, not every browser support the same HTML, CSS and javascript features, [there are sites](https://caniuse.com/mdn-css_at-rules_media_prefers-color-scheme_no-preference) to show you compatibility by browser type and version.

This post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/layers_of_the_web.md).
