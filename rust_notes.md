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
- [This other post by Brandon Smith](https://www.brandons.me/blog/why-rust-strings-seem-hard) talks about strings in rust. For devs coming from every popular languages except C or C++, strings are easy to work with. By comparison, strings in rust are a tough cookie.

### How do _I_ learn rust?

I saw the entire playlist of **No Boilerplate**, just get my feet warm and then with codewars, start to resolve simple katas an learn as I go.

If you are curious about my advance. [Here](http://github.com/AucaCoyan/exp-rust) is the repository on github.

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
