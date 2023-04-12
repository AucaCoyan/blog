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

source: [stackoverflow](https://stackoverflow.com/questions/6109882/regex-match-all-characters-between-two-strings)

- You can even use [regex in CSS](https://www.youtube.com/shorts/_1uS0_rgj14)

