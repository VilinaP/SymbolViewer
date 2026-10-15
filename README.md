# Symbol Viewer - Internship Challenge
**By:** Vilina Prenko

## How to Run
1. Download all files
2. Open `index.html` in any web browser
3. Click "Connect to Server" to start

## What I Learned
- How to use the `<template>` tag: clone it with JavaScript, fill it with data, and add it to the page
- How to loop through data, display it, and count it
- Why `textContent` is safer than `innerHTML` when showing data

## Challenges I Faced
- **Duplicate cards after reconnecting.** I fixed it by clearing the list with `symbolsList.textContent = ''` before the loop.
- **Showing the right symbol in the detail view.** I added an event listener to each card that passes that card's symbol to `showDetail`.

## Bonus Feature
- **Symbol Counter:** shows "Showing X symbols" above the list. Calculated from the amount of card that are added onto the page

## Technologies Used
- HTML
- CSS
- JavaScript (vanilla)

## Tools Used
- axe DevTools (accessibility checking)

## Main Changes to the Starter Code
- Replaced `innerHTML` with `textContent` and cloned `<template>` elements instead of building HTML strings in JavaScript
- Used semantic HTML tags
- Removed inline styling from `index.html`