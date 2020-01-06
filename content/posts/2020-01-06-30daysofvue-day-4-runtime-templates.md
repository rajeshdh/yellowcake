---
template: SinglePost
title: '#30daysofVue - Day 4 -Runtime Templates'
status: Published
date: 2020-01-06T15:54:06.856Z
excerpt: >-
  Today I learned about the v-html directive and then find out about
  v-runtime-template.v-html allows us to insert HTML code directly into our Vue
  templates.It allows us to update the innerHTML of a node.I had a different
  requirement that I had HTML coming from the api, and now it needs to be
  dynamic based on the data from another api.I needed to add another template
  inside a template and pass the data.
categories:
  - category: Javascript
meta:
  description: >-
    Today I learned about the v-html directive and then find out about
    v-runtime-template.v-html allows us to insert HTML code directly into our
    Vue templates.It allows us to update the innerHTML of a node.I had a
    different requirement that I had HTML coming from the api, and now it needs
    to be dynamic based on the data from another api.I needed to add another
    template inside a template and pass the data.
  title: '#30daysofVue - Day 4 -Runtime Templates'
---
Today I learned about the **v-html** directive and then find out about **v-runtime-template**.

**v-html** allows us to insert HTML code directly into our Vue templates.

It allows us to update the innerHTML of a node.

I had a different requirement that I had HTML coming from the api, and now it needs to be dynamic based on the data from another api.

I needed to add another template inside a template and pass the data.

**v-runtime-template** solves this problem and allows me to pass a template at runtime that has access to the parent's data.  Now I can call the api in the parent component and pass that data to the child template. And the child template can render new HTML based on the data given to it. 

I had another problem that you cannot add CSS in a template, Vue Engine does not render that. So I extracted the CSS from the style tag and inserted that into in the document head. And that indeed cleaned the template for CSS.
