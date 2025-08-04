---
title: "Eighteenth Week in the Office (27/06 - 01/07/22)"
description: "A blog post about Eighteenth Week in the Office (27/06 - 01/07/22)"
date: 2022-07-02
updatedDate: 2022-07-02
heroImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1656750280677/_fPChowXZ.jpg
tags: ["5f9435c7fbdce372c9a56fb6", "56744723958ef13879b95230", "5f3f1dcc5b3ac8481821c47c", "56744721958ef13879b948fa"]
---

## Work Stuff 💻
We've been a reduced team this week due to some 'restructuring' and staff holiday. The week's main focus for me has been to continue online learning, a few smaller tickets to add some neat features to the site, some content build to help one of our editor teams and related smaller jobs here and there. They were nice because it was familiar work without too much hand-holding. As we get closer to our company-wide September event, there will be more of this type of work and the actual Web development will be pushed to the back-burner.

## Mini-Side Project 🏗
I've been working on one of frontend mentors challenges which is a form requiring client side validation. I made the mistake of thinking since I did a more basic version of this type of problem a few weeks back, this one won't take long: I started it last weekend and I've only managed to finish a first draft of it yesterday (iterating on it during commutes and evenings). You can check it out [here](https://github.com/wkan17012021/intro-component-with-signup-form-master), constructive feedback especially regarding the JS code is welcome. 

The concept of user input validation has intrigued me from early-on in my learning journey: I wanted to know what the logical steps were like and now I'm aware of how some of the checking is done natively with HTML, I appreciate why it is also necessary to do backend validation and now I can add some custom frontend validation to the mix. Although it is not strictly on my learning goals for the year, I think it was still time well invested. 

## Continued Development 🏋🏼‍♀️
Elsewhere, I've been diving deeper into A11y finally. I felt I had listened to a lot of talks and videos and they all celebrated how important the subject is and tended to skirt around how to practically implement more inclusive Web design. I guess its because A11y is a broad contextual subject and being told by developers typically who do not live with the disabilities that we are trying to accommodate for on the Web, it often leads to a clumsy negotiation around when, what and how to implement A11y code principles.

Conversely to that, I have Rob Dodson, Google Developer Advocate to thank for my learning. I'm under half way through his video playlist which you can check out for free 
[here](https://www.youtube.com/watch?v=HtTyRajRuyY&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&ab_channel=GoogleChromeDevelopers)
 but so far what I've learned and could genuinely see myself implementing a practical solution with include:

### Focus 🧘🏾‍♀️
Users who can’t use a mouse and use instead a keyboard, navigate your site with the tab and shift + tab keys. Focus is about selecting an element and directing keyboard events to that element. 
The tab order is the sequence in which they select each focusable element in the markup. Implicitly focusable elements are like anchor and button tags, so tabbing will exclude generic content like divs and paragraphs. You may have to rearrange your markup so that the tab order is logical: top to bottom, left to right for example. Be careful when using css as layout and display changes can alter the tab order. 
Alternatively, add the attribute tabindex=”0” to tab onto this element. Or, use the JS focus() method to send the user to a particular element to focus on after an interaction. 
There is some example code in the video tutorial [here](https://www.youtube.com/watch?v=EFv9ubbZLKw&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=3) and [here](https://www.youtube.com/watch?v=Pe0Ce1WtnUM&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=4).


### Dealing with off-canvas menus
When the keyboard user tabs through a closed menu icon, they will still hear the menu’s inner headings being read out by their screen reader but the tab focus will be hidden from the main view. This creates a confusing experience. Use a JS polyfill to make the menu options ‘inert’ when the menu is closed, and make the tabbing active when the menu has been selected. Check out a solution [here](https://www.youtube.com/watch?v=fGLp_gfMMGU&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=2).

### Use native HTML tags
For example, the button tag has built-in focus for tabbing. Using a screen reader, the button tag role will be read aloud. If you use a div instead, you will need a tabindex to focus on the div but the div will be read aloud as ‘group’ because divs are un-semantic grouping containers. 

Even if you tab and select on to the div button, click events (using keyboard space key) will not fire off the event. Using button tag has an assumption that you also want click events associated with this element. More info can be found [here](https://www.youtube.com/watch?v=CZGqnp06DnI&list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g&index=5).

### Alerts
Alerts are similar to popups in that they are state based notifications. We need to afford the user the ability to interact with the alert rather than turn off display after say a timeout. An example may be a bad weather warning alert on a travel website.

We assign a role attribute with the value set to alert which will read out the textContent of that tag. So, it is often used in conjunction with event listeners e.g. when a button is clicked, or a user selects from a list, then reveals that option via template tags for reading aloud if the receiving tag that gets its value or textContent from the template tag has a role of alert.


***Let the A11y train continue! ***


