---
title: "Week 47 in the Office (16 - 20/01/2023)"
description: "A blog post about Week 47 in the Office (16 - 20/01/2023)"
date: 2023-01-20
updateddate: 2023-01-20
brief: "This a short one from myself as the work week has been relatively straightforward as I work towards making a prototype masonry layout into a finished product with real assets and iterate on the styling.
I did come up with a few demos in a GitHub proj..."
subtitle: ""
heroimage: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/Lks7vei-eAg/upload/26b40edade37c52e48fba317043865a8.jpeg"
heroalt: "Week 47 in the Office (16 - 20/01/2023)"
tags: []
---

This a short one from myself as the work week has been relatively straightforward as I work towards making a prototype masonry layout into a finished product with real assets and iterate on the styling.

I did come up with a few demos in a GitHub project and found that using the background-image URL() property did slow down the page rendering on tablet and desktop screens significantly. I used this property initially because setting the image as the grid item background meant I didn't have to deal with resizing, focal points or strategic placement of the image tag in the markup. It solved many problems but as mentioned, introduced a performance hit (I did compress the media and our Drupal site doesn't accept .avif or .webp formats) not to mention accessibility and SEO concerns by not using an image tag if it's contextual to the surrounding content.

The task was large but broken down into steps. Fortunately, I don't have to do it alone: the content type in Drupal was considered and produced by a senior developer who has the foresight and experience to understand what fields would be necessary for styling and which fields could be called from the database automatically using Drupal Views module. This laid the basis for what the final product should look like as I could imagine where all the field values were supposed to be on the page, which left me with overriding a pre-existing twig template and customising the markup with inline tailwind styles. The content of the markup is the twig variables derived from field values which took a lot of time working out how to pull these through using dd(content) drupal dump- to output the twig variables on the page in an array-like diagram for ease of reference.

I'm still working through getting the exact view field data rather than outputting all the default view markup which gets injected into the page by the theming engine- such that you can not target with inline utility classes- I would have to target them using SASS and any generic class names that were assigned to the injected markup- not a maintainable solution.

The iterative styling and rendering process I would say at least for our local development environment and the tools we use is quite a poor dev experience: with front-end development, I find I make a lot of trial and error which frequently requires a small tweaks and observation of that tweak. I think the feedback loop between making changes in the codebase, then refreshing with commands in the terminal and then waiting for the page to reload after flushing the caches, is slow and painful. It's not like working on a small solo project spun up with a modern JavaScript library or framework with hot reload in localhost!

Maybe someone in the Drupal community has come up with a way to watch for changes in the styling and twig code, maybe one day we could implement this and speed up our delivery of front-end solutions and return value to our content teams. One day, maybe....