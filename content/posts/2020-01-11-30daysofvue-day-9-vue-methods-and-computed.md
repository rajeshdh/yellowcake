---
template: SinglePost
title: '#30daysofVue - Day 9 - Vue Methods and Computed'
status: Published
date: 2020-01-11T17:45:33.398Z
excerpt: >-
  Methods are plane javascript functions which are bound the Vue instance and
  can be called whenever needed. Methods accept parameters and get re-evaluated
  every time it's called.Computed are however derived values which automatically
  get updated when the underlying value gets updated. Computed are available
  just like as data properties, you don't need to call them and you don't pass
  any parameters to them. 
categories:
  - category: Javascript
meta:
  description: >-
    Methods are plane javascript functions which are bound the Vue instance and
    can be called whenever needed. Methods accept parameters and get
    re-evaluated every time it's called.Computed are however derived values
    which automatically get updated when the underlying value gets updated.
    Computed are available just like as data properties, you don't need to call
    them and you don't pass any parameters to them. 
  title: '#30daysofVue - Day 9 - Vue Methods and Computed'
---
Today I learned about **methods and computed** properties in Vuejs.

**Methods** are plane javascript functions which are bound the Vue instance and can be called whenever needed. **Methods** accept parameters and get re-evaluated every time it's called.

**Computed** are however derived values which automatically get updated when the underlying value gets updated. 

**Computed** are available just like as data properties, you don't need to call them and you don't pass any parameters to them. 

**Computed** values are very valuable for manipulating data that exists on your Vue. Whenever you want to filter or transform your data, typically you will use a computed value for that purpose.

**Computed** values are also cached to avoid repetitively calculating a value that doesn't need to be re-calculated when it hasn't changed (as it might not be in a loop for example).
