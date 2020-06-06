# Page transition example using Barba JS

![alt text](http://karanmhatre.com/img/barba-page-transition.gif "Example")

> "Create badass fluid and smooth transitions between your website’s pages." - [Barba JS](https://barba.js.org)

You can find helpful documentation on their [website](https://barba.js.org/docs/getstarted/intro/).

This demo shows how to use Barba JS for page navigation.
[See the demo](http://karanmhatre.com/barba-page-transition-example/index.html)

I am using [GSAP](https://greensock.com/gsap/) for basic animations on the page.

The sequence of the animation is:

- Block the full screen with `.loading-screen`.
- Remove `.loading-screen`.
- Animate the new page content.

---

## Understanding Supporting Functions

> This code use `async/await` modern JavaScript pattern but, as mentionned in the documentation, you can use promises or `this.async`.

`function pageTransitionIn()` - This function shows the ".loading-screen", which is a fullpage screen used to transition between pages.

`function pageTransitionOut()` - This function hides the ".loading-screen" and call the content animation.

`function contentAnimation()` - All the content on the page starts with `opacity: 0`. This function animates on all on screen elements into visibility.

---

### Barba Hooks

```javascript
transitions: [{
  leave(data) {
    // Page transition in
    // Remove current content
  },

  enter(data) {
    // Page transition out
    // content animation
  },

  once(data) {
    // Content animation
  }
}]

```

These are barba js hooks.

`once` is called the first time the page is loaded. This time we want to simply animate all the content in place.

`leave` is called when you move out of one page to another. While moving out of the page, we want to hide everything with the loading screen, remove old content then play "enter".

`enter` is called when you enter a new page. As soon as we enter the page, show new content with animation.
