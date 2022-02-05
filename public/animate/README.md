# Snype Media Animation Library
### Intro
The Snype Media Animation Library works with a combination of Javascript and Css (html classes).

## Javascript
For the animations that should occur upon scoll we make use of the intersection observer API, which triggers as soon as a certain element intersects with the vieuwport. What "intersecting" means can be adjusted in the textAnimationOptions with the rootMargin option.

```JavaScript
const textAnimationOptions = {
        rootMargin: "0px 0px -100px 0px"
    }
```

## CSS
The way you can add an animation to an element is by giving that element 2 classes: anim-reset and slide-{left/right/bottom/top}
The anim-reset class will make sure your element has initial values in order for the transition to work. The second class will then overwrite that initial value and upon intersect the second class will be removed, making the element transition from its before-animated state, to its state you initially designed it in.

```Css
.anim-reset {
    transform: translateX(0px);
    transform: translateY(0px);
    opacity: 1;
    transition: all 300ms ease-in-out;
}
```
