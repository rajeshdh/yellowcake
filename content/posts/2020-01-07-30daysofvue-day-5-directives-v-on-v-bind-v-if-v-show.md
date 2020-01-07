---
template: SinglePost
title: '#30daysofVue - Day 5 -  Directives ( v-on, v-bind, v-if, v-show) '
status: Published
date: 2020-01-07T18:01:51.408Z
excerpt: >-
  Today I learned about some directives ( v-on, v-bind, v-if, v-show) that we
  use in Vuejs.V-on used for event handling, binding an event to an HTML
  element, create event listeners within the DOM to enable us to do something
  when a particular event happens. Eg. click, dblclick, submit, keydown, keyup
  etc. 
categories:
  - category: Javascript
meta:
  description: >-
    Today I learned about some directives ( v-on, v-bind, v-if, v-show) that we
    use in Vuejs.V-on used for event handling, binding an event to an HTML
    element, create event listeners within the DOM to enable us to do something
    when a particular event happens. Eg. click, dblclick, submit, keydown, keyup
    etc. 
  title: '#30daysofVue - Day 5 -  Directives ( v-on, v-bind, v-if, v-show) '
---
Today I learned about some directives **( v-on, v-bind, v-if, v-show)** that we use in Vuejs.

**V-on** used for event handling, binding an event to an HTML element, create event listeners within the DOM to enable us to do something when a particular event happens. 

Eg. click, dblclick, submit, keydown, keyup etc. 

Shorthand for **v-on is @** eg v-on:click=“functionName” can be @click=“functionName”



**V-bind** is used to bind data to standard HTML attributes like href, id, src, etc. Where we cannot use moustache syntax. 

Shorthand for **v-bind is :** eg v-bind:src=“data property” can be :src=“data property”

**V-if and v-show** are two conditional directives, v-show always render the component but keeps it hidden until needed, can be used for toggling some HTML.

V-if renders the HTML only if the condition is true.
