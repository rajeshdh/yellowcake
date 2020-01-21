---
template: SinglePost
title: '#30daysofVue - Day 19 - State management using single global store'
status: Published
date: 2020-01-18T17:16:04.050Z
excerpt: >-
  The state means data. State management often refers to the management of
  application-level data. We can implement simple state management by creating a
  store pattern, that involves sharing data store between components.The store
  can manage the state of our application as well as the methods that are
  responsible for changing the state. 
categories:
  - category: Javascript
meta:
  description: >-
    The state means data. State management often refers to the management of
    application-level data. We can implement simple state management by creating
    a store pattern, that involves sharing data store between components.The
    store can manage the state of our application as well as the methods that
    are responsible for changing the state. 
  title: '#30daysofVue - Day 19 - State management using single global store'
---
The **state** means data. **State management** often refers to the management of application-level data. 

We can implement simple state management by creating a store pattern, that involves sharing data store between components.

The store can manage the state of our application as well as the methods that are responsible for changing the state. 

Eg. We can create a store with an object called state. Assign this state to the component’s data method. So any change in the state will be reactive.

We can define methods that change our state in the data store and call them from components.

In this pattern, the components don’t interact with each other. Instead, they invoke changes to one another through the store. 

we can establish a pretty clear pattern here: 

The method in the components has the responsibility to act on the store method directly, so we can label it as a store **action**. 

The store method has a specific responsibility which is to mutate the store state directly. So we’ll say it’s a store **mutation**. 

Display data, i.e. the current state doesn’t care about what type of methods exist in the store and is only concerned with getting information from the store. So we can label our display data as a store **getter**. 

An action commits to a mutation. The mutation mutates state, which then affects the view (i.e. components). 

Components retrieve store data with **getters**. 

We’re starting to get very close to the Flux-like architecture of managing application-wide state.
