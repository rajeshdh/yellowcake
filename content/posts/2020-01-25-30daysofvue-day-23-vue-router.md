---
template: SinglePost
title: '#30daysofVue - Day 23 - Vue Router'
status: Published
date: 2020-01-23T14:59:02.614Z
excerpt: >-
  Vue being a progressive framework, provides us with many utilities to
  progressively enhance our application. As the application grows, we need to
  create multiple pages, and we need a routing mechanism to handle the
  application routing. To solve this problem, Vue provides us with the Vue
  Router.We need to install it in our application.
categories:
  - category: Javascript
meta:
  description: >-
    Vue being a progressive framework, provides us with many utilities to
    progressively enhance our application. As the application grows, we need to
    create multiple pages, and we need a routing mechanism to handle the
    application routing. To solve this problem, Vue provides us with the Vue
    Router. We need to install it in our application.
  title: '#30daysofVue - Day 23 - Vue Router'
---
Vue being a progressive framework, provides us with many utilities to progressively enhance our application. As the application grows, we need to create multiple pages, and we need a routing mechanism to handle the application routing. To solve this problem, Vue provides us with the Vue Router.

We need to install it in our application.

`npm install vue-router --save`

For module based Webpack applications, we’ll need to call `Vue.use(VueRouter)` before we’re able to use the Vue Router library. We can write the following code and the rest of the router instantiation in a `src/router.js` file. 

` import Vue from ‘vue’;`

` import VueRouter from ‘vue-router’;`

`Vue.use(VueRouter);`

For a **single page application,** we can think of it as a tree structure where root component holds multiple children and each child acts as a page. 

**Routing** in a single page app from this perspective is the idea that we can take a part of a subtree and switch it out with another subtree. We can then dynamically switch out the different trees in the browser. 

For a more straightforward explanation, we’ll need to use a Vue component that acts as a root component of the routable elements. We can then tell Vue to change a view, which can swap out an entire Vue component for another one as though it’s an entirely different page rendered by a server. 

We also need to tell our router which views should be shown in which routes. We can do that by creating an array that matches our component with the URL path. 

We can also use **\*** as a fallback mechanism if a user enters a path that is not defined or mapped to a component.

Vue Router’s default mode is hash. Hash mode URLs always contain a hash symbol (#) after the hostname (i.e domain name). The hash mode basically means our application routes will be displayed like this - http://localhost:8080/#/charizard 

To remove hashes in our URLs, we’ll specify the history mode property in our router instantiation: 

 **export const router = new VueRouter({**

  **mode: 'history',**

  **routes**

**});** 

We need to use **<router-link>** to allow the user to change the location of the browser without making a web request.
