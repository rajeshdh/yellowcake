---
template: SinglePost
title: '#30daysofVue - Day 11 - Lifecycle Hooks'
status: Published
date: 2020-01-13T15:35:34.455Z
excerpt: >-
  Vue provides various lifecycle hooks so that we can add custom functionality
  are various times in the instance lifecycle.We have the following hooks
  available.Created - instance data and events are active, the instance can be
  accessed, DOM not rendered, a good time to fetch api dataMounted - instance
  has been rendered and rendered DOM can be accessed, we can access the rendered
  DOM with this.$el . 
categories:
  - category: Javascript
meta:
  description: >-
    Vue provides various lifecycle hooks so that we can add custom functionality
    are various times in the instance lifecycle.We have the following hooks
    available.Created - instance data and events are active, the instance can be
    accessed, DOM not rendered, a good time to fetch api dataMounted - instance
    has been rendered and rendered DOM can be accessed, we can access the
    rendered DOM with this.$el . 
  title: '#30daysofVue - Day 11 - Lifecycle Hooks'
---
**Vue** provides various **lifecycle hooks** so that we can add custom functionality are various times in the instance lifecycle.

We have the following hooks available.

**Created** - instance data and events are active, the instance can be accessed, DOM not rendered, a good time to fetch api data

**Mounted** - instance has been rendered and rendered DOM can be accessed, we can access the rendered DOM with this.$el . 

**Updated** - fired on data changes that cause the instance to re-render or update, it’s like watch but for the entire instance

**Destroyed** - fired when the instance is fully destroyed, this is the last hook that’s fired in the lifecycle and at this moment the instance event listeners, child instances and directives are all removed. 

Similarly, we also have before hooks **( beforeCreate, beforeMount,	beforeUpdate, beforeDestroy** ) that runs just before the respective lifecycle event. These before hooks are useful if we want to run some functionality before the intended lifecycle change has been made.
