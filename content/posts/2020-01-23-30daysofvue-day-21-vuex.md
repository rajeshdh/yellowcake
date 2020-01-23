---
template: SinglePost
title: '#30daysofVue - Day 21 - Vuex'
status: Published
date: 2020-01-23T14:59:02.614Z
excerpt: >-
  Vuex is an external library we need to install it in our application.npm
  install vuex —saveFor module based Webpack Vue applications, global level
  functionality (i.e. plugins) like Vuex need to be called with the Vue.use()
  global method before its use. 
meta:
  description: >-
    Vuex is an external library we need to install it in our application.npm
    install vuex —saveFor module based Webpack Vue applications, global level
    functionality (i.e. plugins) like Vuex need to be called with the Vue.use()
    global method before its use. 
  title: '#30daysofVue - Day 21 - Vuex'
---
Vuex is an external library we need to install it in our application.

`npm install vuex —save`

For module based Webpack Vue applications, global level functionality (i.e. plugins) like Vuex need to be called with the `Vue.use() `global method before its use. 

` import Vue from 'vue';`

` import Vuex from 'vuex';`

` Vue.use(Vuex);`

Then we need to create a Vuex Store.

`export const store = new Vuex.Store({ // store properties `

`}); `

The Vuex store is made complete with 4 objects - **state, mutations, actions, and getters.** 

A **state** is simply an object that contains the data that needs to be shared within the application. 

` const state = {`

`  numbers: [1, 2, 3]`

`}; `

**Mutations** are functions responsible in mutating store state. In Vuex, mutations always have access to the store state as the first argument. Also, actions may or may not pass in a payload as the second argument. 

` const mutations = {`

`  ADD_NUMBER(state, payload) {`

`   state.numbers.push(payload);`

`  }`

`}; `

**Actions** exist to call mutations. Actions are also responsible for performing any or all asynchronous calls before committing to mutations. Actions have access to a context object that provides access to store state (with context.state ), to store **getters** (with context.getters ), and to the commit function (with context.commit ). 

` const actions = {`

`  addNumber(context, number) {`

`   context.commit("ADD_NUMBER", number);`

`  }`

`}; `



**Getters** are to a Vuex store what **computed** properties are to a Vue component. Getters are primarily used to perform some **calculation/manipulation** to store state before having that information accessible to components. 

Like mutations, getters have access to the state as the first argument. 

` const getters = {`

`  getNumbers(state) {`

`   return state.numbers;`

`  }`

`}; `

We need to declare all these objects within the` new Vuex.Store({})` constructor to create our store instance. 

When a Vuex store is prepared, it’s only made available to a Vue application by declaring the store object within the Vue instance. 

` new Vue({`

`  render: h => h(App),`

`  store,`

`}).$mount('#app');`

With a well built Vuex store, components often do one of two things. They 

either: 

1. **GET** state information (by accessing store state or getters) or 

`computed: {`

`   getNumbers() {`

`    return this.$store.getters.getNumbers;`

`} } `

2. **DISPATCH** actions 

`methods: {`

`   addNumber(numberInput) {`

`    this.$store.dispatch(`

`     "addNumber",`

`     Number(numberInput)`

`); } `

`} `
