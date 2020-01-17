---
template: SinglePost
title: '#30daysofVue - Day 15 - Vue Components Nice To Know'
status: Published
date: 2020-01-17T17:32:24.748Z
excerpt: >-
  Here are some nice to knows about Vue components. Global vs local
  registration 

  We can register our components globally as well as locally. Global components
  are available throughout the app, and local components are bound to the
  particular instance only. We need to declare our local component in the
  components property of the instance we’d want to add the component. The
  components property accepts key-value pairs with the key referring to how the
  component is to be named in the instance, and the value being the options
  object of the component. 
categories:
  - category: Javascript
meta:
  description: >-
    Here are some nice to knows about Vue components. Global vs local
    registration We can register our components globally as well as locally.
    Global components are available throughout the app, and local components are
    bound to the particular instance only. We need to declare our local
    component in the components property of the instance we’d want to add the
    component. The components property accepts key-value pairs with the key
    referring to how the component is to be named in the instance, and the value
    being the options object of the component. 
  title: '#30daysofVue - Day 15 - Vue Components Nice To Know'
---
Here are some nice to knows about Vue components.

**Global vs local registration**

We can register our components globally as well as locally. Global components are available throughout the app, and local components are bound to the particular instance only.

We need to declare our local component in the components property of the instance we’d want to add the component.

The components property accepts key-value pairs with the key referring to how the component is to be named in the instance, and the value being the options object of the component. 

**Data as a function**

the data property of a Vue component should always be a function that returns an object. This is because Vue doesn’t recognise the difference between data objects used in different instances and as a result, treats them all as the same single data object. 

By having data in components be functions that return objects, each component can maintain its own independent data object. 

**Single root template**

With Vue template declarations, it’s a must to wrap the template of components in a single root element. Because this is how the Vue diff & patch algorithm was written, virtualDOM diff&patch algorithm heavily relies on the fact that each child component always has exactly one root element

[This issue ](https://github.com/vuejs/vue/issues/7088)explains the problem.
