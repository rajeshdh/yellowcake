---
template: SinglePost
title: '#30daysofVue - Day 18 - Custom events and the Event Bus '
status: Published
date: 2020-01-18T17:16:04.050Z
excerpt: >-
  There are multiple ways of handling state in Vue application.First is using
  props and custom events. We can pass data from a parent to child component
  using props and if we need to communicate from child component to the parent
  component, we can use custom events.Sibling-Sibling communicationAn EventBus
  is a Vue instance that is used to enable isolated components to subscribe and
  publish custom events between one another. 
categories:
  - category: Javascript
meta:
  description: >-
    There are multiple ways of handling state in Vue application.First is using
    props and custom events. We can pass data from a parent to child component
    using props and if we need to communicate from child component to the parent
    component, we can use custom events.Sibling-Sibling communicationAn EventBus
    is a Vue instance that is used to enable isolated components to subscribe
    and publish custom events between one another. 
  title: '#30daysofVue - Day 18 - Custom events and the Event Bus '
---
There are multiple ways of handling state in Vue application.

First is using props and custom events. We can pass data from a parent to child component using props and if we need to communicate from child component to the parent component, we can use custom events.

**Sibling-Sibling communication**

**An EventBus** is a Vue instance that is used to enable isolated components to subscribe and publish custom events between one another. 

The event bus is a global event system in Vue where we can create an event in one component and subscribe to it as a listener in another component.

Using Event bus is not recommend to be used in complex apps. Because it can be challenging to manage multiple events and event listeners in a large or complex system.

.
