---
title: "Week 9 in the office (25-29/04/2022)"
description: "A blog post about Week 9 in the office (25-29/04/2022)"
date: 2022-05-01
updateddate: 2022-05-01
brief: "This week, most of my time has been spent on progressing tickets. This is good as it means I have reached a competency level where I can understand the requirements of the issue, then spend time researching a viable solution independently. Based on t..."
subtitle: ""
heroimage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1651438603696/SkrW9NhxJ.jpg"
heroalt: "Week 9 in the office (25-29/04/2022)"
tags: []
---

This week, most of my time has been spent on progressing tickets. This is good as it means I have reached a competency level where I can understand the requirements of the issue, then spend time researching a viable solution independently. Based on those findings, I would implement an appropriate fix and propose the MR (citing where I found the potential solution). 

Some of the localised issues this week involved fixing style defects on the homepage which meant investing time to understand the styling codebase. I configured our Storybook features to extend the viewport add-on by incorporating Tailwind screen size widths as well as several media device dimensions similar to what is available on Chrome Dev Tools. I added the  accessibility add-on which serves as another layer of testing for colour contrast and visual impairment checks during the UI prototyping phase. 
With this time investment, I’m looking forward to incorporating Storybook into our front-end production workflow. 

Some progress on Drupal Webforms was made, mainly on email handling and configuration. We are attempting to build-in seamless language translation for contact forms for our overseas viewers. Problem is, should we extend language translation configuration through core or invest in a contributed module with more accurate translation? We only want translation for specific forms- turning on translation for the whole site may affect performance unnecessarily. We still need to work out the configuration settings through Webforms to get the form fields translated per language in a user-friendly way and manage the submitted data in the backend. 

We gained more of an insight in to a potential apprenticeship project that certainly ticks all the boxes in regards to software development training. Without going in to too much detail, the project would require: sensitive data collection probably using Webforms, with an understanding on how to safely transfer and store the data. Perhaps the most abstract part of the project is to integrate a machine learning model to assess the textual content (sentiment analysis) of the user input and derive a “rating“ based on historic input of similar submissions. Based on say, the top 50 ratings filtered in a dashboard UI or perhaps using Views module, these datasets can be displayed to an appropriate team for manual checking / vetting. Ideally, the whole process should be handled within our CMS so that it can be managed more easily and so that company users are familiar with the existing functionality. Let’s see where this one goes….