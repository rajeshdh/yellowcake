---
template: SinglePost
title: '#30daysofVue - Day 12 - Vue Global Components'
status: Published
date: 2020-01-14T16:53:40.229Z
excerpt: >-
  Today I learned about Vue global components. We can register our components
  that we need globally in our app. 
categories:
  - category: Javascript
meta:
  description: >-
    Today I learned about Vue global components. We can register our components
    that we need globally in our app. 
  title: '#30daysofVue - Day 12 - Vue Global Components'
---
Today I learned about Vue global components. We can register our components that we need globally in our app. eg.

`Vue.component('component-a', { /* ... */ })`

`Vue.component('component-b', { /* ... */ })`

`Vue.component('component-c', { /* ... */ })`

`new Vue({ el: '#app' })`

And we can access them directly in our Vue instance templates. eg. 

`<div id="app">`

`  <component-a></component-a>`

`  <component-b></component-b>`

`  <component-c></component-c>`

`</div>`
