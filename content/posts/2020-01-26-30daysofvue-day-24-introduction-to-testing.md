---
template: SinglePost
title: '#30daysofVue - Day 24 - Introduction To Testing'
status: Published
date: 2020-01-23T14:59:02.614Z
excerpt: >-
  When we talk about testing, we’re talking about the process of automating the
  process of setting up and measuring our assumptions against assertions of
  functionality about our application. Testing can help reveal bugs before they
  appear, instil confidence in our web applications, and make it easy to onboard
  new developers on an existing codebase. 
categories:
  - category: Javascript
meta:
  description: >-
    When we talk about testing, we’re talking about the process of automating
    the process of setting up and measuring our assumptions against assertions
    of functionality about our application. Testing can help reveal bugs before
    they appear, instil confidence in our web applications, and make it easy to
    onboard new developers on an existing codebase. 
  title: '#30daysofVue - Day 24 - Introduction To Testing'
---
When we talk about testing, we’re talking about the process of automating the process of setting up and measuring our assumptions against assertions of functionality about our application. 

Testing can help reveal bugs before they appear, instil confidence in our web applications, and make it easy to onboard new developers on an existing codebase. 

When we talk about front-end testing in the context of Vue, we’re referring to the process of making assertions about what our Vue app renders and how it responds to user interaction. 

**INTEGRATION TESTING** 

Integration testing (often labelled as end-to-end testing) is a top-down approach where tests are written to determine whether an application has been built appropriately from start to finish. We write end-to-end tests as though we are a user’s movement through our application. 

**UNIT TESTING** 

Unit testing is a confined approach that involves isolating each part of an application and testing it in isolation (i.e. as a unit). Tests are provided with a given input, and an output is often evaluated to make sure it matches expectations. 

Unit tests typically do not require a browser, can run incredibly quickly (no writing to the DOM required), and the assertions themselves are usually terse and straightforward.
