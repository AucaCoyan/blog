---
title: Lua Scripts for Tabletop Simulator
heroImage: "/images/lua.png"
description: my notes on TTS Lua
pubDate: "Jul 01 2022"
slug: tts_lua
ignorePost: false
---

On my free time I play boardgames in Tabletop Simulator. So most of the time I want to automate many boring actions. This is why I'm doing this notes:

# Good articles and learning resources

- [This playlist is excellent to start](https://www.youtube.com/playlist?list=PLdHW9On5G8NKyYMnXzF8E52qmxQX5r8bb). It goes from basics to really good applications.
- [Official TTS Discord](https://discord.gg/M4pCdNEDfW) has a great `#scripting` channel.
- [This](https://distilledgame.com/distilling-the-essence-out-of-ttss-lua-scripting/) blog post by Distilled Game is a great walkthrough to a TTS mod.
- [This forum post](https://steamcommunity.com/sharedfiles/filedetails/?id=2255706594) about `require` keyword.
- [TTS community guide](https://tts-community.github.io/docs/guides/)

# References and some official documents

- [Knowledge base TTS](https://kb.tabletopsimulator.com/): General information about TTS.
- [Official TTS API](https://api.tabletopsimulator.com/): Lua specific documentation for TTS.
- [TTS patch notes](https://www.tabletopsimulator.com/news/patch-notes) (it has some specific notes on Lua and the like)
- Suggestions and feedback of TTS software can be voted in [the nolt platform](https://tabletopsimulator.nolt.io/)
- [Lua Classes for TTS](https://github.com/Berserk-Games/Tabletop-Simulator-Lua-Classes) an official repo in github 😮.

# Mods and saves

- Where are my mods saved? here:

```
C:\Users\{user}\OneDrive\Documents\My Games\Tabletop Simulator\Mods
```

- [tts-save](https://github.com/ikegami/tts_save) are tools for mods saves.

# IDE

TTS is tricky, you have to open TTS and "receive" the code from tabletop simulator. So here are a bunch of tools I checked out:

- [tabletopsimulator-lua-vscode](https://github.com/rolandostar/tabletopsimulator-lua-vscode) is an extension for VS Code.
- You'll probably [want to assign `.ttslua` to `.lua`](https://stackoverflow.com/a/51228725/8552476) language in VS Code.
- [Moonsharp debugger for TTS](https://github.com/tts-community/moonsharp-tts-debug)
<!-- This is about to get out of the recommendations
- Moonsharp also recommends [EmmyLua](https://github.com/EmmyLua/VSCode-EmmyLua), a port of EmmyLua from IntelliJ IDEA. It adds hover info, go to definition, and other goodies.
  -->
- [Types](https://github.com/Benjamin-Dobell/tts-types) for TTS for Luanalysis.

- [Atom](https://github.com/Berserk-Games/atom-tabletopsimulator-lua/) has also an extension for TTS, but Atom [got dropped of development](https://github.blog/2022-06-08-sunsetting-atom/) this year. TTS has [a reference guide](https://api.tabletopsimulator.com/atom/) to install and some general features.

# Lua thingies

- If you end up with a lot of files, it's useful to bundle them into one file with [`luabundler`](https://github.com/Benjamin-Dobell/luabundler). Many mods from Steam workshop do.
- You can also bundle xml with [`@tts-tools/xmlbundle@tts-tools`](https://www.npmjs.com/package/@tts-tools/xmlbundle)
- many devs choose to have a repos of libs, in which dump a bunch of useful files. [Benjamin Dobell](https://github.com/Benjamin-Dobell/ge_tts) is a member of Berserk Organization in Github (might be related to TTS), [kintastic](https://github.com/ikegami/kintastic), [Zehir](https://github.com/Zehir/ttslua), [omniraptor](https://github.com/omniraptorr/ge_tts_membag) and [omniraptor UI](https://github.com/omniraptorr/tts_ui), [Andr3wd](https://github.com/Andr3wD/TTS-Helpful-Scripts), [sebastian Stern](https://github.com/Sebaestschjin/sebaestschjin-tts), [eruber](https://github.com/eruber/TTS_ULib) have some files.
- [Promise](https://github.com/aimingoo/Promise) in lua
- [What's a good way to program a "sleep" function in TTS / lua?](https://www.reddit.com/r/tabletopsimulator/comments/4i5t07/whats_a_good_way_to_program_a_sleep_function_in/)

# Amazing mods to learn from

`from github`

- [Carcassonne](https://github.com/mmann78/TTSCarcassonne)
- [Brass Birmingham and Brass Lancashire](https://github.com/ikegami/tts_brass)
- [Gloomhaven](https://github.com/gloomhaven-tts-enhanced)

`from steam workshop`

- [Sleeping Gods by Krazy Krivda](https://steamcommunity.com/sharedfiles/filedetails/?id=2416998963)

`others`

- github search: [`TTS` with `Lua` language](https://github.com/search?q=TTS+language%3ALua&type=Repositories&ref=advsearch&l=Lua&l=)
- `npm` search: [`tabletop-simulator`](https://www.npmjs.com/search?q=keywords:tabletop-simulator) and [`tabletopsimulator`](https://www.npmjs.com/search?q=keywords:tabletopsimulator) terms.

# Things I tried (document more)

- I tried to do an [XML schema](https://tabletopsimulator.nolt.io/879) but I have abandoned the task because XSD isn't flexible enough. I found that XML cant have optional repeatable elements, that may or may not appear (as buttons and text labels in a TTS XML).

  My investigation has come up to:
  TTS uses [XmlLayout](https://www.digital-legacy.co.za/XmlLayout/Documentation). (source: [this comment](https://steamcommunity.com/sharedfiles/filedetails/?id=1433695655#:~:text=Note%3A%20the%20original%20documentation%20for%20XmlLayout%2C%20the%20system%20used%20by%20TableTop%20Simulator%2C%20can%20be%20found%20here%3A%20http%3A//digital%2Dlegacy.co.za/XmlLayout/Documentation))

- Installed v2.0 beta of TTS-lua-vscode <https://github.com/rolandostar/tabletopsimulator-lua-vscode#manual-installation>

  [it has its own docs!](https://tts-vscode.rolandostar.com/extension/apiUpdates)

---

This post comes from github, view it [here](https://github.com/AucaCoyan/blog/blob/main/tts_lua.md)
