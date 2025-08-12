---
title: "Week 26 in the Office (22-26/08/2022)"
description: "A blog post about Week 26 in the Office (22-26/08/2022)"
date: 2022-08-28
updateddate: 2022-08-28
brief: "Work has been much the same this week: content web page creation, review with other teams, back and forth, iterations, redo the work in a slightly different manner. So, I won't dwell on it. 
More on creating responsive maps with HTML, CSS, JS
In week..."
subtitle: ""
heroimage: "https://cdn.hashnode.com/res/hashnode/image/unsplash/t7YycgAoVSw/upload/v1661671189664/nCzlmG5rv.jpeg"
heroalt: "Week 26 in the Office (22-26/08/2022)"
tags: []
---

Work has been much the same this week: content web page creation, review with other teams, back and forth, iterations, redo the work in a slightly different manner. So, I won't dwell on it. 

## More on creating responsive maps with HTML, CSS, JS
In [week 24](https://the-dog-can-blog.hashnode.dev/week-24-in-the-office-08-120822), I wrote about discovering the HTML5 map tag which seemed to be a perfect solution to the feature I was trying to implement for one of our webpages. It involves an "interactive" map of the world where content creators can assign countries and we could direct the viewer by clicking on that country and opening a popup stating the country information: national flag and anchor tag to redirect to relevant content. 

Since week 24 and now, I researched how to implement the responsive image where the 'clickable' region defined by the map area coordinates in the markup scales relative to the width of the browser. I wasn't content with using a library for this one feature. Fortunately, I landed on a GitHub Gist page which recalculates the coordinates relative to the browser width. Hats off to [guregu's work](https://gist.github.com/guregu/e9f9caaed4b264a9214799bf03a06946).

I showed a proof of concept to the content providers and they came back with some improvements- most of which were editing changes which weren't difficult to make. However, they added a layer of complexity which was that it is difficult for the user to see which countries we were trying to direct them to interact with. So, we should add some animated markers (similar to Google Maps and pins icons) to aid the user. 

I researched this and managed to implement a marker animation with the help of a YouTube [tutorial](https://www.youtube.com/watch?v=XygqEKdroPw).

The code is saved [here](https://github.com/wkan17012021/test-map) and you can see the work in progress [here](https://wkan17012021.github.io/test-map/plainJSWithMarkers.html). 

I'm currently at the position where the markers move about (mostly vertically) as the browser width is resized. I think this is due to the absolute positioned markers and the relative positioned parent container- perhaps they are moving relative to the div container rather than the img tag which is a sibling to the marker markup.

I tried using media queries but I find I am having to do this with a lot of breakpoints. Our company best practice has preset four breakpoints so adding additional breakpoints to facilitate this one feature doesn't seem like a good idea.

I also need to revise the popup markup so that they appear near the pulsing marker / country. I see a long term problem with this: if the content teams decide to have countries close by, then the presentation becomes really messy. 

I'm still iterating on this, and hopefully we will have an approved feature that fits in with the CMS codebase soon. 
