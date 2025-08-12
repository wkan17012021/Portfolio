---
title: "My First Volunteer Opportunity"
description: "A blog post about My First Volunteer Opportunity"
date: 2022-03-06
updateddate: 2022-03-06
brief: "The Story
After completing the bootcamp, I needed to gain 'experience' and add extra flair to the CV. The IT recruiter suggested volunteering which is a great way to learn by doing as opposed to learning from online resources without a time frame or ..."
subtitle: ""
heroimage: ""
heroalt: "My First Volunteer Opportunity"
tags: []
---

## The Story
After completing the bootcamp, I needed to gain "experience" and add extra flair to the CV. The IT recruiter suggested volunteering which is a great way to learn by doing as opposed to learning from online resources without a time frame or accountability. After searching several council websites, I found a post requesting an opening to help with the revamp of a theatre / drama site for kids: [ptc.org.uk](https://ptc.org.uk/ptc_shows/i-spy-with-my-little-eye/#fun_and_games)

After contacting the representative who was very polite and cordial, it turned out that this task would likely be too difficult for me (in retrospect it would have been!) but suggested I produce a UI feature for their Wordpress (WP) website. The initial scope was to produce the popular matching pairs card game on one of their existing webpages.

## The Process
I had never used a Content Management System (CMS) before. I had some fundamental knowledge of HTML, CSS and JS and from that, a few projects frantically cobbled together at the end of the bootcamp. I was not familiar with back-end technology or PHP, I made that clear to the website owner but that I was willing to "learn on the job". It didn't seem to phase him (after all, he was getting free tech support) and he just requested I just do what I could handle and if I had questions he would try to help.

I googled to see if anyone had done something similar to what I needed. It turns out there is a plugin maker ([H5P](https://h5p.org/documentation/content-author-guide/tutorials-for-authors/memory-game)) dedicated to producing these types of games. I didn’t want to start breaking the live site so I researched and downloaded [Local](https://localwp.com/), a free development environment that allows you to create a WP site offline and trial your themes, plugins, styles etc. In fact, I used Local to build the first iteration of my blog site (thumbs up to Local)! But after much deliberation, I decided I wanted to host and serve the blog site for free and [Netlify CMS](https://www.netlifycms.org/) template starters appeared to fit the bill. Although, I've iterated the process again and now exported my content to Hashnode!

I used Local to familiarise with the WP graphical user interface (GUI) and the plethora of plugins. Getting the game to render was the easy part. The "client" was also looking for image editing of their photoshop design files, so that for example two objects in one file could be isolated as two images used for the matching pairs. I attempted to edit the images using open source tools like Photoscape X and GIMP but after a lot of tweaking and failed attempts to get the right edits, I signed up for a limited trial version of Photoshop.

Eventually, I performed the edits as per the client requests. I served the images after cropping and compression (a lesson learned after finishing my portfolio and viewing page performance within Chrome dev tools) so the client could pick and choose which ones were best for the card game. In the end, a combination of whole and edited images were used.

I was advised to use the staging site for changes and test functionality. This allowed me to follow the same process for my local server site on their staging site. Overall, the learning experience was positive as I was "learning on the fly", making mistakes and having to resolve problems myself. Fortunately the client was patient and understanding. I learned about scope creep and the need to state in writing what my role and responsibilities are for a task (although this is done in a business sense, it probably doesn't apply for charitable work).

WP is an excellent way of churning out web content which follows a preset structure and it could do that efficiently if the client's requests remain within the capabilities of the plugins and the general settings (otherwise hire a WP Developer!).

## Challenges and Reflection
- I would say my creative web design skills need improvement. It was the first time using Photoshop, I quickly learned some basic image editing skills but would really need to take a course on identifying what the software can offer me compared to its open source competitors.
- Responsive design. Depending on the number of pairs, the game would have uneven number of cards on a row as the screen width changed. I couldn’t find an elegant solution for this, so i went for media queries at several breakpoints to override the default or plugin styles. I used a lot of time working out which styles controlled which elements width but managed to 'hack' a solution.
- One bug that I was not able to resolve was a request to copy the game to a different page with internal tabs feature which was rendered using a separate plugin. I recall I added a new tab to make a copy of the game which worked fine initially. After iterations of the game such as responsiveness and positioning, I decided to delete that tab and recreate on a separate page. Except that the tab label was empty and couldn’t be removed nor could the game be re-inserted into that tab. I deliberated over the tab plugin (Advanced Custom Fields) and the page editor in WP dashboard but to no avail. I researched if anyone had a similar issue, the only response i got was deactivate then reactivate all plugins. In the end, the part time web developer who originally produced the website resolved it by pulling the database and all the themes, plugins again from the live site. The developer noted the tab fields created needed to be added to a template in order to display on the website.
- After finally getting the game to show up after resolving all other problems, I was informed that the the feature was not rendering on the website owner's personal phone when it had done previously. Long story short, refresh browser cache 🤦🏻. But this process of troubleshooting and forum posting took about a week to sort out. I need to dedicate some time to learning about how the cache works. Another one to add to the list! All fun and games! 🕹