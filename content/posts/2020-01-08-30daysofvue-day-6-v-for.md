---
template: SinglePost
title: '#30daysofVue - Day 6 - v-for '
status: Published
date: 2020-01-08T15:35:28.204Z
excerpt: >-
  Today, I learned about v-for. It's a Vuejs directive used to render a list of
  items to the DOM. List rendering is one of the most commonly used practices in
  front-end web development. Dynamic list rendering allows us to present a
  series of similarly grouped information in a concise and friendly format to
  the user.
categories:
  - category: Javascript
meta:
  description: >-
    Today, I learned about v-for. It's a Vuejs directive used to render a list
    of items to the DOM. List rendering is one of the most commonly used
    practices in front-end web development. Dynamic list rendering allows us to
    present a series of similarly grouped information in a concise and friendly
    format to the user.
  title: '#30daysofVue - Day 6 - v-for '
---
Today, I learned about v-for. It's a Vuejs directive used to render a list of items to the DOM. 

List rendering is one of the most commonly used practices in front-end web development. Dynamic list rendering allows us to present a series of similarly grouped information in a concise and friendly format to the user.

We can use v-for to render a list of items based on a template that loads dynamic data based on a data source.

It's a common practice to provide a key attribute to the elements rendered through v-for because Vue uses the key attribute to create unique bindings to define each node's identity.

Providing a key helps Vue to uniquely identify each rendered element and render or re-render them according to the data changes for the specific elements.
