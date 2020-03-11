# Page transition example using Barba JS

> "Create badass fluid and smooth transitions between your website’s pages." - [Barba JS](barba.js.org)

You can find helpful documentation on their [website](barba.js.org).

This demo shows how to use Barba JS for page navigation.
[See the demo](http://karanmhatre.com/barba-page-transition-example/index.html)

I am using [GSAP](https://greensock.com/gsap/) for basic animations on the page.

The sequence of the animation is
- Block the full screen with ".loading-screen".
- Remove ".loading-screen".
- Animate the new page content.

---

### Understanding Supporting Functions

``` function loadingAnimation() ``` - This function shows and hides the ".loading-screen", which is a fullpage screen used to transition between pages.


``` function contentAnimation() ``` - All the content on the page starts with ```opacity: 0```. This function animates on all on screen elements into visibility.

---

### Barba Hooks

```javascript
transitions: [{

  async leave(data) {

    const done = this.async();

    loadingAnimation();
    await delay(1000);
    done();
  },

  enter(data) {
    contentAnimation();
  },

  once(data) {
    contentAnimation();
  }

}]
```
These are barba js hooks.

"Once" is called the first time the page is loaded. This time we want to simply animate all the content in place.

"Leave" is called when you move out of one page to another. While moving out of the page, we want to call ```loadingAnimation```, wait 1s, and then pass control to the next hook .i.e. "Enter".

"Enter" is called when you enter a new page. As soon as we enter the page, we want to call ```contentAnimate``` to show all the elements on this page.
