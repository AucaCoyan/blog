---
title: Module Bundlers
heroImage: "./images/bundlers.png"
description: Module Bundlers
pubDate: "Jul 01 2022"
tags: webpack, modules, javascript
slug: module_bundlers
ignorePost: false
---

I still don't understand well enough module bundlers (I mean, who does it?). But here are some resources and some notes that I took in my way to achieve an understanding.

[Li Hau Tan](https://www.youtube.com/c/lihautan) is the core maintainer of Svelte, so he can know a thing or two about this topic.

- [Li Hau Tan - Introduction to module bundlers](https://www.youtube.com/watch?v=mEvIyjo_A9w) is a good introduction to what is a module bundler at all. He also has a [ELI5 in 3 steps](https://www.youtube.com/watch?v=iOYO2dKBYow)

# Module Bundlers

AFAIK, these are the available module bundlers

- [Webpack](https://webpack.js.org/), is the most popular, used and oldest of all.
- [Rollup](https://rollupjs.org/guide/en/) is an alternative. Similar to webpack.
- [Vite](https://vitejs.dev/) is another alternative focused on bundling tiny JS files, instead of one big file. The browser can route to each file when needed, so the site theoretically loads faster.
- [Parcel](https://parceljs.org/) is yet another alternative, with focus in zero config to run the most popular file types used in web development. As it written in Rust, it competes to be the fastest module bundler available.
- [esbuild](https://esbuild.github.io/) is yet another module bundler built with go, which gives this package a tremendous jump in terms of speed.
- [turbo](https://turbo.build/) is the new guy in the neighborhood, and is [_fast_](https://turbo.build/pack/docs/comparisons/turbopack-vs-vite)
- [Snowpack](https://github.com/FredKSchott/snowpack#readme) is yet another popular framework, but it was deprecated in April 2022.

Videos to watch:

- [Li Hau Tan - esbuild](https://www.youtube.com/watch?v=tz1CZV1-lYc)

This post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/module_bundlers.md).
