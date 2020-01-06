---
template: SinglePost
title: '#30daysofVue - Day 2 - Vue Instance - Data'
status: Published
date: 2020-01-04T17:21:09.454Z
excerpt: >-
  Today I learned about data and methods options of Vue instance.Tomorrow I'll
  explore a bit more about options available in the Vue instance. All the items
  in the data object are added to Vue's reactivity system while creating a new
  instance. If a property is not added while instantiating the Vue object, it
  will not be reactive.
categories:
  - category: Javascript
meta:
  description: >-
    Today I learned about data and methods options of Vue instance.Tomorrow I'll
    explore a bit more about options available in the Vue instance. All the
    items in the data object are added to Vue's reactivity system while creating
    a new instance. If a property is not added while instantiating the Vue
    object, it will not be reactive.
  title: '#30daysofVue - Day 2 - Vue Instace - Data'
---
Today I learned about data and methods options of Vue instance.

Tomorrow I'll explore a bit more about options available in the Vue instance. 

All the items in the data object are added to Vue's reactivity system while creating a new instance. If a property is not added while instantiating the Vue object, it will not be reactive.

Any changes to the item in the data object will make Vue re render.

Methods: You can add methods that will be bound to that instance and behave as simple javascript functions. Methods allow us to change the data values of our instance directly.
