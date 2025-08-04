---
title: "Week 20 in the Office (11 - 15/07/22)"
description: "A blog post about Week 20 in the Office (11 - 15/07/22)"
date: 2022-07-16
updatedDate: 2022-07-16
heroImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1657960859525/CdG6UaiMx.jpg
tags: ["5f9435c7fbdce372c9a56fb6"]
---

I've had an up-and-down work week where some days have flown by and I haven't faced that much resistance to productivity, and then others where it has been so attritional (mainly because of broken local environment build process and issues with Docker). 

## Tickets 🎫
I've been working on small-ish tasks like rearranging some styling where visual defects where observed during content build and images not being stretched to the parent container width. Fortunately, these were issues I could work independently on and come up with an alternative fairly quickly. 

I have also been assigned another ticket which is a bit more complicated: a jQuery modal dialog that gets injected into the DOM after a click event on a Drupal block element which is part of a carousel feature. I'm familiar with modifying styles when the content is added via the twig templating engine but this is different.

The modal close icon is hidden behind our fixed positioned half opacity navigation bar. Moreover, the background can be scrolled while the modal is active on desktop, and I find scrolling in general doesn't work on mobile. The UX is atrocious and it most likely requires changes in different scripts and styling to resolve these bugs. On top of that, I have no experience with jQuery but I have an excuse now to learn it so I'm putting in time familiarising with the syntax (thanks goes out to Jon Duckett's book on JS & jQuery). 

However, whether that unlocks the problem I'm not sure as our codebase is vast and the minified library file I can't make heads or tails of it. I tried adding event listener breakpoints to the modal click icon to see where the functionality code is actually being derived from, but the function and variable naming is not meaningful. 

I've managed to un-hash our JS files and find that there are several jQuery custom scripts that have been added to the page which may or may not be associated with the modal. I'm thinking maybe it's easier to edit the elements around the modal rather than overwrite the modal code itself.

## Continued Learning 📚
In terms of independent study, I'm still working towards my quarterly goal of improving my knowledge on testing. This time, it is more specific and reachable with a focus on front-end testing which I can see myself implementing on personal projects soon. Just need to smash through the JS video tutorials on Testing Automation University!

I also had a catchup portfolio review meeting as part of the apprenticeship and out of that discussion, I came away with more small project ideas I can certainly use to embellish the portfolio. A lot of these will be behavioural / management skills examples which I hope will fulfil my claim of professional competence in web / software development. So, I think it's really just about getting exposure to other stages of the software lifecycle so that I can create a project report on them. 

I managed to fit in a small practice project to stop the coding skills from getting rusty. Check it out [here](https://github.com/wkan17012021/product-preview-card-component-main). I feel this is necessary as I don't actively do enough development, rather it is about discussions, admin, docs prep etc.

To cap off the work week, we had a professional skills workshop on customer support, with the lessons learned from that being essential in the run up to the organisation's annual flagship event, where I will be acting as tech support!

This is what I gleaned from the session in no particular order:

- Customers are not restricted to front-facing scenarios in the usual sense. They include practically anyone you collaborate with. Tailor your language and use of tech jargon accordingly. 

- Many issues arise around customer support when there is miscommunication. So, always ask for clarity early on to gather requirements.

- Listening plays a vital role. Don't impose your past beliefs, stories or experiences on any customer as this can lead to prejudice and a negative attitude maybe conveyed from yourself. Treat each customer as an individual and ask if they feel they were understood and actually listened to.

- Engage with the customer: be naturally curious, believe they are good-natured. Don't be hesitant to repeat the facts back to them to establish just that- the situation and the facts.

- Use empathy rather than sympathetic listening. You can consider yourself in their situation as this can help to understand how they are feeling. But, never personalise the situation especially with aggressive and upset customers.

- It could be beneficial to write a to-be-list detailing half a dozen positive attitudes that you want to portray so that you consciously exhibit them when you are engaged with a customer. The hope is that you don't get tunnel vision and fall into the same traps around poor customer service by not following the guidance above. Moreover, we perform the majority of tasks sub-consciously as they are committed to our memory. Having this list and practicing it often with success would lead to you exhibiting the positive behaviours naturally. 





