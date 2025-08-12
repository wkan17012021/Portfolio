---
title: "Install and trial Leaflet JS module for a Drupal 10 local dev project"
description: "A blog post about Install and trial Leaflet JS module for a Drupal 10 local dev project"
date: 2023-03-17
updateddate: 2023-03-17
brief: "This is a short article intended to help walk through the process of installing and using the Leaflet Contrib Module (and associated sub-modules) for an interactive map feature on a Drupal development site.
Why Use Leaflet Module?

The module has a l..."
subtitle: ""
heroimage: "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/Z8UgB80_46w/upload/6f073684e22ad0b615d490d0aaf6fd0e.jpeg"
heroalt: "Install and trial Leaflet JS module for a Drupal 10 local dev project"
tags: []
---

This is a short article intended to help walk through the process of installing and using the Leaflet Contrib Module (and associated sub-modules) for an interactive map feature on a Drupal development site.

## Why Use Leaflet Module?

* The module has a lot of common features that satisfy a mapping or spatial presentation use case. The work put into the module is extensive and continually maintained, and as a result, the documentation is comprehensive.
    
* There are several sub-modules which add more variety to the map that you are trying to create e.g. different markers/pins, an intuitive and descriptive UI which allows for stylisation, and numerous thematic mapping layers.
    
* Why recreate a potentially complex mapping module yourself when a very good one exists already? =)
    

## Useful resources

* Looks like I'm not the only one to write about this topic. You may find all the support you need through this guide: [https://internetdevels.com/blog/leaflet-module-to-create-interactive-maps-in-drupal-guide](https://internetdevels.com/blog/leaflet-module-to-create-interactive-maps-in-drupal-guide)
    
* Drupal docs: the [main module](https://www.drupal.org/project/leaflet) to install via composer. In the project docs, there is a list of further integrations of which 'more maps' was installed and used for this article.
    
* Leaflet JS documentation: [https://leafletjs.com/](https://leafletjs.com/reference.html#tilelayer)
    

## My Use Case

I am creating a test travel site so I would like a mapping feature that displays the possible destinations on a world map. Users can click on an icon- reveal a popup which displays more info about the trip e.g. a catchy title which introduces the tour or trip, perhaps a contextual image and then a link to redirect to the destination content node for all the relevant information concerning that trip. The destination content type will have the geospatial data required to present its location on the map.

## The Process I followed

1. Install Leaflet and 'more maps' via composer in the root of your project / where your composer.json file is found: `composer require 'drupal/leaflet:^10.0'` (the version was specific to my project so you may want to use a different version for your use case) and `composer require 'drupal/leaflet_more_maps:^2.1'`
    
2. This should install the configuration required to produce a map, and allow you to integrate your content field data of type 'geofield' with the map using a block or page via Drupal Views Core module.
    
3. Create a content type with at least one field of type 'geofield'. I chose this to be of the format 'Default WKT' which accepts [Latitude and Longitude](https://www.latlong.net/) coordinates. If you want to grab the lat / long coords for a place, you could find the place on Google Maps and look at the URL for a series of digits which represent these coordinates.
    
    ![Adding a field of type GeoField in Drupal Content Type Build Admin UI](https://cdn.hashnode.com/res/hashnode/image/upload/v1679073512053/b4447e4c-6134-4ed5-8221-cc5943c83cca.png align="center")
    
    ![Screenshot of Drupal Content Type Field Form filling](https://cdn.hashnode.com/res/hashnode/image/upload/v1679073403533/cb964dd5-3479-4a8d-95d4-3eb9ebd4b213.png align="left")
    
4. Then, I created a View called Destination Map and added a Display Block (I want to be able to add the map as a block to any page).
    
    ![Screenshot of Drupal Views Configuration setup through the admin UI](https://cdn.hashnode.com/res/hashnode/image/upload/v1679073672322/dedb8c8a-0e73-4851-b466-7504216e2fa3.png align="center")
    
    I pulled in the Destination Coordinates field for the geospatial data. In addition, I want to display the 'Destination Feature' which is a collection of taxonomy terms related to a specific destination e.g. Antartica -&gt; glaciers, boat trips. Canary Islands -&gt; boat trips, islands, hiking etc. I wanted this field to be presented on the map as tooltips, to provide more information to the reader about what each destination activity may entail. Finally, the field 'Tagline Title' was included and described in the screenshot in Step 3.
    
5. Under the Format heading and Settings of the View configuration, this is where we can make our map customisation. I set the 'Data Source' to be the field holding the location data, I used the 'Simple Tooltip' functionality to render the taxonomy terms mentioned previously. In the Leaflet Popup section, I chose my 'Tagline Title' field to display in the popup text upon marker click. It would be nice if the popup would show this title and a thumbnail image as well. Perhaps this requires the site builder to alter the display view mode.
    
6. There are several more options for customisation which I encourage you to explore. Namely, the 'Leaflet Map Tiles Layer' which you should see in the drop-down, is a nearly exhaustive list courtesy of the 'More Maps' sub-module. You can adjust the map view size, GUI controls, zoom levels and steps, and icons. For example, I saved an SVG icon in my codebase and switched out Leaflet's default marker by providing the file path under the 'Map Icon' heading, Icon URL:
    
    ![Screenshot showing the View Settings for Leaflet Map Icon Configuration](https://cdn.hashnode.com/res/hashnode/image/upload/v1679074655271/b5b9422a-d658-4699-81b0-f0b4438629a8.png align="center")
    
    1. You should see a preview on the View Configuration page. But eventually, the map would be displayed on a node page or as a view block.  
        Here's a preview of the map: when the user hovers, the destination features are revealed as a tooltip.
        
        ![Screenshot of a map layer produced using Leaflet Drupal Module showing three custom map icons with one icon hovered over revealing tooltip details](https://cdn.hashnode.com/res/hashnode/image/upload/v1679074814876/489e82e0-1219-4a92-b929-a3482fce2874.png align="center")
        
        Here's a screenshot of the same preview map when the user clicks on an icon, the tagline title field is revealed. Clicking on the text redirects the user to the corresponding destination page.
        
        ![Screenshot of a map layer produced using Leaflet Drupal Module showing a map marker with redirect link inside a popup](https://cdn.hashnode.com/res/hashnode/image/upload/v1679075014660/1a3037ab-c5de-4c77-9569-f016e1fc0d6a.png align="center")
        
    
    Hope this helps!