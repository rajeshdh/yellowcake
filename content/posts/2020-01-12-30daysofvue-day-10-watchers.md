---
template: SinglePost
title: '#30daysofVue - Day 10 - Watchers'
status: Published
date: 2020-01-12T17:41:39.267Z
excerpt: >-
  When you want to observe and react to data changes, you need watchers.It is
  almost similar to computed but there are some differences.Computed properties
  are by default get only, but you can also define a set method for computed
  properties to make changes to another property, thereby making it a two-way
  function. 
categories:
  - category: Javascript
meta:
  description: >-
    When you want to observe and react to data changes, you need watchers.It is
    almost similar to computed but there are some differences.Computed
    properties are by default get only, but you can also define a set method for
    computed properties to make changes to another property, thereby making it a
    two-way function. 
  title: '#30daysofVue - Day 10 - Watchers'
---
When you want to observe and react to data changes, you need **watchers**.

It is almost similar to computed but there are some differences.

Computed properties are by default get only, but you can also define a set method for computed properties to make changes to another property, thereby making it a two-way function. 

Watchers are by default two-way functions. 

This is most useful when you want to perform asynchronous or expensive operations in response to changing data.

Eg. calling an api whenever your data changes, popular example autoSave
