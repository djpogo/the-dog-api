# `the dog api` consumed by various frontend frameworks

This repository shows how to consume the dog api with different frontend frameworks.

## the mission

Create an app which
* load & show 20 images from `the-dog-api` on the index page
* store api data in sessionStorage and provide a `refresh dog list` button
* link every image to a detail page
* provide a backlink on the detail page

The styling should be very minimum, no css framework/library must be used, so that every app is pure framework code and can be compared to each other.

The look and feel should be same in the browser.

## the goal

By creating the *same* app with different frameworks, they are compareable with lighthouse, byte sizes and code experience.

## frameworks used so far

* [react w/ class](./react-class)
* [react w/ function](./react-fn)
* [react w/ vite & function](./react-vite)
* [next.js](./next.js)
* [vue3 w/ vite](./vue3-vite)
* [vue3 w/ cli](./vue3-cli)
* [SvelteKit](./svelte-kit)

## framework statistics

These numbers show the amount of JavaScript which is shipped on the initial render of the **index page**. The Lighthouse score is generated also on the index page.

| Framework | plain ByteSize* | gzip ByteSize* | Lighthouse Score** |
|-----------|-------------:|----:|------:|
| [React@17.0.2<br>w/ class](./react-class) | `166,45 KB` | `54,34 KB` | tba |
| [React@17.0.2<br>w/ function](./react-fn) | `164,53 KB` | `54,03 KB` | tba |
| [React@17.0.2 w/ vite<br>w/ function](./react-vite) | `155,55 KB` | `51,79 KB` | tba |
| [Next.js@11.1.2](./next.js) | `219,97 KB` | `75,44 KB` | tba |
| [Vue@3.2.16 w/ vite](./vue3-vite) | `74,68 KB` | `30,52 KB` | tba |
| [Vue@3.2.19 w/ cli](./vue3-cli) | `124,85 KB` | `46,47 KB` | tba |
| [SvelteKit@1.0.0-next.180](./svelte-kit) | `30,97 KB` | `13,03 KB` | tba |

\* The list shows plain js and gzip file sizes, to illustrate how much js the browser needs to read. The gzip size is important for download speed, but afterward, the browser needs to unzip, parse and execute the JavaScript, that's why the plain production code size is displayed here.
By `ssr` frameworks the js payload from the browser network tab is taken.

** The Lighthouse Score is taken on the production codebase either by `serve -s <dist-folder>` or on ssr frameworks with the included server. A mid-range android phone with a Snapdragon 690 CPU, 6GB ram, and a 6" 2520x1080 screen, runs every test 5x and the median is taken.