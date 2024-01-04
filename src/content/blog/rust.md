---
title: Rust
pubDate: "Oct 05 2022"
updatedDate: "Sep 27 2023"
heroImage: "../../images/rust.png"
description: my favorite language
tags: rust
slug: rust
---

The core features of rust are:

- Performance
- Reliability
- Productivity

### Learning resources

As always, I will leave here my 2 cents in the crazy big book called the world wild web.

- [No Boilerplate](https://www.youtube.com/playlist?list=PLZaoyhMXgBzoM9bfb5pyUOT3zjnaDdSEP) has an amazing playlist explaining concepts from the beginning and getting you excited to learn rust. You can't stop binge watching!
- [This other post by Brandon Smith](https://www.brandons.me/blog/why-rust-strings-seem-hard) talks about strings in rust. For devs coming from every popular languages except C or C++, `strings` are easy to work with. By comparison, strings in rust are a tough cookie.
- [Let's get Rust did an amazing video on string types](https://www.youtube.com/watch?v=CpvzeyzgQdw). I recommend it if you have doubts!.
- [The book has a good summary on collections (vectors, lists, maps, etc)](https://doc.rust-lang.org/std/collections/index.html)
- A good alternative to the Rust Book is the [Learning Rust page](https://learning-rust.github.io/docs/).
- If you want to start with tokio (and you should, because it's used _everywhere_) you can peek at [this recommendations](https://youtu.be/ycMiMDHopNc?t=4993)
- For idioms, design patterns, and anti-patterns it's good [to check this book](https://rust-unofficial.github.io/patterns/intro.html) by the `rust-unofficial` organization.

### _really_ good cheatsheets

- [The best cheatsheet](https://cheats.rs/) I found on the web.

### How do _I_ learn rust?

I saw [the entire playlist of **No Boilerplate**](https://www.youtube.com/playlist?list=PLZaoyhMXgBzoM9bfb5pyUOT3zjnaDdSEP), just get my feet warm and then with codewars, start to resolve simple katas and learn as I go.

If you are curious about my advance. [Here](http://github.com/AucaCoyan/exp-rust) is the repository on github.

### tips and tricks in rust

- You need to write code that won't be used in a short time and don't like to recieve warnings? write this at the top of your program:

```rust
#![allow(unused)]
```

- There is a macro to sign work in progress in your code, without breaking the complier (like a `pass` equivalent from Python).

```rust
todo!()
```

source: [Let's get rusty - Prototyping in Rust with the todo!() macro](https://www.youtube.com/watch?v=KdPVCGfZ8sI)

- You can have an `Enum` with an implementation for just one (or some) of the types. You'll have to use `traits` and `impl` on your enum.

  source (and explanation): [StackOverflow](https://stackoverflow.com/questions/68740420/can-a-rust-enum-use-methods-implemented-on-one-of-its-variants)

- you can include a static string from a file with `include_string!("file.txt")`

  source: [rust std docs](https://doc.rust-lang.org/std/macro.include_str.html)

### Inline hints

You can enable and disable suggestions and inline hints in VS Code.

source:[Toggle your Rust Analyzer Inlay Hints](https://www.youtube.com/watch?v=wBTAMLp-gnc)

# Databases

- [This video from Let's get Rusty does an amazing job on Rust databases](https://www.youtube.com/watch?v=FW4oUXHly8c), please watch it before starting your project if you have the minimal need of a db.

As a sumup table, I have found these packages of interest

| package        | type            | async | connection pool |
| -------------- | --------------- | ----- | --------------- |
| `rusqlite`     | driver          | ❌    | ❌              |
| `redis`        | driver          | ❌    | ❌              |
| `mongodb`      | driver          | ❌    | ❌              |
| `mysql_common` | driver          | ❌    | ❌              |
| `mysql_async`  | driver          | ✅    | ❌              |
| `scylla`       | driver          | ❌    | ❌              |
| `postgres`     | driver          | ❌    | ❌              |
| `sled`         | driver          | ✅    | ❌              |
| `sqlx`         | driver          | ✅    | ✅              |
| `diesel`       | ORM             | ❌    | ❌              |
| `sea-orm`      | ORM             | ✅    | ✅              |
| `sea-query`    | query builder   | ✅    | ❌              |
| `r2d2`         | connection pool | ✅    | ✅              |

# testing

If you want to feel confident of your product, you need to test it.

- [Jorge does a great job](https://www.youtube.com/watch?v=_jDKeOtOiEo) at explaining testing in rust. Also gives a couple of good tips for advanced users!
- [next-test](https://nexte.st/) is a better `cargo test` than the default. Try it and see what it looks like.
- add coverage with [`cargo grcov`](https://docs.rs/crate/grcov/0.4.3).

# `cargo` section

Cargo is the package manager and a lot more in rust. Here is a tldr on how to use it

```sh
cargo build           # to build the project
cargo run             # to run the project. It builds it if it's not built yet
cargo check           # is a great form to call the compiler to check your code
cargo build --release # to build the project with a lot of optimizations
```

## How rustup manages versions and what is a toolchain

As I read [this `rustup` book](https://rust-lang.github.io/rustup/index.html), it explains a couple of things about `rustup`

- it can manage rust `channels` (versions of rust) like `stable or beta or nightly`. (Same as NodeJS `nvm` or Python `pyenv`)
- you can add or specify `targets` (architectures) like linux-64x, mac, windows, etc.
- components are like `tools` that rustup installs. Here are `cargo`, `rust-analyzer`, `clippy` and so on.

# linters

## `clippy` is your friend

[`clippy`](https://doc.rust-lang.org/clippy/usage.html) is a linter to catch common errors and mistakes in rust (kinda like `flake8` in python).

You can enable [categories](https://doc.rust-lang.org/clippy/index.html) or enable simple lints to check your code. See the [complete list of lints here](https://rust-lang.github.io/rust-clippy/master/index.html)

    TODO:
    I'd be nice if I can make 2 configs of clippy:
    - one for general fixing, looking for broad fixes
    - and one for detailing and setup for production (delete all errors allowance, skips, etc)

# `bacon` crate is just amazing

[`bacon`](https://dystroy.org/bacon/) crate is a hot-reload checker for rust with incredible defaults. If you want hot-reload, try `bacon` first, and then `cargo-watch`.

source: [No Boilerplate - Build your lightsaber](https://youtu.be/ifaLk5v3W90?t=255)

# Rust hot-reload is available with the crate `cargo-watch`

**You have to install it!** Install cargo-watch with

```sh
cargo install cargo-watch
```

and watch your changes on your rust code with:

```sh
cargo watch --exec run
```

to have simply hot reload, and if you want the quieter version:

```sh
cargo watch --quiet --clear --exec 'run --quiet'
```

##### bonus tip

If you are currently in a `parent` folder with many sub projects, you can run a folder like this:

```
parent/
|-sub_project/
| |-hello.rs
|-sub_project2/
  |-other_file.rs
```

```sh
cargo watch --quiet --clear --exec 'run --quiet --subproject hello'
```

source: [Jeremy Chrone - Quiet hot reload with `cargo watch -q`](https://www.youtube.com/watch?v=xewU1E8fuQM)

# To check your dependencies, you can use `cargo-outdated`

If you see the readme of [`cargo-outdated`](https://github.com/kbknapp/cargo-outdated) you can see this when you run

```
cargo outdated

Name             Project  Compat  Latest   Kind         Platform
----             -------  ------  ------   ----         --------
clap             2.20.0   2.20.5  2.26.0   Normal       ---
clap->bitflags   0.7.0    ---     0.9.1    Normal       ---
clap->libc       0.2.18   0.2.29  Removed  Normal       ---
clap->term_size  0.2.1    0.2.3   0.3.0    Normal       ---
clap->vec_map    0.6.0    ---     0.8.0    Normal       ---
num_cpus         1.6.0    ---     1.6.2    Development  ---
num_cpus->libc   0.2.18   0.2.29  0.2.29   Normal       ---
pkg-config       0.3.8    0.3.9   0.3.9    Build        ---
term             0.4.5    ---     0.4.6    Normal       ---
term_size->libc  0.2.18   0.2.29  0.2.29   Normal       cfg(not(target_os = "windows"))
```

Which is nice to have.

# do you want to sync the docstring with the README.md of the project?

Try [cargo-readme](https://github.com/livioribeiro/cargo-readme)

Look it working [here](https://youtu.be/ycMiMDHopNc?t=3899)

# problems I came across at some point

If you see this problem while compiling a new library on the terminal:

```
error occurred: Failed to find tool. Is `gcc.exe` installed? (see https://github.com/alexcrichton/cc-rs#compile-time-requirements for help)
```

The best guide out there is a StackOverflow answer [here](https://stackoverflow.com/a/72646362/8552476)

# some language features

- there are something similar to PEPs in python, but in Rust. They are called [RFCs - requests for comments](https://github.com/rust-lang/rfcs)
- it has [its own forum](https://internals.rust-lang.org/) where many brilliant discussions are formed

---

This post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/rust_notes.md)
