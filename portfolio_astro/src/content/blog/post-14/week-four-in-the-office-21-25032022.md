---
title: "Week Four in the Office (21-25/03/2022)"
description: "A blog post about Week Four in the Office (21-25/03/2022)"
date: 2022-03-26
updateddate: 2022-03-26
brief: "This week I have been focussing on version control and getting into the habit of following a set of commands to ensure I am working in the right branch with the latest changes applied. I had my first one-to-one session for my apprenticeship training ..."
subtitle: ""
heroimage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
heroalt: "Week Four in the Office (21-25/03/2022)"
tags: []
---

This week I have been focussing on version control and getting into the habit of following a set of commands to ensure I am working in the right branch with the latest changes applied. I had my first one-to-one session for my apprenticeship training to gauge my current technical knowledge and where I am lacking, build on and reinforce those deficiencies. This will be important when it comes to using frameworks and libraries. Apart from [continued background reading](https://internetfundamentals.com/) and more component connections into the CMS, it was a fairly straightforward work week.

## Git Housekeeping 🧹
Another lesson to remember: I will get into a procedure where every time I'm working on a ticket, the feature branch I'm working on will likely be out of sync as other developers make commits to the dev branch. So, I will carry out the following commands before commencing code changes:

**git pull develop** - to pull all current changes from develop branch down

**git checkout my_branch** - to switch to my working branch

**git merge develop** - to sync my branch to the dev branch

Our Hyper terminal may also require this additional exit step: esc : x

**git status**

## Drupal Block and Page Layout Builder
A lot of my utilisation was spent on speeding up the turnaround from taking TW markup UI components through to rendering as a block to be placed in a template page of our backend system. The teething issues were building the local env and identifying the corresponding dynamic variables from the stories.js and mapping them to a separate --block.twig file so that the back-end GUI can pick this up as form fields for content creators to populate.

As you don't get an instant visual feedback loop, it is more time consuming to identify where along the process there was a discrepancy in the mapped variable. 
```
{{dd(content)}} 
``` 
We used dd (drupal dump) content above the --block.twig file markup to output the data structure stored in variables for that template. This then allowed me to drill-down in to where the variables were nested and access them via bracket and dot notation.

Overall, I feel this was a good learning process and I certainly need more practice to become more fluid in getting the front and back-end to talk to each other. The background training on Drupal will surely fill in the gaps.