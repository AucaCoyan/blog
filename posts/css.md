---
title: css
domain: aucacoyan.hashnode.dev
subtitle: my notes on css
tags: css, css3, design, web development
slug: css
ignorePost: false
---

### Here are my notes on CSS. You will find tips, tricks, and some good other resources (videos, sites and more). Suggestions are welcome!

## Debugging in css

Putting lines or shades in elements helps you to debug issues in CSS, for example, lines:

```css
* {
  box-sizing: border-box;
  outline: 1px solid limegreen !important;
}
```

And shades

```css
* {
  box-sizing: border-box;
  background: rgb(0 100 0 / 0.05) !important;
}
```

source: [The console.log() of css](https://www.youtube.com/shorts/ii-lSK2_Nu4)

## Tips on CSS

**If you are learning CSS, it's better to learn plain CSS first**. I know, there are many better ways and shortcuts like Tailwind and Bootstrap, but CSS remains king as any processor translate to plain CSS language. So, if you have problems with a CSS framework, you won't be able to fix the if you don't know CSS.

Having said that, after you know the meaning of some lines, it's cool to use a framework, which is the bread and butter of your daily work on the subject.

### Other random tips I found interesting

- Firefox dev tools are orders of magnitude better than Chrome dev tools when it comes to CSS. Take advantage of that.

## Replace `@media` queries for `clamp()`

For a good responsive design, you usually do `@media` queries, like this:

```css
article {
  width: 50%;
}
@media only screen and (max-width: 600px) {
  article {
    width: 200px;
  }
}
@media only screen and (max-width: 1200px) {
  article {
    width: 800px;
  }
}
```

But if you intend to do that for every piece of CSS code, you would shoot yourself in the foot.

Instead, do this:

```css
article {
  width: clamp(200px, 50%, 600px);
}
```

... which corresponds to minimum, preferred and max

source: [10 CSS Pro Tips - Code this, NOT that!](https://www.youtube.com/watch?v=Qhaz36TZG5Y&ab_channel=Fireship)

## Flexbox vs Grid

Good video comparisons here:

- [Kevin Powell: Flexbox or grid - How to decide?](https://www.youtube.com/watch?v=3elGSZSWTbM&ab_channel=KevinPowell)

- [Web dev simplified - Flexbox](https://www.youtube.com/watch?v=fYq5PXgSsbE&ab_channel=WebDevSimplified)

- [CodelyTV - floats, flexbox and grid](https://www.youtube.com/watch?v=UBoEXXzjUw4)

## Create an invisible skip link

If you want to have a link to skip to the main content, you can do this on the html:

```html
<body>
  <header>
    ...
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <main id="main-content">...</main>
  </header>
</body>
```

and in the CSS

```css
// the outline
// :not selector is for excluding the skip-link class
:not(.skip-link):focus {
  outline: 5px solid red;
}

.skip-link {
  position: fixed;
  text-align: center;
  background-color: #333;
  color: white;
  padding: 0.5rem;
  translate: 0 -100%; // hides the link by default
  transition: translate 150ms ease-in-out; // toggles the animation
}

.skip-link:focus {
  translate: 0;
}
```

source: [Web Dev Simplified - Why Does Nearly Every Site Have This “Invisible Unclickable“ Link?](https://www.youtube.com/watch?v=VUR0I5mqq7I)

---

this post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/css.md)
