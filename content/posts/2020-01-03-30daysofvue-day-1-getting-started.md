---
template: SinglePost
title: '#30daysofVue - Day 1 - Getting Started'
status: Published
date: 2020-01-03T13:55:02.931Z
featuredImage: 'https://ucarecdn.com/c468f8f5-f9b5-4e67-8a36-9b474bedfe3f/'
excerpt: >-
  Vue (pronounced /vjuː/, like view) is a progressive framework for building
  user interfaces.A progressive framework is a framework that adapts to a
  projects inherent complexity.Also from Vuejs home page, it says Vue is
  Approachable, Versatile and Performant.
categories:
  - category: Javascript
meta:
  description: >-
    Vue (pronounced /vjuː/, like view) is a progressive framework for building
    user interfaces.A progressive framework is a framework that adapts to a
    projects inherent complexity.Also from Vuejs home page, it says Vue is
    Approachable, Versatile and Performant.
  title: Getting started to Vue Js
---
> From the view 
>
> [docs](https://vuejs.org/v2/guide/)
>
> :
>
> Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces.

A progressive framework is a framework that adapts to a projects inherent complexity.

Also from Vuejs[ home page](https://vuejs.org/), it says Vue is **Approachable, Versatile and Performant.**

**Approachable**: If you know HTML, CSS and javascript, you can jump right in.

**Versatile**: There is a full ecosystem built around Vue library, like Vue-CLI, Vue-router, Vuex - for state management and other utilities for testing and development, which makes it a comprehensive framework.

**Performant**: Vue takes advantage of virtual dom that makes it blazing fast.

**Getting Started:**

Getting started with Vue is very easy. 

First, add the Vue library to your HTML page.

```
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

And then, Create a Vue instance, then pass the option to specify where our Vue instance will live in the app, and we can also add data object, where we specify the key and values that we want to add in our Vue application.

```
var app = new Vue({         el: '#app',        data: {           message: 'Hello Vue!'        }     })
```

We can access the data from our data object directly in our Vue templates by using {{}} Mustache Syntax and passing the key. Vue allows us to declaratively render data to the dom using a straight forward template syntax. 

```
 <body>   <div id="app">    {{message}}  </div></body>
```

I had much fun today learning about Vuejs, and It looks fascinating. 

Here is the link to [codesandbox](https://codesandbox.io/s/interesting-einstein-t6osj) for the complete code.
