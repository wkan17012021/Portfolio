---
title: "Thirty-Second Week in the Office (03/10 - 07/10/22)"
description: "A blog post about Thirty-Second Week in the Office (03/10 - 07/10/22)"
date: 2022-10-08
updateddate: 2022-10-08
brief: "I've been busy working on several related tickets for a larger issue (or story? ). Our Digital Director returned  from maternity leave so there were some introductions and then some catch ups on the state of the codebase prior to her leave. 
This bod..."
subtitle: ""
heroimage: "https://cdn.hashnode.com/res/hashnode/image/unsplash/XNIjmb6Ax04/upload/v1665241320297/AAfpETLn-.jpeg"
heroalt: "Thirty-Second Week in the Office (03/10 - 07/10/22)"
tags: []
---

I've been busy working on several related tickets for a larger issue (or story? ). Our Digital Director returned  from maternity leave so there were some introductions and then some catch ups on the state of the codebase prior to her leave. 

This bodes well for the team as previously, we had an obvious bottleneck in our work flow with only one senior developer being able to approve MRs and push to stage and live sites. This meant we were really limited in what we could deliver to other teams as improvements to the website, as our one senior was also doing the admin and team management tasks which take precedence. 

For me specifically, this meant I was working more independently on what at first I thought was a manageable ticket, turned out to be a large task which should have been broken down into smaller checkpoint style tasks. So instead of getting frequent feedback on small commits to ensure the project was going according to plan, what happened was, I was trying to take on the whole task myself creating more problems than I was fixing. Fortunately, I received some constructive criticism from the team lead stating that my work was bad practice, as it creates more problems especially with maintainability in the future and ultimately wastes time going down a solitary path with a lot of resistance. The less stressful approach in hindsight, would have been to wait for the team lead to return and ask her how she would approach this type of problem. In the end, we opted for use of a Drupal module and JS library which implements an interactive map feature for users to click on and get redirected to more relevant, specific information. There was also some steps on classifying fields (which I missed when working alone) so that if an editor created new content, then these new entries would automatically be generated on the map as markers or profiles in the database. Typically, similar contextual information is presented together on the front-end (for you to style with twig templates and CSS) with the help of the Views Drupal Module which manages database requests and can pull out content types and apply filters based on fields.

All in all, there is light at the end of the tunnel: this task was set back in July 2022 with a tentative deadline in Sept 2022 but was subsequently deferred due to the organisation's more pressing annual event. Now that the event finished, we hope to have the web pages available in end of November 2022. 

Apart from that and working on some isolated tickets that fell down the priority list, this hasn't left enough time for continued learning outside our stack. In any case, it is Hacktoberfest, so I hope to provide some contribution to open source projects!