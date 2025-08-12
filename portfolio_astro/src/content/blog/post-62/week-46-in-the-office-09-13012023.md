---
title: "Week 46 in the Office (09 - 13/01/2023)"
description: "A blog post about Week 46 in the Office (09 - 13/01/2023)"
date: 2023-01-14
updateddate: 2023-01-14
brief: "In the workplace, we have made some positive headway on a collaboration of a redesign of our homepage by copying a template from the New York University site. The markup seems to be based on an unordered list of items with each item represented as a ..."
subtitle: ""
heroimage: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/DJ7bWa-Gwks/upload/4f36c8f6f96e53ac765bf095617d118a.jpeg"
heroalt: "Week 46 in the Office (09 - 13/01/2023)"
tags: []
---

In the workplace, we have made some positive headway on a collaboration of a redesign of our homepage by copying a template from the [New York University site](https://www.nyu.edu/). The markup seems to be based on an unordered list of items with each item represented as a square or cell within a table or grid-like layout. However, the cells should have the ability to span a column or row as necessary to allow specific content to appear more prominent. We are mocking up the content type and field types in Drupal configuration- it is within these fields that the twig templating engine can pull the data through to the front end and then we can focus on styling it appropriately.

I've seen similar designs like this, as a team we trialled a few libraries that attempt to resolve this problem and I wrote about it [last week](https://hashnode.com/post/clclxv0rv000208mh8bxqd05p). Following this, I was introduced to another library this time just CSS, which delivers a Pinterest style of laying out media. [FlexMasonry](https://github.com/gilbitron/flexmasonry) works well with a mix of portrait and landscape media but doesn't achieve what I'm attempting which is more of a responsive grid which allows for items to span columns. You can alter the number of columns and even arrange the order of items and the algorithm will calculate where the rest of the content should fit densely into the remaining space. FlexMasonry relies on the principles of Flex which is a one-directional method of ordering content. Although, this still stands as a nice side project to see how this library performs with data loaded using an API from another site like an e-commerce platform where more images could be revealed as the user scrolls down or clicks a button.

We're still confirming what fields we need and making the content form for the editor as intuitive as possible, then we hope to move on to how to pull some of the information for some of the cells or squares automatically through Drupal's Views module.

In other news, I have been pushing to get a deliverable submitted for my apprenticeship program which hopefully will be wrapped up in January all the while working on rebuilding my portfolio with more modern web tooling. Slow and steady wins the race!