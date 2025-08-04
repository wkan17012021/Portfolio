---
title: "Week 22 in the Office (25 - 29/07/22)"
description: "A blog post about Week 22 in the Office (25 - 29/07/22)"
date: 2022-07-30
updatedDate: 2022-07-30
heroImage: https://cdn.hashnode.com/res/hashnode/image/unsplash/1527pjeb6jg/upload/v1659347890445/DJF5kbdFv.jpeg
tags: ["5f9435c7fbdce372c9a56fb6", "56744723958ef13879b9549b"]
---

## Work Stuff
Following on from last week's work activities, it has been more of the same on tweaking small changes on our online event platform in preparation for the annual conference in September. Surprisingly, there is a lot of manual processing that needs to be done such as toggling on or off settings and content proofreading which I'd hope the software engineers for the online platform could improve on for backend UI users. 

I helped out on the website to implement a Drupal Views block which pulls in video card entity pages into a carousel for a feature page. Luckily, the Views setup was configured by developers before me so it was just a case of selecting the correct content and blocks to use. The slow part was adding content such as video thumbnails and alt text for required fields. There was some back and forth as the content team requirements were not entirely fleshed out (that's partly on me to explicitly ask what the end product should be). I assume in business, the final product idea is somewhat vague and content teams need to see the first iteration in order to assess whether they are happy with it or prefer changes. It makes me think that it is nearly impossible to capture all requirements so some back and forth will be inevitable.

## Testing with Nightwatch
I had an interesting session on behavioural testing using [Nightwatch.js](https://nightwatchjs.org/api/) this week and was able to build on what was shown by the instructor, on our live site. This was great progress for my quarterly goal which is to improve on knowledge of software testing and I find UI testing relatable and straightforward in principle.

Nightwatch is a JavaScript-based, end-to-end (e2e) testing framework which typically can be used to mimic a user interacting with a website or webpages. This serves our team well as a recent use case was after a Drupal core security update, we are expected to manually check a few pages by interacting with the UI just to see if the functionality still performs as expected. Naturally, there are some drawbacks to this method: 

1. Time-consuming and monotonous task if done manually

2. How do you determine every time there is an update, which pages to test? 

3. Which elements on those pages do you want to interact with specifically?

4. Is verbal ("yeh, this element on this page looks fine!") confirmation or reporting of the manual test sufficient for your needs?

This is getting into the realm of automated testing and Nightwatch is ideally suited to solve this recurring task. If the tests are set up properly and in a robust manner, they should be able to be integrated into your workflow (CI pipeline) and triggered after an event. This saves having to distribute the manual task out to developers. 

We need to take a holistic approach to testing. For the example of security updates, you could argue that simply checking the docs for what exactly the update entails (changes to a module, API etc.) will inform you on what exactly you need to check functionality post-install of update. This could save you valuable time and not spend preparing tests unnecessarily.

If the changes to the codebase do indeed affect the appearance of elements on the front-end, then you could include a batch of pages to test functionality. If a few tests fail, this could be masking a more deep-seated problem.

In terms of elements to check, this could be but is not limited to: whether a user can access and fill in form data, click and open on modals and accordions, images and video displays.

Nightwatch also catalogues the report of testing in an HTML file for easy reference and discussion. This presents better than perhaps just a verbal confirmation. 

There's a lot to learn and gain from using Nightwatch and automated testing for that matter and I've only scratched the surface!

### Some useful commands, code and links to get you started
- You can start up a dummy test proj to get up and running. Make a new directory, say on your desktop and change into that directory.
- Ensure you have node and [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed which you can download from their website.
- Some commands to install and run Nightwatch from your terminal (on MAC in VS Code: control + ~):

```
npm init -y // creates package.json with all settings assigned to yes
npm --version // check you have npm installed!
npm install nightwatch --save-dev // install nightwatch dependency and saves it as a development package. Normally, this is the case for say testing from local or development codebase and not in the production site.
npx nightwatch // runs the executable binary file nightwatch. This is a good way of checking initially that nightwatch is installed- obviously, we have no tests yet so it will throw an error in your terminal.
npm install chromedriver --save-dev // in order to preview the tests, we need to use the webdriver and chrome browser to facilitate the process. You can use other browsers but for this example, Chrome was used. 
```

We need to do some setup with the nightwatch.conf.js file. Namely, tell Nightwatch where our test scripts should be accessed from and the name of the browserName value. So in nightwatch.conf.js:
- Pass in the folder name of the test scripts. In our case, we called the folder 'tests'.
- Pass in the browser name under the desiredCapabilities object. In our case, it was 'chrome'.

```
module.exports = {
src_folders: ['tests'],
...
desiredCapabilities: {
        browserName : 'chrome'
      },
...
}
```
Create in your code editor, a folder containing your tests and of course it should match the src_folders value. 

We are nearly there. Back in terminal:

```
npx nightwatch // another test of functionality. This command will run all test scripts in order from a folder you specify. If you want to run one script, use the command below.
npx nightwatch run enterYourTestFileNameHere.js
```

In terms of actual test code, that will have to wait for another post. In the meantime, it's worth reading the documentation, and checking out some other developer's use cases which relate to your needs:
https://blog.loadero.com/2020/12/18/a-beginners-guide-to-test-automation-with-javascriptnightwatch-js-part-1/

Check out Testing Automation University by Applitools where you can access free video content on a range of testing frameworks and applications including Nightwatch: https://testautomationu.applitools.com/learningpaths.html
