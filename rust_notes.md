---
title: Rust notes
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
- [This other post by Brandon Smith](https://www.brandons.me/blog/why-rust-strings-seem-hard) talks about `strings` in rust. For devs coming from every popular languages except C or C++, strings are easy to work with. By comparison, strings in rust are a tough cookie.

### How do _I_ learn rust?

I saw the entire playlist of **No Boilerplate**, just get my feet warm and then with codewars, start to resolve simple katas and learn as I go.

If you are curious about my advance. [Here](http://github.com/AucaCoyan/exp-rust) is the repository on github.

### tips and tricks in rust

There is a macro to sign work in progress in your code, without breaking the complier (like a `pass` equivalent from Python).

```rust
todo!()
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

Install cargo-watch with

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

---

This post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/rust_notes.md)
