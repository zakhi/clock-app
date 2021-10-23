# Frontend Mentor - Clock app solution

This is a solution to the [Clock app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/clock-app-LMFaxFwrM). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- View the current time and location information based on their IP address
- View additional information about the date and time in the expanded state
- Be shown the correct greeting and background image based on the time of day they're visiting the site
- Generate random programming quotes by clicking the refresh icon near the quote

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/zakhi/clock-app](https://github.com/zakhi/clock-app)
- Live Site URL: [https://zakhi.github.io/clock-app/](https://zakhi.github.io/clock-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow

### What I learned

I implemented en evening theme using a CSS class that redefines custom properties

```css
body {
  --details-background: var(--color-light-75);
  --details-color: var(--color-less-dark);
  --details-border: var(--color-less-dark-25);

body.evening {
  --details-background: var(--color-dark-75);
  --details-color: var(--color-light);
  --details-border: var(--color-light-25);
}

.details {
  background: var(--details-background);
  color: var(--details-color);
  border-left: 1px solid var(--details-border);
}
```

### Useful resources

- [Pure CSS Loaders](https://loading.io/css/) - The spinner is based on one of their examples
