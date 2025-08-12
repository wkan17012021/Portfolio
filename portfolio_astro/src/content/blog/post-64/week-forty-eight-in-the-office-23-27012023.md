---
title: "Week Forty-Eight in the Office (23 - 27/01/2023)"
description: "A blog post about Week Forty-Eight in the Office (23 - 27/01/2023)"
date: 2023-01-27
updateddate: 2023-01-27
brief: "Work
This week capped off essentially the end of a two to three-week task of creating a custom CSS grid which I've mentioned in the previous posts.
There are still some tweaks to iron out before presenting a demo to management which involves some Dru..."
subtitle: ""
heroimage: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/s9CC2SKySJM/upload/3acf56e3a61fd537d852574a27cd09ec.jpeg"
heroalt: "Week Forty-Eight in the Office (23 - 27/01/2023)"
tags: []
---

## Work

This week capped off essentially the end of a two to three-week task of creating a custom CSS grid which I've mentioned in the previous posts.

There are still some tweaks to iron out before presenting a demo to management which involves some Drupal-isms but apart from that, it's presentable. The task was certainly within my ability but stretched my knowledge of grid properties and how to implement this layout in a scalable and maintainable way. I learned that I need more practice on CSS grids if I want to make layouts like this in the future!

There are a couple of new properties that would have solved my problem such as the -subgrid property and a masonry layout, both of which do not have good enough coverage across browsers. But it is good to know that the CSS working group are constantly improving and trying to get features out there to improve the developer experience.

I think I'll benefit from doing several tutorials or short courses on building responsive, basic to intermediate-level grids.

## Portfolio

Outside of the workplace, my main goal was to finish revamping my portfolio which I just managed to get an MVP out this evening 💪🏽

The site can be found here: [https://wkan-dev.netlify.app/](https://wkan-dev.netlify.app/)

This was the culmination of weeks of planning, research, assets gathering and development and design decisions. I've identified bugs and performance checks I need to resolve so there is still room for improvement!

Although I am not currently seeking new roles, it was a great feeling to get a face-lift on the first iteration of this project: this was a clunky, content-crazy Boostrap5 site which at the time I felt was an amazing piece of work!

It's astounding how little I knew back then and the quality of the design, structure and content was reflective of my naivety. This time I've managed to turn round a new site except for some of the copy text, in just over a year during my free time. Here are the salient changes:

| Before | After | Why Improve? |
| --- | --- | --- |
| Bootstrap5 framework to expedite UI construction | Convert to Material UI v.5 | Modern state-management UI system allows the developer more customisation over components, hence more individuality. There are a lot of functional components which you can use out of the box. I also want to progress and learn about CSS-in-JS, styled-components and modular UI management. |
| Had a go at what content and copy would be relevant | Curated and only provided content specific to the end user: recruiters | After reading other developers' portfolios, patterns emerged in what information needed to be displayed. I tailored my portfolio to show these specific sections of information and cut out all the other 'filler-content'. |
| Handled styling and RWD with multiple CSS stylesheets for each section | Used as much of MUI's RWD components and added my styles on top when necessary | This saved me from rewriting a lot of CSS to produce the same results when other well-maintained libraries already have more rigorous, well-tested code. |
| No Build Tool, just HTML, CSS, and plain JS. | Used Vite.js build and bundler tool | Learning React, it became apparent that the CRA command is not advised for production sites. So I researched a tool that has good developer experience and could quickly spin up a dev environment, and build the project as well with less file size than CRA. |
| Basic performance and A11y considerations | Used Axe dev tools to perform a high-level check. Use Lighthouse to check performance. | MUI components have A11y design in mind. The site is a single-page app served to the client as a React project via Netlify's CDN. This meant I could take advantage of their plugins, faster hosting and delivery service. |

All in all, I found out that I do not have a web design creative gift, and I may look to hire a designer should I want to iterate on the site again. I think I'd rather focus on the development and delivery of the project 😁