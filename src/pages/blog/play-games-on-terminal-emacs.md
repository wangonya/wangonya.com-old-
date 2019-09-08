---
title: Play games on your terminal using emacs
date: 2019-09-08
---

If you've never opened [emacs](https://www.gnu.org/software/emacs/) before, here's a great chance to do it for the first time (like me 😅). Turns out, emacs comes with some pretty nice old school [games](https://www.emacswiki.org/emacs/CategoryGames) built in.

<small>Note: I'm assuming you're on a *NIX system</small>

To play, start emacs on the terminal:

```bash
$ emacs
```

I thought I'd have to install emacs on my Mac but have it already there on my Linux (Manjaro i3 18.0.4) but to my surprise, it was already there on my Mac and I had to install in on Linux. So if you run the command and see something like `Unknow command emacs`, you'll need to install it first.

If the command runs successfully, you should see something similar to the screenshot below.

![emacs](/images/emacs.png)

Linux decided to install a GTK+ version 🤷🏽‍♂️

![emacs GTK version](/images/emacs-gtk.png)

Press the **`escape`** then **`x`** keys, and `M-x` should appear at the bottom of the screen.

Next, type in the name of the game you want to play. You can pick from <a href="https://www.emacswiki.org/emacs/CategoryGames#toc1" target="_blank">this list</a>. I like snake, so that's what I'll type in.

![playing snake on emacs](/images/emacs-snake.png)

![](/images/emacs-snake2.png)

You can quit emacs by pressing `Ctrl-x Ctrl-c`.
