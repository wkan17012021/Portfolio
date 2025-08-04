---
title: "Storybook Component Prototype Library"
description: "Creating UI features following atomic design"
date: "2024-06-15"
repoURL: "https://wkan17012021.github.io/storybook-twig-component-library/"
---

![Picture of lego bricks](https://images.unsplash.com/photo-1646995477167-a344548ce6b9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

A standalone storybook html component library using twig templating, originally meant for a drupal project.

You can host your static storybook library using GitHub Pages and their Actions deployment solution for free. Here’s how I did it:

## Project setup and caveats

This is a standalone storybook html component library using twig templating, so could be used for a drupal project but to make setup easier, I am only discussing the storybook side of things and getting the project live on your GitHub account. Thus, the project folder only contains the storybook components following atomic design pattern and any config files necessary.

At the time of writing, it was possible to configure and setup with minimal difficulty but GitHub’s UI and offers around deployment may change in the future.

### Create your project

In a new folder on your local machine:

`git init`

`npm init -y` (alternatively copy and paste the package.json from the example repo and run npm i)

`npx storybook@latest init`

In package.json, I had to add "type": "module". This is because some packages resolved to an ESM file. ESM file cannot be loaded by `require` keyword. More info here: [https://vite.dev/guide/troubleshooting.html#this-package-is-esm-only](https://vite.dev/guide/troubleshooting.html#this-package-is-esm-only)

I also used `npm i --save-dev vite-plugin-twig-drupal`. Here’s why: [https://www.previousnext.com.au/blog/drupal-front-end-nirvana-vite-twig-and-storybook](https://www.previousnext.com.au/blog/drupal-front-end-nirvana-vite-twig-and-storybook)

Update the vite.config.js (create the file if not automatically created) accordingly from the github repo: [https://github.com/wkan17012021/storybook-twig-component-library](https://github.com/wkan17012021/storybook-twig-component-library).

You may also need the tailwind.config.js, but that’s because i aim to implement tailwind css eventually for the styling solution.

Rearrange folder structure: rename stories folder to components (this is personal preference). Again, you can check out the folder structure from the github repo: [https://github.com/wkan17012021/storybook-twig-component-library](https://github.com/wkan17012021/storybook-twig-component-library)

Let’s test with a basic ‘atom’ and see if it finally renders at the end of this process. I created a heading story folder in 01-atoms for testing purposes. This also calls a link atom (so a user can click the heading which could redirect them to a related piece of content) so I created this as well, which may require you to copy the 00-base and utils folder contents. As an alternative to start from basics, just create an atom for a simple &lt;p&gt; tag to test. Likely, as your storybook library grows in complexity and you want to improve on reusability, then even atoms will call util functions from a base folder for example.

## Start the server

Let’s see if the storybook server runs. In your terminal:

`npm run build-storybook && npm sb:start`

or whatever you have aliased these scripts in package.json to. For example, you could shorten `npm run build-storybook` to `npm run:build`

The server should open on localhost default port 6006, but your ‘stories’ still won’t load yet. Go to .storybook folder: main.js file and preview.js edits. Copy and paste the contents from the GitHub scripts: [https://github.com/wkan17012021/storybook-twig-component-library](https://github.com/wkan17012021/storybook-twig-component-library/tree/main/.storybook)

Do the same for package.json as there are additional packages that the twig and stories.js files rely upon: [https://github.com/wkan17012021/storybook-twig-component-library/blob/main/package.json](https://github.com/wkan17012021/storybook-twig-component-library/blob/main/package.json). At the time of writing:

```json
"devDependencies": {
    "@chromatic-com/storybook": "^3.2.2",
    "@storybook/addon-a11y": "^8.2.0",
    "@storybook/addon-docs": "^8.2.4",
    "@storybook/addon-essentials": "^8.4.5",
    "@storybook/addon-interactions": "^8.4.5",
    "@storybook/addon-links": "^8.2.0",
    "@storybook/blocks": "^8.4.5",
    "@storybook/cli": "^8.4.5",
    "@storybook/html": "^8.4.5",
    "@storybook/html-vite": "^8.4.5",
    "@storybook/test": "^8.4.5",
    "drupal-attribute": "^1.0.2",
    "drupal-twig-extensions": "^1.0.0-beta.5",
    "storybook": "^8.4.5",
    "vite-plugin-twig-drupal": "^1.4.2"
  }
```

Restart the server to see if the unstyled heading and link atom load (or whatever component you have created).

## Creating the repo

I then created and updated the .gitignore file. Delete any unnecessary boilerplate files or media assets. Checkout the repo .gitignore for reference: [https://github.com/wkan17012021/storybook-twig-component-library/blob/main/.gitignore](https://github.com/wkan17012021/storybook-twig-component-library/blob/main/.gitignore)

I put the assets folder to the root level, but this is personal preference. When you’re done, add the git repo to your github account and push changes to main or ‘master’ branch.

## Using GitHub Pages and GitHub Actions

On your GitHub account repo, the url will look something like this:  
https://github.com/**yourgithubusername**/**nameofyourrepo**/settings/pages

On the left hand pane, click Pages, then under Build and deployment heading, select GitHub Actions as the Source select option.

For me, I used the following resources to help setup the deployment:

* [https://github.com/bitovi/github-actions-storybook-to-github-pages](https://github.com/bitovi/github-actions-storybook-to-github-pages)
    
* [https://storybook.js.org/docs/sharing/publish-storybook](https://storybook.js.org/docs/sharing/publish-storybook)
    
* [https://www.youtube.com/watch?v=15RCr\_P4Btw&pp=ygUXc3Rvcnlib29rIGdpdGh1YiBwYWdlcyA%3D](https://www.youtube.com/watch?v=15RCr_P4Btw&pp=ygUXc3Rvcnlib29rIGdpdGh1YiBwYWdlcyA%3D)
    

Namely, you’ll need to setup a .github folder at the root, then in this folder another folder called workflows. Within the workflows folder, create a deploy.yml file and inside add this code being careful of the indentation:

```yaml
# Workflow for deploying static content to GitHub Pages based on this thread: https://github.com/storybookjs/storybook/discussions/20932#discussioncomment-6755923
name: Deploy Storybook to GitHub Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build-storybook
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: "./storybook-static"
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

Ultimately it was the yml code from this thread that worked for me: [https://github.com/storybookjs/storybook/discussions/20932#discussioncomment-6755923](https://github.com/storybookjs/storybook/discussions/20932#discussioncomment-6755923)

With some changes:

* My repo runs from a single main branch, so where “master” is mentioned, update this to whichever branch you want the deployment to be triggered.
    

* Some older versions of storybook, when you run the build command, will output the static files in a dist/ folder. If this is the case, then presumably you would update the path: in the yml file above to “./dist“. But because the version of storybook i am using (currently v.8.4.5) outputs to a storybook-static folder, this was fine to leave as is.
    

You can check out and debug your workflows under the repo Actions tab. Hopefully, when you push changes this will trigger the GitHub action.

In GitHub, go back to the Pages link before under Settings tab, copy the URL provided for your site at the top of that page. Click on the Code tab, go to the cogwheel settings on the right side, paste the link in the Website field. Your site will be served from this URL.

