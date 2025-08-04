---
title: "Week 24 in the Office (08 - 12/08/22)"
description: "A blog post about Week 24 in the Office (08 - 12/08/22)"
date: 2022-08-13
updatedDate: 2022-08-13
heroImage: https://cdn.hashnode.com/res/hashnode/image/unsplash/T7K4aEPoGGk/upload/v1660383367068/47JMtp40C.jpeg
tags: ["56744723958ef13879b95483", "56744721958ef13879b94b91", "56744721958ef13879b94c2b"]
---

## Work Update
We are just over 2 weeks out from the organisations main event. Things are certainly heating up as the amount of proof-reading has increased coupled with constant content changes on webpages and our online event platform. Double, triple-handling is common but I suppose these tasks will always exist and are not specific to any organisation. 

Apart from progressing some small tickets and content webpage build, I've been mainly focussing on monitoring our digital platform chat support widget. Tawk.to is in my opinion, a very intuitive app that can manage the majority of your tech support needs. If you can't find what you need through their blog articles or video tutorials, they still offer a chat support and they were very quick to resolve my issue: how to amend the chat widget 'out-of-office' hours message which is displayed to the user if all tech support members are logged off. Like many things, it's not perfect: to date, it is not possible to disable logging on the backend admin, every time a user navigates to a different page on your platform. You can imagine this being annoying to manage, as really you're interested only when the user posts a question. Also, there is no way to automate a set of customer feedback questions to the user after you have resolved their case. This is a process you see so often, but apparently it can not be done on a free membership unless perhaps a paid account is used or you integrate with another third party app. I resorted to copying and pasting some boilerplate survey questions to assess the quality of my service, and I'm looking forward to seeing how this turns out!

## Interactive Maps with HTML and CSS, mostly... 🌏## 
### Situation
An interesting learning experience I had this week (and will progress to next week), was a brief from a content team requesting we implement an "interactive" image (which for our use case, was a global map) whereby users can click on specific areas of the image and a popup would reveal displaying that country flag and a link to another webpage for more information regarding an initiative that the organisation had created.

### My process

1. First things first, I searched google for ideas on implementation but nothing conclusive that doesn't require frameworks. I had no idea how this feature could be done but it is quite common so I thought it's worth investigating. 
2. I stumbled upon this [enlightening blog](https://matemarschalko.medium.com/interactive-image-maps-and-closable-popups-with-html-and-css-only-31fe36c70092) which uses a HTML and CSS solution. It lays the groundwork for this feature and generally was explained succinctly. It also solves my problem of displaying pop-up / tooltip like information after clicking on the anchor tags. This is a neat way of imitating interactivity without using JS. 
3. I had to test it in a more simplistic environment, so [w3schools](https://www.w3schools.com/tags/tag_map.asp) was the go-to source. But the ```
<map/>
``` tag was part of HTML3 spec and not designed with RWD in mind. So, I would need to reach for a different tool to resolve this. The main issue is that the coordinates which define the 'hotspot' areas which you can attach interactivity to, are hard coded absolute values. So, they do not adjust as the dimensions of the image changes. I couldn't find in the blog article how the writer overcame issues with responsive design.
4. I found this alternative using [SVGs](https://thenewcode.com/760/Create-A-Responsive-Imagemap-With-SVG). As the SVG scales, the coordinates should recalculate based on the new size. However, article comments mention it doesn't work with Wordpress and after a similar google search, it appears SVGs are not 'accepted' in Drupal also. At least, not as an off-the-bat solution. I didn't want to go down the rabbit hole with this one, but learning more about SVGs is beneficial. The timeframe for this feature unfortunately does not allow for more research (and I'm doing most of this in my free time!)
5.  A General SO search led me back to the community-agreed upon [jQuery solution](https://stackoverflow.com/questions/7844399/responsive-image-map). In particular, [Stowball's solution](https://github.com/stowball/jQuery-rwdImageMaps). 
This uses a jQuery plugin but it is not maintained (at the time of writing, last PR was 2016). Having said that, someone came up with a [plain JS version](https://github.com/lucakiebel/vanilla-rwdImageMaps) but I couldn't get this to work in my local IDE. Unlike the jQuery example, the developer for the plain version did not provide a demo (the link was broken at the time of writing). in any case, it might be worth revisiting this to refactor code and reduce dependencies.
6. For good measure, I did a search on Drupal.org forums to see if anyone else had a similar issue. Invariably, the outcome was to use the [jQuery plugin](https://www.drupal.org/forum/general/general-discussion/2021-11-23/image-map-question), or attempt an outdated [module install](https://www.drupal.org/forum/general/general-discussion/2021-03-25/looking-for-a-module-or-other-solution-to-create-a-image).

### Going forward...
Currently, I've come up with a proof-of-concept in my local IDE, which combines the pop-up feature from Mate Marschalko's article, with the responsive / recalculating coordinates in the <area/> tags of the <map/> tag from [Stowball's repo](https://github.com/stowball/jQuery-rwdImageMaps). 

The next and arguably, harder step, is to integrate into our codebase and Drupal's CMS which requires following its content build process, injecting the CSS and jQuery for this particular page and double-checking the responsiveness. If you're reading this, hopefully you will save some research time and produce interactive maps quicker, with less hassle! 🗺



