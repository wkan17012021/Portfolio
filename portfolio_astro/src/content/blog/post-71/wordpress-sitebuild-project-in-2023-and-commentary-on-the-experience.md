---
title: "WordPress SiteBuild Project in 2023 and commentary on the experience"
description: "A blog post about WordPress SiteBuild Project in 2023 and commentary on the experience"
date: 2023-04-08
updatedDate: 2023-04-08
heroImage: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/zs98a0DtKL4/upload/663ca84e0c8369fbba5578ed11bcc2f3.jpeg
tags: ["5f9435c7fbdce372c9a56fb6", "57444da29ade925885158cb0", "56744721958ef13879b94beb", "63542f6dfe8087002d411404"]
---

## What's the inspiration behind this project?

* I found a local community business with an outdated online presence and decided to rebuild and redesign its site. This sped up the planning process as the copy text and media already existed, it was just a case of repurposing and rearranging it with more modern web best practices in mind.
    
* I wanted to compare my early web career experience with Drupal CMS against the more frequently used WordPress (WP) CMS. I wanted to see if I could create and host a development sandbox site faster with WP or Drupal.
    
* Gain WP site building experience, how it may differ from Drupal and any pain points which may be encountered.
    
* I also want to compare security, performance and SEO metrics from the actual site with the test site I have made to see if from a business case, the test site if implemented, would provide value to the organisation.
    

## What is the Project?

