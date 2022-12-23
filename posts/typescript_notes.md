---
title: Typescript Notes
socialImage: images/ts.png
domain: aucacoyan.hashnode.dev
subtitle: My typescript notes
tags: typescript, javascript
slug: typescript_notes
ignorePost: false
---

Here are my typescript notes:

# Typescript

The heart of typescript is in the typing objects. By doing so, you can prevent failures at build time because typescript will warn you if a type doesn't match the result.

Do you want yo learn the basics? I can recommend [this live with Matt Pocock](https://www.youtube.com/watch?v=p6dO9u0M7MQ)

## Functions and objects

The difference between this

```typescript
function LikeButton(param1, param2) {}
```

and this (note the `({})` )

```typescript
function LikeButton({ param1, param2 }) {}
```

is that the parameters _are an object_ inside the declaration of the function. This way you can group parameters and add personalized types (as interfaces). Like this:

```typescript
interface IProps {
  handleLike: () => void;
  handleDislike: () => void;
}

function LikeButton({ handleLike, handleDislike }: IProps) {}
```

## Adding auto-completion to config files

If you ever read this:

```typescript
/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
```

That is a special comment saying: "this below should abide by the `preset-classic` types.

You should `npm install --save-dev @docusaurus/preset-classic` to have the nice auto-completion 😉.

## Do I use Interfaces or Types?

It doesn't matter for the most part.

If you want the details, check the source: [Harry Wolff - Interfaces vs Types](https://www.youtube.com/watch?v=crjIq7LEAYw)

## Sort your imports with `prettier-plugin-sorted`

I really like `isort` for python, so I found an equivalent with [`prettier-plugin-sorted`](https://github.com/ifiokjr/prettier-plugin-sorted)

this post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/typescript_notes.md)
