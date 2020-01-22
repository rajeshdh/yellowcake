---
template: SinglePost
title: '#30daysofVue - Day 20 - Flux And Vuex'
status: Published
date: 2020-01-18T17:16:04.050Z
excerpt: >-
  As our application grows, we’ll have more data to keep track. So we’ll need a
  better data handling approach. Our code is required to handle more data and
  application state with new features. From asynchronous server responses to
  locally-generated, unsynchronised data, we have to not only keep track of this
  data but also tie it to the view in a sane way. Recognising this need for data
  management, the Facebook team released a pattern for dealing with data called
  Flux.
categories:
  - category: Javascript
meta:
  description: >-
    As our application grows, we’ll have more data to keep track. So we’ll need
    a better data handling approach.Our code is required to handle more data and
    application state with new features. From asynchronous server responses to
    locally-generated, unsynchronised data, we have to not only keep track of
    this data but also tie it to the view in a sane way. Recognising this need
    for data management, the Facebook team released a pattern for dealing with
    data called Flux.
  title: '#30daysofVue - Day 20 - Flux And Vuex'
---
As our application grows, we’ll have more data to keep track. So we’ll need a **better data handling approach.**

Our code is required to handle more data and application state with new features. From asynchronous server responses to locally-generated, unsynchronised data, we have to not only keep track of this data but also tie it to the view in a sane way. 

Recognising this need for data management, the **Facebook** team released a pattern for dealing with data called Flux.

**Flux** is a design pattern created by Facebook that manages how data flow through and client-side application. 

In the flux pattern default method of handling, data is passing data from parent to child components.

The flux pattern is composed of 4 parts organised as the one-way data pipeline.

* Action
* Dispatcher
* Store
* View

The primary idea behind Flux is that there is a single source of truth (the store) that can only be updated by triggering actions. The actions are responsible for calling the dispatcher, which the store can subscribe to changes and update their data accordingly. 

> The key idea behind 
>
> **Flux**
>
>  is 
>
> **data flows in one direction and kept entirely in the store.**
>
>  

Though **Vuex** was inspired mainly by Flux, it is not itself a pure flux implementation. 

The main principles of **Vuex** are: 

*  **The view** (i.e. components) dispatches actions that describe what happened.
*  **The store** receives these actions and determines what state changes should occur.
*  After the state updates, the new state is pushed to the view. 

This simplicity is what makes Vuex a relatively easy library to understand since it doesn’t include any of the more complicated functionality often found in other flux-like libraries (e.g. middlewares, dispatcher payloads, etc.).
