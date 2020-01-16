---
template: SinglePost
title: '#30daysofVue - Day 14 - Vue Custom Events'
status: Published
date: 2020-01-15T17:16:04.050Z
excerpt: >-
  Props are the traditional way to pass data from parent to child but what to do
  when we need to pass data from the child back to the parent.

  We can use custom events to pass data from child to parent. Custom events are
  like javascript events, but there is one distinction. 

  Vue custom events are used primarily for communication between components as
  opposed to communication between DOM nodes. 
categories:
  - category: Javascript
meta:
  description: >
    Props are the traditional way to pass data from parent to child but what to
    do when we need to pass data from the child back to the parent.

    We can use custom events to pass data from child to parent. Custom events
    are like javascript events, but there is one distinction. 

    Vue custom events are used primarily for communication between components as
    opposed to communication between DOM nodes. 
  title: '#30daysofVue - Day 14 - Vue Custom Events'
---
Props are the traditional way to pass data from parent to child but what to do when we need to pass data from the child back to the parent.

We can use **custom events** to pass data from **child to parent.** Custom events are like javascript events, but there is one distinction. 

**Vue custom events are used primarily for communication between components as opposed to communication between DOM nodes.** 

Create an event:

`this.$emit('name-of-event');`

Listen to an event and perform action:

`<my-component v-on:name-of-event="doSomething"></my-component>`

The props are used to pass data downwards while custom events can be used to send information upwards. 

Another critical thing to remember is the naming for events. The event must exactly match the name used to listen to that event. 

**v-on** event listeners inside DOM templates will be automatically transformed to lowercase (due to HTML’s case-insensitivity), so **v-on:myEvent** would become **v-on:myevent** – making **myEvent** impossible to listen to.

So it is always recommended to use **kebab-case** for event names.
