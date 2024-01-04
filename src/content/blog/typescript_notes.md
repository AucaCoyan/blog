---
title: "Typescript"
heroImage: "../../images/ts.png"
description: "My typescript notes"
tags: typescript, javascript
slug: typescript_notes
ignorePost: false
pubDate: "Aug 31 2022"
updatedDate: "Aug 12 2023"
---

Here are my typescript notes:

# Typescript

The heart of typescript is in the typing objects. By doing so, you can prevent failures at build time because typescript will warn you if a type doesn't match the result.

Do you want yo learn the basics? I can recommend [this live with Matt Pocock](https://www.youtube.com/watch?v=p6dO9u0M7MQ)

## What is `Zod`

It is a superset of of typescript that enable you to specify types of typescript with a schema and some additional configurations.[Learn it here with WebDevSimplified](https://www.youtube.com/watch?v=9UVPk0Ulm6U)

## What is `tRPC`

It is a form to send and recieve types through an API. [Here](https://www.youtube.com/watch?v=lxnPMB0Jc7E) is explained by WebDevSimplified

## I prefer normal functions over arrow functions most of the time

[This](https://www.youtube.com/watch?v=5iGGvJn8K1U) video explains it clearly.

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

It doesn't matter for the most part. For the record, I use interfaces.

If you want the details, check the source: [Harry Wolff - Interfaces vs Types](https://www.youtube.com/watch?v=crjIq7LEAYw)

## Sort your imports with `prettier-plugin-sorted`

I really like `isort` for python, so I found an equivalent with [`prettier-plugin-sorted`](https://github.com/ifiokjr/prettier-plugin-sorted)

## what the heck is `Pick`, `Omit`, `Exclude`, `Extract` and `Awaited`? (and more)

These are "pick-able" types. See [this](https://www.youtube.com/watch?v=EU0TB_8KHpY) video.

# Common errors

## `Node-gyp` error

solved in [StackOverflow](https://stackoverflow.com/a/59882818/8552476)

this post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/typescript_notes.md)
