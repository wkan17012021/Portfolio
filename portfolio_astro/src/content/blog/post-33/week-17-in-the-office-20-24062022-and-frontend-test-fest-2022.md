---
title: "Week 17 in the Office 20-24/06/2022 and Frontend Test Fest 2022"
description: "A blog post about Week 17 in the Office 20-24/06/2022 and Frontend Test Fest 2022"
date: 2022-06-24
updatedDate: 2022-06-24
heroImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1656085671773/fjhyNz6ti.jpg
tags: ["5f9435c7fbdce372c9a56fb6", "575d75e2da600b8ef43e506d", "56744723958ef13879b95230", "5f3f1dcc5b3ac8481821c47c", "56744723958ef13879b9549b"]
---

I'm combining the work week with continued professional development events due to lack of work topics to discuss, and laziness.

## Work Stuff
For this week, most of the time was spent on fixing my local environment (core updates were made to development and stage which were conflicting with local) and independent study on Drupal CMS and continuing on the Frontend Engineers Path Course on CodeCademy.
We had a code review for an issue I've been working on for about a month or two. It was good to see where mistakes were being made and compiling a 'lesson learned' checklist which could be taken forward for future tickets. It's also laid down some groundwork for me to write about in my portfolio for my apprenticeship journey. Although I wouldn't say the issue touched on all steps in the software development lifecycle with the same weighting, it still had a lot of learning experiences and good exposure to Drupal's process for theming and a bit of backend processing. Moreover, it's encouraged me to write down SMART goals and illustrate the journey with milestone achievable targets. I think with more clear milestones, it will make the learning path less daunting and helps clarify where you want to be say in a years time.

## Frontend Test Fest 2022
I was definitely looking forward to this 1 day event: one of my personal targets is to improve knowledge and practical skills in testing. I think confining testing for frontend purposes helps to make the task more achievable for me as most of my experiences have been on the client-facing UI, so the test applications were more relatable.

There were so many good speeches, panel discussions, keynotes, it was hard to decide which one resonated the most with the audience. There were some technical difficulties which made the experience less pleasant but the two event co-ordinators ([Angie Jones](https://twitter.com/techgirl1908?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor) and [Cassidy Williams](https://twitter.com/cassidoo?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)) were so funny and charismatic! The thought of presenting online to hundreds of virtual strangers is a daunting feeling for me. But for them, they seemed to be in their element and handled the technical mis-haps with ease.

### Accessibility
Again a hot topic. Beyond the high level speech about changing developer mentality around inclusive design, some useful resources were recommended.

- Try npm package [axe.core](https://www.npmjs.com/package/axe-core) which supposedly can catch around 60% of A11y common issues. Storybook.js [accessibility add-on](https://storybook.js.org/docs/react/writing-tests/accessibility-testing) for component testing actually incorporates this into their sandbox interface.
- The [Wave site](https://wave.webaim.org/) can be used as a test for A11y by passing in the URL. It also has a browser extension (like many third party apps) and a testing engine which could be integrated into your pipeline. An alternative is Chrome's Lighthouse dev tools app (typically covers a third of A11y issues).
- An issue that developers have with managing A11y issues is that a checklist of systematic process needs to be followed to ensure that these requirements are being met. We could look through the WCAG verbose guidelines or try this [auditing checklist](https://www.w3.org/WAI/test-evaluate/preliminary/) instead which is more condensed with use cases. It makes for an easier read and if it is lacking, then resort to the standard WCAG.
- Here's another learning resource for building up your knowledge and appreciation for accessible web content: https://www.ministryoftesting.com/dojo/lessons/30-days-of-accessibility-testing

Unfortunately, it was conceded that A11y cannot yet be fully automated into your CI / CD, it still requires manual checks and auditing. Most test tools can only test a few of the common A11y mistakes anyway and they do have loopholes. For example, a check can be performed on all image tags for alt attributes, but you could easily add irrelevant text or characters as a substitute for meaningful, descriptive text. The check would pass. 
It should be noted that every company culture, size and budget is different. So, it's no surprise that the focus on A11y will differ from organisation to organisation. One approach is to check pages with high traffic and prioritise a11y on those. If budget is willing, take on a consultant or agent to audit your site and get them to make fixes, implement best practice and up-skill your staff. A more affordable option could be to offer your site to a service like [Forest](https://littleforest.co.uk/feature/web-accessibility/) or [Fable](https://makeitfable.com/) where disabled workers are paid to test your site manually. That way you can get unbiased feedback rather than a skewed opinion from a developer for example. Or hire UI/Ux designers with A11y skillsets!

Some of the other key takeaways were:
- Use Cypress for your front end component testing! It was heavily marketed but there are alternatives that some presenters listed: Selenium (open-source); Jest, Enzyme. Find the tool that is compatible with your stack and then decide on how much you are willing to spend. 

- [Applitools](https://applitools.com/) for teaching testing and providing cross-browser compatibility test solutions for UI.

- I will be diving into this one: Testing Automation University! They have some beefy courses and I'm not sure all are free, but it's worth checking out especially if you are a beginner in testing. They also have a module on accessibility.
https://testautomationu.applitools.com/learningpaths.html
https://testautomationu.applitools.com/accessibility-testing-tutorial/

- End to end for the frontend should be geared towards making tests that are not 'black box' but allow you to migrate that code from one testing framework to another and ultimately port between tech stacks. 




