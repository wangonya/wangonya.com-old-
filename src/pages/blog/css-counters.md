---
title: Automatically counting and numbering HTML elements with CSS counters
date: 2019-08-24
---

Say you had an unknown number of `<div>` elements and (for some reason) you wanted to count them and number each other them automatically - how would you do it? If you're like me, your first thought would be to use some kind of Javascript to play around with the DOM. What if I told you (insert Morpheus voice here) you can do it with CSS?

## How to use CSS counters

Getting counters working requires three steps:
* Initialize the counter with `counter-reset`
* Increment the counter with `counter-increment`
* Show the current counter value with `counter()`

It's pretty simple, really. The Pen below demonstrates how to count and number three `<div>` elements.

<iframe height="265" style="width: 100%;" scrolling="no" title="Css counter demo" src="//codepen.io/wang0nya/embed/voRyaJ/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/wang0nya/pen/voRyaJ/'>Css counter demo</a> by Kinyanjui Wangonya
  (<a href='https://codepen.io/wang0nya'>@wang0nya</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Where would this be useful?

I discovered CSS counters while looking for a way to number images on my blog posts. That's one place it would really come in handy. Here's a quick example:

<iframe height="265" style="width: 100%;" scrolling="no" title="Css counter figcaptions demo" src="//codepen.io/wang0nya/embed/LwdxZz/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/wang0nya/pen/LwdxZz/'>Css counter figcaptions demo</a> by Kinyanjui Wangonya
  (<a href='https://codepen.io/wang0nya'>@wang0nya</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
