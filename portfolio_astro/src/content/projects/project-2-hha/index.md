---
title: "Hampton Hill Association"
description: "Wix to Wordpress"
date: "2025-04-20"
siteURL: "https://www.hamptonhillassociation.co.uk/"
---

![collage of community activities representing the HHA ](/hha_placeholder.webp)

Hampton Hill Association is a local community run by volunteers who seek to improve neighbourly relations for their town area. They get involved in tasks like local fundraisers and seasonal events, group litter picking, advise on local planning applications, lunches and coffee meet-ups etc. Member registration either through standing order or via the website card payment processing, is what provides the funds to pay for operational costs or overheads.

They had an existing site which was not mobile friendly, not particularly focussed on web accessibility or professionally designed. I volunteered to refresh and rebuild their site and I would learn about domain management and setting up payments on a small site.

## The situation prior to my involvement

The organisation had a functioning Wix site and with it, they wanted to:
- move off of Wix as they have a limited budget but keep the same website domain
- have a volunteer manage website communications, frontend design, admin management tasks etc.

## The task to accomplish

I wanted to find this group a cheaper hosting option. I chose Brixly UK mainly because of the price at the time of writing was roughly £5 (incl. VAT) per month. 

The other task was how to build the site. I had made up in my mind that WordPress was a suitable option: quick to get started for a small static site, I was confident I can find a free plugin solution for the payment processing I would need to replicate on this new site (credit card details of existing members can’t be transferred from the Wix site to the new site for privacy data concerns). 

Moreover, I didn’t have to redesign it from scratch as the client didn’t ask for it and so I researched a contributed theme with a focus on minimalism and accessibility.

## General Steps


### Static Content
Static Content: Export static content like text and images, page screenshots or even as .html into a backup folder just so you can reference as you sunset the old website and its management tool.

### Choose a New Hosting Provider
Brixly UK offers shared hosting resources allocated to one domain service- what I interpret this to mean is that you can have multiple domains under a primary domain, but you would presumably have to pay for each domain. Moreover, those add-on domains would all use the same allocated shared hosting resource. 

So this option is for small, basic sites where you don’t anticipate lots of web traffic - ideal for this client. An additional note, setup and configuration is entirely your responsibility. But, it helps that there tech support are very attentive. When setting up the hosting credentials, use an appropriate username similar to the existing site you are trying to replicate with the domain migration.

### Setup staging

How this is configured depends on your hosting and you may actually have to purchase another domain and probably a separate resource. Or perhaps there is an option in cPanel but I was not able to locate it. Remember to disable any SEO tasks or tools for the staging as you don’t want the test or staging site to appear in the search results. 

You could lock down the site with a HTTP authentication shield setting - basically extra login credentials to view the frontend - it stops viewers from accidentally landing on your testing site. Setup should be possible through the hosting management dashboard or try cPanel.

### Sitemap and redirects

Set up 301 redirects for all old URLs and make sure they match with the new site intended urls to maintain SEO rankings. If the old site has url pages you don’t want on the new site, they still appear in search engine results pages - so setup redirect links. Use WordPress Simple 301 redirect plugin for example.

### Build the Wordpress sige 

Use a CMS and choose a contributed theme to speed up delivery. Make the necessary style changes via the UI or limited code changes using a snippets plugin and page builder for example Elementor.

### Setup Membership Registration with PMPro free plugin and Stripe Payment Processing

PMPro allows you to unlock premium content on your site when a member has registered. For my use case, the plugin gave me the form functionality out-of-the-box and handles the management members’ user journey well. 

There are integrations with payment processing such as PayPal and Stripe, just be mindful of the transaction fees that they charge as they can eat into your membership income. In addition, you may need to setup automated email triggers and invoice receipts to your group members and volunteers, either from PMPro and WordPress or your payment processor, to inform them of a new member. 

Follow their official documentation to get setup, but PMPro also have useful video tutorials on Youtube as well.

### Domain Transfer

You’ll probably want to do this step at a time and date where you anticipate low traffic as your site will be down for some time. How long depends on your actions and the response of the hosting tech support team.

Because the domain I was handling was .co.uk, I followed Wix’s guidance here. In Wix admin, you’ll need to unlock the domain as well in account settings. You’ll need to update the DNS records to point to the new hosting provider’s name servers, just ask the new hosting for this or ask them to update. Then, in WordPress admin, update the domain site url and home url in settings.

You’ll also want to get the SSL cert- I did this through cPanel.

### Analytics & Tracking

 Reintegrate Google Analytics, Tag Manager, or other tracking tools if necessary. Have a look at the analytics for the old site and identify which pages are worth refreshing or keeping the same. If there are pages that don’t serve a business goal or support a sales funnel, you may choose to not have that page on the new site but you still need to setup 301 redirects for them. Setup cookie banner (try plugin: Moove GDPR Consent) and prepare the privacy policy text, terms and conditions etc.

### Sunset the old website builder account
make sure you have a backup of the content as mentioned in step 1, a record of existing members and payment schedules- Wix will continue to process payments even if you have ‘deactivated’ the website. So, either suspend or cancel active subscriptions assuming you will contact these members just before they are due to pay their annual fee for example, so that they can either re-register on your new site using the newly setup payment processing and registration, or arrange alternatives like standing order.

Make sure you keep track of any running fees on the old account and cancel them e.g. annual fees to use the website builder tools, third party integrations and plugins etc.

## What was the result?

I thought this process would take a few weeks working evenings and weekends. I underestimated the effort and time as i did more research on the entire process. The thing that took the most time was handling the domain migration and setup configuration of the hosting for the WordPress site mainly out of apprehension, as I hadn’t used a self-managed hosting before or performed domain migration I was cautious and preferred smaller steps to get to the end goal.

Speaking with the organisation management, they were satisfied with the aesthetics of the new site, the layout and copy content, the time taken to launch (about 2.5 months). Overall, it was a success and they were very happy with the result.

Unfortunately, because they had locked into a 2 year subscription with Wix and they were only half way through that contract, they won’t appreciate the financial savings in the short-term which I managed for them: dramatically reduced hosting costs, slightly cheaper domain renewal cost through this new provider.