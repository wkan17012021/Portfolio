# My Developer Portfolio 🖼️

> This is ten percent luck

> Twenty percent skill

> Fifteen percent concentrated power of will

> Five percent pleasure

> Fifty percent pain

> And a hundred percent reason to remember the name

'Fort Minor - 2005 - The Rising Tied'

These lyrics describe how I feel about learning development post-pandemic.
Here's my GitHub Repo of iterations on my personal portfolio. 

## Changelog

### V.01

- Dec 2021 -> Jan 2023: HTML, CSS static single page site with bio summary, list of tech and professional skills, learning list, section of portfolio projects, useful resources that helped my learning journey and contact information. Bootstrap 5 used to provide the skeleton structure of the page, assist with responsive design and mobile friendly navigation.

### V.02

- Jan -> Apr 2023: Designing, planning a React.js version developed with ViteJS build tool.

#### Navigating and implementing Material UI framework

- MUI Docs
- NetNinja has a YouTube playlist on MUI

#### Hero Section

- Blob SVG inspiration from Scrimba community. Make your own blob SVGs here: https://www.blobmaker.app/
- Moving transitional background gradient from: https://ishadeed.com/article/inside-frontend-developer-mind-hero-section/
- Background gradients

#### Cartoon illustrations and obscure nav icons

- Illustrations from Storyset. After choosing your animation, paste the svg code into this JSX converter and import as a React function component: https://svg2jsx.com/
- Icons are a mix from the the fantasy video game: elderscrolls.fandom.com and icons8.com

#### Forms Section

- https://www.youtube.com/watch?v=myqzqyuic3I
- Netlify Docs on Forms Plugin

#### How to do API requests in React (Fetching Blog Posts)

- https://sandeep.dev/how-to-show-blog-posts-from-your-hashnode-blog-on-your-personal-site
- https://api.hashnode.com/#
- https://www.youtube.com/watch?v=qdCHEUaFhBk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=17
- https://catalins.tech/hashnode-api-how-to-display-your-blog-articles-on-your-portfolio-page/

#### Alteration to the MUI image list (display cover images for blogs in grid layout)

- https://codesandbox.io/s/69383051-is-there-a-way-to-dynamically-adjust-imagelist-columns-for-screen-size-p389w?file=/demo.js

### V.03
- June -> Aug 2023: Refreshing the portfolio using new styling, layouts and animations learned along the way. I've also gone through an iterative process of moving hard coded details from the app components into their own js files and importing them instead. 

#### Navigating and implementing Material UI framework
- Override styling mainly with sx prop. Some styles couldn't be overwritten so I wrote them in the css stylesheets instead. A lot of the time of imporving the portfolio is consumed with navigating the MUI framework and the styling is quite cluttered - CSS in JS, global and override stylesheets etc. Would have been simpler just to use Sass or native CSS to be honest. But then I would miss the opportunity to learn MUI!

#### Hero and Footer Section
Added an image of a background gradient (source was from HTML5UP templates - Helios, or SolidState I think). This took some time to figure out imports and filepaths as the local vite serve was working but when I deployed to Netlify, the files could not be located. I should have checked the vite build server which would have ssaved time as it compiles and bundles the project for distribution or build. In the end, I just added the file paths in the css sheets.

#### General changes
- Removed some copy and media as it was irrelevant or inappropriate / wanted to rethink design branding.
- Reworked layouts and structure as they were a bit janky or not responsive.
- Replaced some components as they were not applicable or could be combined with others e.g. social grid component - largely removed but transferred social media icons to the footer; or the boring list of professional skills which has been transformed into marquee components!

### V.04
- Oct -> Dec 2023: minor tweaks. Swap out the react marquee as I found out only after getting it to work that, it is a deprecated feature.
### Challenges

#### Learning how to use MUI v.5

Certainly more advanced than BS5 as there are quite a few layers abstracted away that renders the UI components and how they are styled. I used the docs in combination with video tutorials, code sandboxes and blog posts to understand how to customise the styling and the MUI specific named tags.

#### Configuring the build process (minification, chunking)

Never had to manage this myself as previous projects were so small the performance change was negligible or, a CMS plugin abstracted this away without me knowing about it.

- Looked into the docs to find out how to turn on minification and learned from YT what it is and why it is necessary for production apps.
- Vite's build CLI messages showed large dependency file sizes (> 500kB). I attempted to reduce file size after turning on minification by: using path imports instead of top-level imports (MUI's bundle size docs); code-splitting in React (React docs and YT) although this is best employed with routing or lazy loading custom JS.
