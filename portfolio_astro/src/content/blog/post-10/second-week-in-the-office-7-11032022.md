---
title: "Second Week in the Office (7-11/03/2022)"
description: "A blog post about Second Week in the Office (7-11/03/2022)"
date: 2022-03-11
updateddate: 2022-03-11
brief: "It's hard to believe that it's been two weeks already! Time flies when you're having fun! It's been an information overload 🤯 for both technical and organisation related topics but that is how it always is in any organisation and I think part of bei..."
subtitle: ""
heroimage: "https://cdn.hashnode.com/res/hashnode/image/upload/v1650231948516/qtCYF0qZf.jpg"
heroalt: "Second Week in the Office (7-11/03/2022)"
tags: []
---

It's hard to believe that it's been two weeks already! Time flies when you're having fun! It's been an information overload 🤯 for both technical and organisation related topics but that is how it always is in any organisation and I think part of being an effective developer means consolidating new information quickly. Easier said then done though!

If you are struggling to memorise all the details, give yourself a break as colleagues will not expect you to remember everything and appreciate this takes time. But on your part, it helps to take notes and actually reflect and review them to cement that knowledge.

## My Local 🍺🏠
This week, I was focussing on becoming more efficient with getting my local environment up and running. The hosting provides a local which allows us to test new features or make changes to existing pages requested by other teams without the worry of breaking the actual live site. This way of encapsulation allows the dev team to test functionality with just enough features to develop a Drupal site locally for example:

- Web server (Nginx)
- Frontend Caching (Varnish)
- Server-side scripting language (PHP)
- Database (MariaDB)
- Dependency Manager (Composer)
- Node JS / NPM

Pygmy is a tool used to get the local Docker Drupal Development environment (DDD env) running on Linux or Mac. It starts the Docker Containers for our host provider DDD env. It also works behind the scenes to manage DNS requests and ssh keys.

We use Composer to run the app based off a docker-compose.yml configuration file and a separate Dockerfile. The config file defines the services of the local site so it can be run independently from the live site. We use composer commands in the CLI to run services such as start, stop and rebuild, view status.

Needless to say this was an abstract process without context the first few times I was running these commands. One mistake I made was inputting this command: docker-compose up. This starts the application but attaches the containers for live service. This would take a long time as the actual website is several thousand pages. We should append '-d' which is a flag for detach: this runs the containers in the background without the link to the live service. Lesson learned: read the instruction commands carefully!

## Go with the Flow 🏄🏽‍♂️

![Flowchart.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1650232259596/lAJn4dprZ.jpg "Flowchart showing workflow and quality control process for managing IT tickets")


As a team, we discussed our general workflow process when it came to handling IT tickets and how a developer would move through each site as the work on a ticket progressed. I'm certainly a visual learner, so it helped me to illustrate this process and see how each tool comes into play. In light of these conversations, there is definitely room for improvement and the hope is that with a wider team, we can plug some of these holes.

Workflow planning is perhaps something that independent learners do not go into depth because of the nature of that work. I certainly felt that way developing solo projects without feedback so you could imagine the workflow process being more linear and with few, if any feedback loops.

[Miro](https://miro.com/) dashboard makes it effortless to create stunning and illustrative diagrams for team resource management. The image above was based on a template so it was just a case of tweaking some of the labels and positioning. I'd highly recommend Miro to dev teams to improve productivity and help explain abstract concepts especially to junior team members and new starters.

## Styling with Tailwind CSS
Historically, the styling was managed with Bootstrap 5 (BS 5) and SASS. They are still being used but there are plans to migrate away as the components in the UI kit although provide fully developed solutions, are restricted in customisation and it requires import of the whole library when in our case, we probably use a small percent of the library. This is why the team are moving to Tailwind CSS (TW CSS) in the future as the website grows, because TW CSS provides low-level utility classes as smaller, building blocks for your finished components allowing for more individuality so that the style looks completely different to other sites. This is an important feature as the organisation looks to distinguish itself from its competitors. Use of out-of-the-box solutions has a tendency to reproduce similar looking UI which can be detrimental to a website's identity and branding.

Naturally, this would mean more time building components, but with TW CSS we don't have to re-invent the wheel: the framework along with documentation and active community support, provides a [library](https://tailwindui.com/) of common use-case components and a [playground](https://play.tailwindcss.com/) to test functionality. This is great for brainstorming and early modelling as it's all handled online- perfect for sharing with non-devs.

Other advantages of TW CSS include purging unused styling with a Just-In-Time compiler, so that you only import the styles you use into a vanilla css file, effectively reducing the bloat on file size and performance. Although you can simply use the class names inline which you may be familiar with if you have used BS 5 or Materialize css, emphasis is placed on declaring variables to maintain consistency across your webpages. This means if there is a decision to change the colour palette, font families etc. you can simply update in one global stylesheet that stores these variables.

I'm looking forward to using TW CSS and take advantages of its nuances that I didn't have the opportunity from self-learning using plain CSS. TW FTW!

## Storybook 📖
The team are using khttps://storybook.js.org/ as part of the process of managing the development of TW based components. This app is an advanced prototyping stage moving on from TW playground. We can get initial feedback from other teams with the online playground, but often the final product needs custom themes applied to it which is where Storybook comes in. We also use Storybook to program attribute form fields which will be displayed in Drupal's content layout editor for other teams to add or modify content.

## Walk through of my first code review Merge Request, first commit and Pull Request! 🎉
I had a lot of one-to-one help with this one which I'm grateful for my colleague. Code quality control is the bread and butter of dev jobs and I will get quicker with this process I'm sure. We use GitLab as our version control system and most of the terminology is similar to GitHub which I have some basic knowledge of. I was encouraged to use the CLI and going forward, it's something I need to keep practicing on as I am only familiar with Visual Studio Code's built in source control (which makes it super easy to go from initialising a repo to pushing commits) and GitHub's GUI for managing the same process.

## Git Pipeline and Hosting 
We finished the week with a general discussion on the concept of continuous integration (CI) via the pipeline when a Merge Request is being performed. CI is a DevOps philosophy where developers will automate their code updates through merge requests into a central repository several times a day.

The config file is stored in the .yml develop branch and it is in this file where the build and testing processes can be defined and then implemented via the pipeline.

We talked about the need to have a hosting provider serve multiple instances of your website for each stage of your website development: dev.website; staging.website; and actual.live.website for example. This separation of concerns helps to control unwanted changes to our live site and allow testing in protected environments. To add to this, each developer will have their own local environment where initial code changes take place. When that developer is happy with their changes, they will commit to the development website for review.