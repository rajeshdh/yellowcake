---
template: SinglePost
title: '#30daysofVue - Day 7 - v-model'
status: Published
date: 2020-01-09T17:15:25.580Z
excerpt: >-
  V-model binds the user input with the vue objects data model, as one change
  the other automatically get updated.It takes the data property of vue instance
  as a single source of truth, as opposed to the HTML attributes like checked or
  selected.
categories:
  - category: Javascript
meta:
  description: >-
    V-model binds the user input with the vue objects data model, as one change
    the other automatically get updated.It takes the data property of vue
    instance as a single source of truth, as opposed to the HTML attributes like
    checked or selected.
  title: '#30daysofVue - Day 7 - v-model'
---
**V-model** binds the user input with the vue objects data model, as one change the other automatically get updated.

It takes the data property of vue instance as a single source of truth, as opposed to the HTML attributes like checked or selected.

To make the model update when the change event occurs, and not any time the user presses a key, you can use **v-model.lazy** instead of just **v.model**.

Working with input fields, **v-model.trim** is useful because it automatically removes whitespace.

And if you accept a number instead than a string,  you can use **v-model.number.**
