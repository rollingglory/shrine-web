/*
Sort: -1
*/

As a software engineer, we do need some standard tools.

# Shell and Terminal Emulator

What's the difference?

`Shell` is the command line interpreter, while `terminal` is the input and output program.

For example, Windows have `cmd` and `powershell` as shell. They use the same terminal.
Ubuntu have `bash` as it's default shell, and `gnome-terminal` as the default terminal.
You may use `zsh` as your shell, and `urxvt` as your terminal.

While Windows' default terminal is enough, it's not good.
Therefore we shall use other shell and terminal combinations.
If you're not using Windows, you may skip this part.
For Windows users, you have some options:

- [git-bash (shell)](https://git-scm.com/)  
When you install `git`, you'll get `bash` and `msys2` shell too.  
I mostly stick with these if I need to use Windows machine.  
Still use the same terminal as `cmd` though, can't be resized.  

- [clink (shell)](https://mridgers.github.io/clink/)  
This is `cmd`, with GNU Readline library.  
The simplest if you're kind of minimalist person.  

- [conemu (terminal)](https://conemu.github.io)  
More powerful than Windows default.  
Cutie colors, layout restoring, mouse support, key rebinding.  
"Terminal" means, you can use another shell programs.  
`conemu` + git `bash` is my favorite.  

- [cmder (shell + terminal)](https://github.com/cmderdev/cmder)  
Cmder is for you if you don't like the hassle of setting up.  
Also got nice green scheme.  
_Why don't you link the main website? 'Cause the main page don't have TLS._  

- [wsl (shell)](https://docs.microsoft.com/en-us/windows/wsl/about)  
A whole new way to solve problems. You got the perks of linux kernel too! ☺️  

# Text Editor

![](https://imgs.xkcd.com/comics/hottest_editors.png)

Who code without a text editor, right?  
I mostly use `vim`, but I think the choices of your editor didn't matter,
as long as you have one and comfortable with it.

# Git

Git is a version control program. Since the purpose of this page is to quickstart,
I'll just provide web pointer that may leads to download.

For Windows, get it [here](https://git-scm.com/).  
For Linux, get it from your respective package manager (`apt`, `yum`, `dnf`, `pacman`).  
For macOS, I recommend getting it using [brew](https://brew.sh/), and treat it like Linux.  

UI you may ask. Yes, `git` is cli application. But it do have GUI and TUI.

- [gitkraken](https://www.gitkraken.com/)  
Neat one, make it easy to rebase and merge.  

- [source tree](https://www.sourcetreeapp.com/)  
A classic. This is the most used one, I think.

- [github desktop](https://desktop.github.com/)  
Personally I don't like this. But, whatever float your bloat.  

You also may use it from your editor.

- [sublime](https://packagecontrol.io/packages/Git)
- [vim](https://github.com/tpope/vim-fugitive)
- [vscode](# "already have")