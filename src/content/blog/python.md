---
title: Python
heroImage: "../../images/py.png"
pubDate: "Oct 13 2022"
updatedDate: "Aug 12 2023"
description: my first language
tags: python
slug: python
ignorePost: false
---

Python is my most studied programming language, so I new a few things here and there. Here are my notes:

# Learning resources

Through my learning path, I came across with multiple resources, both good and bad. This list are my recommendations, for there are quite a few places to learn python out there in the wild.

### YouTube channels

Youtube is an excellent platform, but not without its downsides: It's so full of courses.

- [mCoding](https://www.youtube.com/@mCoding) is an excellent resource with Python and C++. James Murphy offers consulting, contracting and training of his languages with great examples and really good practices.
- [ArjanCodes](https://www.youtube.com/@ArjanCodes) is an empathic well-versed programmer. It also has a Discord which is full of interesting threads and people.
- [Anthony Sottile](https://www.youtube.com/@anthonywritescode) is a respected coder in the Python ecosystem. He streams regularly in Twitch and VODs are [uploaded in YouTube](https://www.youtube.com/channel/UChPxcypesw8L-iqltstSI4Q)

# Resources

- [This specific video](https://www.youtube.com/watch?v=cKPlPJyQrt4) by James Powell "So you want to be a Python expert" is insightful, even if you don't understand most of the features that are mentioned in the video. Watch it for the plot. The other videos by James Powell aren't very thoughtful but they can help you in a thing or two.
- Python's dunder methods, or magic methods:
  - Python magic methods are known by everyone (`__init__` for example).
  - You can find an explanation of what dunder methods are by TechWithTim [here](https://www.youtube.com/watch?v=z11P9sojHuM).
  - And Arjan talks about when not to use them [here](https://www.youtube.com/watch?v=3iJjBOne2sM).
- types, `typing`, typing anotations and more:
  - FastAPI [does an excellent job explaining](https://fastapi.tiangolo.com/python-types/) the types in python.
  - Why and when should you use type hints? [Arjan got you covered](https://www.youtube.com/watch?v=dgBCEB2jVU0).
  - How do you use implement it? How to ...? [TechWithTim](https://www.youtube.com/watch?v=QORvB-_mbZ0) has a super cool summary of `typing` library.
  - Do you also use VS Code? then [check out](https://www.youtube.com/watch?v=hHBp0r4w86g) this guide by the VS Code youtube channel.
  - Looking for a `mypy` guide? I can't recommend enough the [Tushar blogpost](https://tushar.lol/post/mypy-guide/).
  - Take a look at [`pydantic`](https://github.com/pydantic/pydantic) too, it is great

# Tools

- [`Black`](https://github.com/psf/black) is the formatter
- [`ruff`](https://github.com/astral-sh/ruff) is my preferred linter. It includes the lints from [`flake8`](https://github.com/pycqa/flake8), and [`isort`](https://pycqa.github.io/isort/)!
- You wish a `debug` print like in rust? [here, Samuel Colvin](https://python-devtools.helpmanual.io/usage/) delivered.
- writing a CLI app? take a look at [`typer`](https://github.com/tiangolo/typer)
- do you use a SQL db? make sure you read through [`sqlmodel`](https://github.com/tiangolo/sqlmodel)

- [PrettyErrors](https://github.com/onelivesleft/PrettyErrors) turns Exceptions into a beautiful poem.
- [bpython](https://www.bpython-interpreter.org/) is a colorful REPL for python. Unfortunately only works for POSIX systems.
- [Raw SQL, SQL Query Builder, or ORM?](https://www.youtube.com/watch?v=x1fCJ7sUXCM) Arjan gives a comprehensive view of all the options available.
- [FastAPI](https://fastapi.tiangolo.com/) is by far the easiest and quickiest way to build a RESTful API.

# Tips and tricks

I have loads of tips and tricks. I will try to jot them down as I remember all of them:

- you can print the variable and it's value with this syntax

```python
# if you put a variable and = after that
print(f'{str_value = }')
# prints the var and its value
# str_value = 'the contents of my variable'
```

- you can run interactively your python program like the REPL with: `python -i main.py`

source: [Python Quick Tip: Interactive Mode](https://www.youtube.com/watch?v=KjHKbmjFZLk)

This post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/src/content/blog/python.md)
