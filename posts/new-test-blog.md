---
title: New Test Blog
date: 2020-12-02T14:20:03.643Z
published: true
tags:
  - Test
  - Netlify
  - Markdown
cover_image: /uploads/puppy3.jpg
series: false
timeToRead: 1 minutes
canonical_url: true
description: Adding Tags to a Gridsome Project with NetlifyCMS
content: >-
  For a list of items Gridsome
  uses **[templates](https://gridsome.org/docs/templates)**. The tags page is a
  collection of posts based around a tag id therefore we'll need to use a
  template to query, filter and display them all.


  Let's go over the various parts of the `Tag.vue` template file.


  ## [](https://www.drewtown.dev/post/adding-tags-to-a-gridsome-project-with-netlifycms/#page-query)Page Query


  The page query is a little different than your standard query. Using the id passed in by the route and made available from Gridsome we can query for the tag. Using the `belongsTo` relationship allows us to get all of the posts that have the specified tag attached.
---