The actual live, legitimate site is here: [https://www.hamptonpool.co.uk/](https://www.hamptonpool.co.uk/)

My test site is here: [https://dev-hampton-pool.pantheonsite.io/](https://dev-hampton-pool.pantheonsite.io/)

It's a non-profit, community-run, local, open-air, heated swimming pool for nearby residents. The club/organisation offers swimming memberships, payment types, pay-as-you-go etc., and swimming classes for adults and children. There is also a separate shallow pool for kids. The club building has an indoor gym area and the organisation hosts outdoor, family activities like play areas for kids, barbeques, sports, music venue hosting and marathon competitions. Perhaps its unique selling point, is that the heated pool entices evening swimmers and often the club will open late for moonlit swimming.

I chose to rebuild this site because I'm familiar with the charity club. The website (as of early 2023) is not responsive, the user journey could be made more clear in my opinion, and the layouts and design patterns look drab and unappealing. But, the goal of the website appears to be mostly informational (static) apart from pages which redirect the user to several different third-party registration forms (swimming, gym or other activity membership) or the use of the mobile booking app. So, I felt the complexity of the project was within my capability but still has the opportunity to be improved as my learning journey develops.

In the future, I would have liked to create a more intuitive user journey by redirecting all the registration forms into one page or linked pages and having the CMS handle forms and data submission rather than redirecting to third-party applications. Another challenge would be to create and deploy the mobile app for booking classes and registering members. The app should be made available on iOS and Android systems but as I have no mobile development experience, this one will have to wait!

## Project Setup and Early Stage Configuration

There are some caveats to this project:

* With no prior WP experience, I wanted to get set up quickly so I used [Pantheon](https://pantheon.io/product/wordpress-hosting) platform's free tier which at the time, offers 2 sandbox projects with separate environments for dev, test and live sites. I have used Pantheon for Drupal sites so I was familiar with the UI. Pantheon provided a seamless install of the CMS so you can get building quickly, there is source control built-in and I understand Pantheon implements its own CDN and caching mechanism to rapidly load your site- if you were building the site from scratch, you would have to configure this all yourself.
    
* I anticipated for this project that some code changes would be necessary based on my limited experience with Drupal 9/10, but it turned out that the re-creation of this static site could be delivered through free plugins, templates, pre-styled component blocks etc. The heavy lifting was done using the Astra plugin in combination with Elementor WYSIWYG drag-and-drop builder. Contact forms were created with Ninja Forms UI plugin. Tables were constructed with TablePress plugin.
    
* SEO wasn't considered for this site as this isn't a blog website. But perhaps in the future, this is an aspect worth revisiting if this site was to be live for public consumption.
    

## General Build Steps

I planned the site structure and hierarchy by sifting through the original website to understand the recurring themes and top-level pages. I discounted sections which repeated themselves on separate pages and aimed to combine pages with short content into larger more general web pages to reduce the user journey. I opted to maintain the same navigation headings and secondary links as I felt the navigation on the original site was intuitive for readers. This was also the case for the footer section.

I did not like the site's logo so I spent some time exploring AI-generated logos ([Looka](https://looka.com/)) and was pleasantly surprised by what was returned after feeding it the company title, contextual wording, picking a colour palette and typography. A selection of worthy logos was generated which would have taken me longer to produce and half the quality.

![Grid pattern of AI generated logos using Looka.com which all read Hampton Pool](https://cdn.hashnode.com/res/hashnode/image/upload/v1680947184109/fe3f340e-2d0e-4992-bc16-894f970f7d58.png align="left")

I researched modern WordPress site-building tutorials to see what free UI tools I could use and gives me enough choice and flexibility for the layout and styling of content. I found Astra with its Starta templates was fit for my purpose and its free tier was very generous.

From there, the process was a case of methodically going through most of the original site's web pages and rebuilding them from the original single-column layout to a more varied structure leveraging flex and grid CSS principles. As I did not have a design brief, wireframe or spec, I was given free rein to try out any of the design elements available to me through the free plugin version:

* I leveraged card and hero components for images and short text
    
* 'parallax-like' background images with overlain headings
    
* mix and match blocks from the starter templates
    
* used accordion and tabs feature to collect related text together rather than a long column of text
    
* improved the look and feel of the tables for swim times, classes and pricing
    
* changed some of the layouts of the top-level pages to have a main content region and a secondary sidebar for ads, to strongly promote specific pages and include an OpenWeather API widget.
    
* Careful use of animations and hover transform properties but not over-doing it!
    
* I installed the 'All In One WP Security' and 'SiteGround Optimizer' plugins to see if there were any tweaks that could be made to improve performance and security. Following a quick video and the plugin display, it was easy to apply best practice changes like minification and image optimisation to improve my Lighthouse scores, as shown in the table below. I should note I also went through the summary of the scores to see how I could manually improve the content.
    

|  | Performance | Accessibility | Best Practice | SEO |
| --- | --- | --- | --- | --- |
| **Original live site (desktop)** | 87 | 76 | 58 | 60 |
| **Original live site (mobile)** | 45 | 79 | 58 | 50 |
| **Dev site (desktop)** | 98 | 94 | 92 | 67 |
| **Dev site (mobile)** | 73 | 94 | 92 | 69 |

## Main Takeaways and Learning Points

The process took me just under 2 weeks from a clean install to a functioning, aesthetically more pleasing website of roughly 2 dozen pages. I didn't have to spend a significant amount of time researching and learning how to navigate and use the CMS as the UX was intuitive or I found exactly what I was looking for in short Youtube videos or articles.

### Maximise the use of template site builder tools to deploy pages faster

The legitimate site used images with text overlain to convey messages when more modern designs could have been used. For example, the site has a single still image of separate concert/gig posters. I used Elementor's image carousel component to add some variety to this section, especially as it was displayed on the homepage above the fold. I've tried coding a slider with plain JS in a proof-of-concept and found it tricky to maintain its intended appearance as soon as you take it out of its demo environment. The UI for this implementation was so easy with a lot of customisation features and saved me a lot of time. There are some drawbacks though: I couldn't find the UI option to set each image's specific dimensions which have an accessibility, performance and SEO negative impact when I ran Chrome's Lighthouse tool. The carousel currently has just 6 items, and when the animation reaches the last image, there is a lot of whitespace shown and a noticeable delay before the slider resets to the first image again.

### Flexible, maintainable and reusable data across pages

For this particular project, custom content types are not warranted at this time. But should the business goals or use case for the website change, then this may throw up issues. Drupal gives you a lot of flexibility when it comes to creating content types to suit your use case, I'm not sure WP is the same. WP excels for blog sites where the posts or pages rarely get updated and the template or layout is unlikely to change. Suffice it to say, I've created a lot of static pages with a page builder with potentially a lot of 'data' that could change which will be a laborious task to go through and make changes, likely introducing content editor errors.

Perhaps there is a plugin that could be used to create relationships between data or content fields, but in my opinion, this was not apparent in the admin dashboard. Drupal really lets you leverage fields and custom content types in conjunction with the Views module to reuse data and display it in different ways. This is great for the maintainability and organisation of the site.

### Development

I think where WP is preferable, is for projects of small to medium-sized organisations that produce a lot of static content and want to focus on SEO. The admin dashboard is easy to learn and it's so quick to get your site up and running. This is advantageous for the non-technical user and site builder where quick deployment and time to market are important. I managed to recreate 90% of the original website in under 2 weeks without touching the codebase. I really couldn't say the same for Drupal CMS. Although you can download pre-made themes for Drupal, I didn't find they gave as much choice and flexibility as free WP plugins provide. You have to learn about the theming and templating process to really customise your presentation layer which some may see as a positive learning journey, but others without the time or patience, would quickly become frustrated by this experience.

## Final remarks

I'm glad I took the time to learn about site building in WP coming from a background in Drupal, I think that's what allows you to make informed decisions on projects rather than using the same technology stack for all sites: use the right tools for the job, as the saying goes.

In my opinion, for small to medium static sites that you need to churn out quickly, deliver them with WordPress. Keep upfront costs low by hiring a content editor/ junior developer to build the sites and bite the bullet in terms of future content and plugin maintenance. For large, complex data-driven sites, use Drupal to plan out how the reusable data and theming/content creation will be managed across the site and bite the bullet in terms of upfront developer labour cost and time to deployment.