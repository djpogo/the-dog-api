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

* [react w/ class](./react)

## framework statistics

| Framework | plain ByteSize* | gzip ByteSize* | Lighthouse Score** |
|-----------|-------------:|----:|------:|
| React@17.0.2<br>w/ class | `177.674 B` | `57.034 B` | tba |

\* The list shows plain js and gzip file sizes, to illustrate how much js the browser needs to read. The gzip size is important for download speed, but afterward, the browser needs to unzip, parse and execute the JavaScript, that's why the plain production code size is displayed here.

** The Lighthouse Score is taken on the production codebase either by `serve -s <dist-folder>` or on ssr frameworks with the included server. A mid-range android phone with a Snapdragon 690 CPU, 6GB ram, and a 6" 2520x1080 screen, runs every test 5x and the median is taken.