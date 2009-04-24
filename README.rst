==================
Blender
==================

Blender is designed to provide a pure HTML template for rapid iteration projects. The intention is to provide some basic functionality that can be quickly utilized for Django. Blender uses Flatpages to provide some functionality. Mostly, Blender uses Django for the template inheritance and template tags. This meant being able to avoid having to re-tweak the same html over different files.

To experiment with content, login to /admin with username admin and password admin.

Features
========

* HTML 4 Strict
* Natural, related font sizing
* PSD's for settings standards and demoing
* All design is CSS, JS and HTML. No graphics
* Uses 960.gs for grid layout and CSS name conventions
* Uses google.load and the jQuery 1.3* for Javascript

Layouts
=======

Layouts with a "+" are created an in Git.

* Homepage View +
* Article View +
* Blog Post View +
* Blog Post With Comments View
* Tag Cloud
* Individual Tag Index
* Signup Form View
* Index View w/ Gravatar
* Index View Standard
* Item Detail View
* Image Catalog View
* tweet list view
* Tweet View
* Message View
* Message List View
* Profile View

Browser Compatibility
=====================

These layouts are designed to work in all browsers. However, IE is going to render these layouts differently due to it's lack of support for some features. 


Usage
=====

You would never use this setup as is in production. At the very least, you will want to concatenate all of the css and js so that you have a condensed and speedy format.

Vaporware
=========

I've got big dreams people! But a teeny tiny time window. Here are some of the features I'll be adding eventually:

* JavaScript layout picker. This will be a tool that opens an admin panel and allows you to manipulate a layout and render HTML. Then you can copy and paste your layout.
* Mobile Device Tester. Set your useragent as an overlay and redo your action and content screens for compatibility.
* Django template tag insertion. Use Blender as a way to develop towards Django template tags quickly and easy.
