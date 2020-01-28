---
template: SinglePost
title: '#30daysofVue - Day 26 - Implementing Tests'
status: Published
date: 2020-01-28T16:38:24.535Z
excerpt: >-
  There are multiple testing tools available for testing your Vue application.
  The popular choice is Jest. It offers us a  zero-configuration setup. The
  Getting Started guide in the Jest documentation shows us that we need to
  install the Jest package, create a .test.js or .spec.js file, and add a test
  script to the package.json file.However, if we select the Jest suite as a
  dependancy, we want in a Vue CLI scaffolded project - this setup would already
  be prepared for us. The Vue CLI introduces a tests/ directory adjacent to the
  src/ directory for a scaffolded project that has either the 'Unit Testing' or
  'E2E Testing' option selected during manual setup.
categories:
  - category: Javascript
meta:
  description: >-
    There are multiple testing tools available for testing your Vue application.
    The popular choice is Jest. It offers us a  zero-configuration setup. The
    Getting Started guide in the Jest documentation shows us that we need to
    install the Jest package, create a .test.js or .spec.js file, and add a test
    script to the package.json file. However, if we select the Jest suite as a
    dependancy, we want in a Vue CLI scaffolded project - this setup would
    already be prepared for us. The Vue CLI introduces a tests/ directory
    adjacent to the src/ directory for a scaffolded project that has either the
    'Unit Testing' or 'E2E Testing' option selected during manual setup.
  title: '#30daysofVue - Day 26 - Implementing Tests'
---
# Implementing Tests In Vue.js

There are multiple testing tools available for testing your Vue application. The popular choice is [**Jest**](https://jestjs.io). It offers us a  zero-configuration setup. The [Getting Started guide](https://jestjs.io/docs/en/getting-started) in the Jest documentation shows us that we need to install the Jest package, create a `.test.js` or `.spec.js` file, and add a test script to the `package.json` file.

However, if we select the Jest suite as a dependancy, we want in a **Vue CLI** scaffolded project - this setup would already be prepared for us. The Vue CLI introduces a **tests/** directory adjacent to the src/ directory for a scaffolded project that has either the **'Unit Testing'** or **'E2E Testing'** option selected during manual setup.

The tests/ directory will contain either the unit/ or e2e/ folders depending on which testing environment was selected during the Vue CLI setup stage. In our case, only a tests/unit/ folder will be created which would contain an .eslintrc.js file and an example.spec.js file.

Jest provides a few native methods that we'll be using. Both of the following methods accept two arguments, the first being a description string and the second a function to execute:

[describe()](https://jestjs.io/docs/en/api#describename-fn)

[it()](https://jestjs.io/docs/en/api#testname-fn-timeout) 

> In Jest, the it() function is sometimes aliased to test().

The describe() function provides a way for us to group our tests together in logical bundles.

We can add our first test using the it() function which is the function we can use to set our expectations.

The Vue CLI package sets up a quality testing environment using Jest (if selected) automatically for us. We can execute all our tests by using the `test:unit `script declared in the` package.json` file.



```
npm run test:unit
```



## **EXPECTATIONS**

Jest provides a few global commands in our tests by default (i.e. things you don't need to require). One of those is the **expect()** command. The expect() command has a few expectations which we can call on it.

The expect() function takes a single argument: the value or function that returns a value to be tested. For instance, our two tests we've already written pass the boolean values of **true and false .**
