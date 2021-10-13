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
* [nuxt3@latest](./nuxt3)
* [vue3 w/ vite](./vue3-vite)
* [vue3 w/ cli](./vue3-cli)
* [SvelteKit](./svelte-kit)

## framework statistics

These numbers show the amount of JavaScript which is shipped on the initial render of the **index page**.

| Framework | plain ByteSize* | gzip ByteSize* | Lighthouse Performance** |
|-----------|-------------:|----:|------:|
| [React@17.0.2<br>w/ class](./react-class) | `166,45 KB` | `54,34 KB` | **58** (FCP: 1,7s; SI: 1,7s; LCP: 16,4s; TTI: 2,0s; TBT: 170ms; CLS: 0.829) |
| [React@17.0.2<br>w/ function](./react-fn) | `164,53 KB` | `54,03 KB` | **59** (FCP: 1,5s; SI: 1,6s; LCP: 15,9s; TTI: 1,9s; TBT: 170ms; CLS: 0,563) |
| [React@17.0.2 w/ vite<br>w/ function](./react-vite) | `155,55 KB` | `51,79 KB` | **61** (FCP: 1,3s; SI: 1,4s; LCP: 15,2s; TTI: 1,5s; TBT: 60ms; CLS: 0,709) |
| [Next.js@11.1.2](./next.js) | `219,97 KB` | `75,44 KB` | **68** (FCP: 0,9s; SI: 7,2s; LCP: 3,6s; TTI: 3,7s; TBT: 560ms; CLS: 0) |
| [Nuxt3@latest](./nuxt3) | `145,94 KB` | `57,65 KB` | tba |
| [Vue@3.2.16 w/ vite](./vue3-vite) | `74,68 KB` | `30,52 KB` | **52** (FCP: 1,2s; SI: 1,6s; LCP: 14,4s; TTI: 2,0s, TBT: 390ms; CLS: 0.621) |
| [Vue@3.2.19 w/ cli](./vue3-cli) | `124,85 KB` | `46,47 KB` | **59** (FCP: 1,5s; SI: 1,7s; LCP: 15,3s; TTI: 2,0s; TBT: 130ms; CLS: 0.829) |
| [SvelteKit@1.0.0-next.180](./svelte-kit) | `30,97 KB` | `13,03 KB` | **87** (FCP: 2,0s; SI: 7,8s; LCP: 2,5s; TTI: 2,4s; TBT: 130ms; CLS: 0) |

\* The list shows plain js and gzip file sizes, to illustrate how much js the browser needs to read. The gzip size is important for download speed, but afterward, the browser needs to unzip, parse and execute the JavaScript, that's why the plain production code size is displayed here.
By `ssr` frameworks the js payload from the browser network tab is taken.

** The Lighthouse Performance Score is taken with incognito mode on the production codebase either by `serve -s <dist-folder>` or on ssr frameworks with the included server. A mid-range android phone with a Snapdragon 690 CPU, 6GB ram, and a 6" 2520x1080 screen. All json & images are served by the same api-mock snapshot, with webp reencoded images.

## dog api mock

To reduce network and dog api latency a local api mock can be found at [api-mock](./api-mock).

### prepare api mock

``` bash
$ cd api-mock
$ npm install
$ npm run prepare-mock
```
This command downloads a 20 image snapshot of the dog api enpoints, used in this project.

### reencode images to webp

After creating a snapshot from the api, you can convert images to webp format by running `npm run reencode-images`.

``` bash
$ cd api-mock
$ npm run reencode-images
```

### run api mock

``` bash
$ cd api-mock
$ npm run serve-mock
```

This will start a server at [`http://localhost:3001`](http://localhost:3001). Port and host can be configured in the [`.env`](./api-mock/.env).