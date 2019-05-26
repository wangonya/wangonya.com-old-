---
title: "Displaying a css spinner on ajax calls with fetch api"
date: "2019-02-01T08:18:26+03:00"
description: "How to show a loader when getting or posting data with fetch api"
---

I always have to search for how to do this or refer back to my previous code whenever I work with `fetch`. For a while, I've used the solution to [this](https://stackoverflow.com/questions/43792026/display-spinner-during-ajax-call-when-using-fetch-api) SO question. It's a correct solution and it works great but to be honest, I couldn't really explain _very well_ what was going on if someone asked me to explain that piece of my code. So I thought of a simple way to do it. It's very simple really, I think I was just overthinking it. Here's how:

## Setting up the HTML

```html
<!-- this will fetch the data -->
<button onclick="loadData()">Load data</button>

<!-- this will show our spinner -->
<div hidden id="spinner"></div>
```

The spinner visibility is hidden by default using the built-in `hidden` attribute. This is the element we'll manipulate in order to show and hide it as desired.

## Creating the CSS spinner

```css
#spinner:not([hidden]) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

#spinner::after {
  content: "";
  width: 80px;
  height: 80px;
  border: 2px solid #f3f3f3;
  border-top: 3px solid #f25a41;
  border-radius: 100%;
  will-change: transform;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

## Getting things working with Javascript

```javascript
const spinner = document.getElementById("spinner");

function loadData() {
  spinner.removeAttribute("hidden");
  fetch("https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=5000ms")
    .then(response => response.json())
    .then(data => {
      spinner.setAttribute("hidden", "");
      console.log(data);
    });
}
```

When the `loadData` function is called, it removes the `hidden` attribute (`spinner.removeAttribute('hidden')`). I've set the delay to 5 seconds (`mocky-delay=5000ms`) so we can see the spinner in action. After that, the `hidden` attribute is restored (`spinner.setAttribute('hidden', '')`), hiding the spinner. Ideally, this would happen after the data being fetched is returned.

Here's the [pen](https://codepen.io/wang0nya/pen/bzwQPr)
