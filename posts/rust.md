---
title: Rust
socialImage: images/rust.png
domain: aucacoyan.hashnode.dev
tags: rust
slug: rust
ignorePost: false
---

### Rust

The core features of rust are:

- Performance
- Reliability
- Productivity

### Learning resources

As always, I will leave here my 2 cents in the crazy big book called the world wild web.

- [No Boilerplate](https://www.youtube.com/playlist?list=PLZaoyhMXgBzoM9bfb5pyUOT3zjnaDdSEP) has an amazing playlist explaining concepts from the beginning and getting you excited to learn rust. You can't stop binge watching!
- [This other post by Brandon Smith](https://www.brandons.me/blog/why-rust-strings-seem-hard) talks about strings in rust. For devs coming from every popular languages except C or C++, `strings` are easy to work with. By comparison, strings in rust are a tough cookie.
- [The book has a good summary on collections (vectors, lists, maps, etc)](https://doc.rust-lang.org/std/collections/index.html)
- [This video from Let's get Rusty does an amazing job on Rust databases](https://www.youtube.com/watch?v=FW4oUXHly8c), please watch it before starting your project if you have the minimal need of a db.
- A good alternative to the Rust Book is the [Learning Rust page](https://learning-rust.github.io/docs/).

### _really_ good cheatsheets

- [The best cheatsheet](https://cheats.rs/) I found on the web.

### How do _I_ learn rust?

I saw the entire playlist of **No Boilerplate**, just get my feet warm and then with codewars, start to resolve simple katas and learn as I go.

If you are curious about my advance. [Here](http://github.com/AucaCoyan/exp-rust) is the repository on github.

### tips and tricks in rust

There is a macro to sign work in progress in your code, without breaking the complier (like a `pass` equivalent from Python).

```rust
todo!()
```

source: [Let's get rusty - Prototyping in Rust with the todo!() macro](https://www.youtube.com/watch?v=KdPVCGfZ8sI)

# `cargo` section

Cargo is the package manager and a lot more in rust. Here is a tldr on how to use it

```sh
cargo build           # to build the project
cargo run             # to run the project. It builds it if it's not built yet
cargo check           # is a great form to call the compiler to check your code
cargo build --release # to build the project with a lot of optimizations
```

# How rustup manages versions and what is a toolchain

As I read [this `rustup` book](https://rust-lang.github.io/rustup/index.html), it explains a couple of things about `rustup`

- it can manage rust `channels` (versions of rust) like `stable or beta or nightly`. (Same as NodeJS `nvm` or Python `pyenv`)
- you can add or specify `targets` (architectures) like linux-64x, mac, windows, etc.
- components are like `tools` that rustup installs. Here are `cargo`, `rust-analyzer`, `clippy` and so on.

# `clippy` is your friend

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

##### bonus tip!

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

# problems I came across at some point

If you see this problem while compiling a new library on the terminal:

```
error occurred: Failed to find tool. Is `gcc.exe` installed? (see https://github.com/alexcrichton/cc-rs#compile-time-requirements for help)
```

The best guide out there is a StackOverflow answer [here](https://stackoverflow.com/a/72646362/8552476)

# take input from the user with `stdin`

```rust
use std::io::stdin;

fn main() {
    let mut name = String::new();
    println!("Please enter your name >");
    stdin().read_line(&mut name).expect("Failed input");
    println!("Hello {}", name);
}
```

I'm not sure how or why I need to use `read_line`, or `expect`. I will study those later.

---

This post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/rust_notes.md)
