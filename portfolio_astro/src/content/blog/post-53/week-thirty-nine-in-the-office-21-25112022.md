---
title: "Week Thirty-Nine in the office (21 - 25/11/2022)"
description: "A blog post about Week Thirty-Nine in the office (21 - 25/11/2022)"
date: 2022-11-25
updatedDate: 2022-11-25
heroImage: https://cdn.hashnode.com/res/hashnode/image/unsplash/_RBcxo9AU-U/upload/v1669364836538/ghU278qbj.jpeg
tags: ["5f9435c7fbdce372c9a56fb6"]
---

I've been fairly busy this work week as staff have been taking holiday and handing over tasks as the organisation tries to close out projects before the Christmas break. The main unblocker for me was finally getting to the bottom of a pesky css style which was to add guttering spacing between blocks or components which are all rendered automatically via a twig template Drupal Views configuration. The solution at the core was simple: apply the container a ```
display: flex
```, get the items to wrap to the following line with ```
flex-wrap: wrap;
```, and you can add additional styles to make the layout more pleasing, like justify-content. 

This was one of the first attempts I had, but I discounted it as I was focused on changing the list of items inside the wrapper with margins and padding. Still, it always resorted to the same problem: adding a margin to one would add to them all, leaving uneven whitespace at the top or the bottom of the component View block. Then you would have to look into negative margins, which is undesirable. I explored nth-child and last-child selectors, which is fine if your responsive layout doesn't change: as we only wanted white spacing to be applied in between rows of items and not at the top row or base of the bottom row, and the columns of items would change from four at desktop, three for tablet, one for mobile, these selectors wouldn't be able to conditionally apply based on the column changes/screen width.

The parent container templating had to be changed by utilising a Drupal pre-processing hook (theme hook suggestion alter) so that I could introduce a twig filename of my choosing for the engine to pick up. This involved changes to the custom.theme file, the addition of a new twig template placed in the appropriate template subfolder and finally, implementation of styles (I added it to a sass file that was already producing similar markup for this View), processing the styles, flushing caches to see if the new styles were taken into effect.

 During commutes, I've been reading Steve Krug's book on UX design titled "Don't make me think!". I'll write a separate review of my thoughts on this book. 

I've found some time to go through our codebase root project because there are several config files that I have no idea what they do (most of them), so I thought it best to do some research.

- codario.json: helps manage project dependencies and is specific to our hosting and config setup.
- .editorconfig: helps to implement coding best practices such as consistent spacing and white spacing. Not sure if this is specific to the Drupal ecosystem or exists in other tech stacks.
- .gitattributes: gives attributes to pathnames when git actions are performed.
- .gitignore: add sensitive files and folders to this file so that you do not add them to your repo.
- .gitlab-ci.yml: a list of executable commands to run our continuous integration pipeline build, test, (deploy) stages.
- composer.json: general list of dependencies required to run your project, managed by the composer package manager. This file helps third-party users download and install the project and the dependencies needed.
- composer.lock: specific list of dependencies and their exact versions. This is required so that you are in the same versions as your co-workers.
Hosting specific config files related to docker container images setup.
