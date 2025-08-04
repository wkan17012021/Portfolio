---
title: "Setup Xdebug with Drupal-9 using DDEV and Docker Desktop, as well as db import"
description: "A blog post about Setup Xdebug with Drupal-9 using DDEV and Docker Desktop, as well as db import"
date: 2023-06-05
updatedDate: 2023-06-05
heroImage: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/zwsHjakE_iI/upload/ce7817c35524c1ffa4c463659a5efca5.jpeg
tags: ["57444da29ade925885158cb0", "6427199e26a7a583f0bcee73", "5821389002c96efc8a91faa3", "5f9435c7fbdce372c9a56fb6", "56744723958ef13879b95372"]
---

**Note for future self, a process for getting Xdebug on a Drupal-9 fresh install.**

## Pre-requisites / assumptions

* Using MacOS
    
* Docker Desktop is already installed and setup: if not head here -&gt; [https://ddev.readthedocs.io/en/latest/users/install/docker-installation/](https://ddev.readthedocs.io/en/latest/users/install/docker-installation/)
    
* PHPStorm installed and configured
    
* Some familiarity with DDEV commands and concept of docker containers
    

## General Steps

1. Make a new directory and project name for the folder. Install DDEV following the commands here -&gt; [https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#macos](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#macos)
    
2. Install the Drupal project using CMS QuickStart Guide -&gt; [https://ddev.readthedocs.io/en/latest/users/quickstart/](https://ddev.readthedocs.io/en/latest/users/quickstart/)  
    Ignore making the new directory and changing into the folder if you have done this already.
    
3. Check you don't have conflicting ports for this project and other projects that use docker. Check this resource -&gt; [https://ddev.readthedocs.io/en/stable/users/usage/troubleshooting/#web-server-ports-already-occupied](https://ddev.readthedocs.io/en/stable/users/usage/troubleshooting/#web-server-ports-already-occupied) and pick new port numbers -&gt; [https://stackoverflow.com/questions/32478277/is-there-any-standard-alternative-https-port](https://stackoverflow.com/questions/32478277/is-there-any-standard-alternative-https-port)  
    There is a reference to a .ddev/config.yaml file. If the install so far was successful, your project structure should like something like this:
    
    ![Screenshot of IDE: a demo project folder structure](https://cdn.hashnode.com/res/hashnode/image/upload/v1686001827744/abcdf62e-a14b-4cd5-870a-c655233d2524.png align="center")
    
4. In the config.yaml file is where we can change the ports as well as turn on xdebug:
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686001969790/019e8856-5d2d-49e9-bc23-e1f01f0cff55.png align="center")
    
    Remember to run `ddev restart` to enable the changes in the container. The alternatives are turning off your other projects that use those ports or removing them entirely.
    
5. To import a copy of a DB to our DDEV project, try a file with .tar.gz extension but .sql should also work. Run this command in the terminal of your project folder: `ddev import-db --src=path/to/file.sql` where 'path/to/file.sql' should be replaced with your file e.g. import-db --src=web/db-backup.tar.gz  
    DDEV syncs all your files from a directory into a virtual machine, it can only access the files from that directory.
    
6. To see if Xdebug is active, head to PHPStorm, go to its settings (top-left Mac menu) or `command + ,`  
    Then, select PHP -&gt; Debug: Check the box 'Break at first line in PHP Scripts'. This will cause the debugger to halt processing on any page that uses index.php which is essentially everything. You may also have to click a telephone icon at the top which 'listens for PHP debug connections'.
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686003056707/368d283d-317a-43a1-a22a-239e00a5bfbd.png align="center")
    
7. Refresh the browser and return to IDE and you should see a task pane at the bottom with a tab called Debugger. This is Xdebug in action.
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686003370414/fe4c7091-cbb5-4061-a11d-c923497491cd.png align="center")
    
    What you would then do is locate your bug by following the appropriate core or contrib module folder relevant to the issue, and place breakpoints on the left side to pause the running of the program so that you can examine variables in state, functions etc. What files to check and where? That's where experience comes into play 🤯
    
    ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1686003495976/bef2c2ac-b667-459e-b467-e8b80e235ca1.png align="center")
    
    Some documentation on using Xdebug: [https://ddev.readthedocs.io/en/latest/users/debugging-profiling/step-debugging/#ide-setup](https://ddev.readthedocs.io/en/latest/users/debugging-profiling/step-debugging/#ide-setup)