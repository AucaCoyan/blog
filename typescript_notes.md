---
title: Typescript Notes
domain: aucacoyan.hashnode.dev
subtitle: My typescript notes
tags: typescript, javascript
slug: typescript_notes
ignorePost: false
---

Here are my typescript notes:

### Typescript

The heart of typescript is in the typing objects. By doing so, you can prevent failures at build time because typescript will warn you if a type doesn't match the result.

### Functions and objects

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

this post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/typescript_notes.md)
