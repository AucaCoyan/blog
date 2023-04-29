---
title: Regex
heroImage: "/images/regex.png"
description: the most powerful text search engine
pubDate: "Mar 12 2023"
---

Regex (regular expressions) is such an amazing technology. It's the most popular (and certainly powerful) text search engine.


### Links

- As a learning resource, [RegexOne](https://regexone.com/) guides you with excercises and is a great pratise tool.
- [regex tutorials](http://regextutorials.com/index.html) has a tutorial and nice excercises too.
- [regexr.com](https://regexr.com/) is my goto website for testing expressions. [Regex101](https://regex101.com/) is  a close second website if you prefer something different.
- Visually, [this Dev.to guide](https://dev.to/amitness/a-visual-guide-to-regular-expression-i3) is brief and to the point.
- If you want a kind-of-but-not-really documentation, [regular-exresions.info](https://www.regular-expressions.info/quickstart.html) may help advanced users.


### How to:

- Match all the caracters between 2 strings

```sh
# expression
(?<=This is)(.*)(?=sentence)
# this matches
This is "just a simple" sentence
```

The pattern looked closely:
```sh
(?<=\s|^)         #to look behind the match
(stackoverflow)   #the string you want. () optional
(?=\s|$)          #to look ahead.
```

source: [StackOverflow](https://stackoverflow.com/questions/6109882/regex-match-all-characters-between-two-strings)

- You can even use [regex in CSS](https://www.youtube.com/shorts/_1uS0_rgj14)

### Apps

- For CLI, [ripgrep](https://github.com/BurntSushi/ripgrep) is king. It also has [ripgrep-all](https://github.com/phiresky/ripgrep-all) (unrelated to rg) that search among pdf, docx, sqlite, jpg, movie subtitles and more.
    - you have [the guide here](https://github.com/BurntSushi/ripgrep/blob/master/GUIDE.md)
- Do you want a GUI? [here](https://regex-vis.com/). You are welcome.
- If you want to go the other way, you can [provide the cases, and `grex` will infer the regex expression](https://github.com/pemistahl/grex)

