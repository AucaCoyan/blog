---
title: Readability counts!
heroImage: "/images/readability.png"
domain: aucacoyan.hashnode.dev
description: Make your eyes actually read the code
tags: General Programming, beginners, Developer, learning, Tutorial
slug: readability_counts
cover: https://imgs.search.brave.com/p4Od25-2sFZNCdkNsTqqisIgw_aqlAM-DFptIGBBZcw/rs:fit:600:180:1/g:ce/aHR0cHM6Ly93d3cu/ZG14em9uZS5jb20v/ZG93bmxvYWRzL2lt/YWdlcy9yZWFkYWJs/ZV9jb2RlLnBuZw
ignorePost: false
pubDate: "Jul 01 2022"
---

Many times I code and either read code written by others that is painfully hard to understand at glance, or I write things that are ... unpronounceable, to say the least.
Let me get this straight:

<div align="center">

# Readability counts

</div>

Yes, I know, you already read the title and the first paragraph. Why? because [code is read more often than it's written](https://skeptics.stackexchange.com/questions/48560/is-code-read-more-often-than-its-written).
But bear with me, let me give you some examples, to what extent this is important and it will impact the quality of your code, your job as well as your other workmates who code with you:

Let's say you need to do some work on a list, in python. You can certainly do a list comprehension:

```python
fish_tuple = ('blowfish', 'swordfish', 'catfish', 'octopus')

fish_list = [fish for fish in fish_tuple if fish != 'octopus']

print(fish_list)
```

Now, did you understood fast and clearly what I intend to do? Ok, lets rephrase it into this:

```python
fish_tuple = ('blowfish', 'swordfish', 'catfish', 'octopus')

for fish in fish_tuple:
    if fish != 'octopus':
        fish_list.append(fish)

print(fish_list)
```

Do you agree that this is more pythonic? What about some beginner or mid-level python programmer? Do you think that it's clear enough?
You see, I now I jumped from 1 line to 3 lines. Again, think in readability vs shortened the code: is it useful to flourish the code using features just because you are able to?.

I believe code should be always readable, and maintain the door open to everyone who is starting to read code (and possibly writing it too).

Let's take another example in javascript, a component is it clear this way:

```javascript
export default function MyButtonComponent() {
  return <div>Component text</div>;
}
```

or better this way?

```javascript
const MyButtonComponent = () => {
  return <div>Component text</div>;
};

export default MyButtonComponent;
```

This second is a more a nuisance than a clear sample, so give me a minute to explain:
What you want to do here is essentially a _function_. On the second snippet, [it's an arrow function, not a basic function](https://stackoverflow.com/questions/39582318/export-const-arrow-function-or-basic-function), so it's actually not the same thing, but are you really going to use the `const MyButtonComponent` anywhere else? Do you see the usefulness of announcing functions as functions, and variables (as in _space in memory values_) as `const vars`?
It makes the code clean, easy to understand, practical and way better to check with common sense.

So, please, the next time you need to do a list comprehension on python, or any other flourish function in any other language, re-check if it is absolutely needed

this post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/readability_counts.md)
