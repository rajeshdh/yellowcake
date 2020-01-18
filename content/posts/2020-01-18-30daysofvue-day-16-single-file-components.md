---
template: SinglePost
title: '#30daysofVue - Day 16 - Single File Components'
status: Published
date: 2020-01-18T17:16:04.050Z
excerpt: >-
  Single File Components allow us to define the HTML/CSS and JS of a component
  all within a single .vue file. A single-file component is composed of three
  parts: 

  The <template> section which contains the component’s markup in plain HTML.The
  <script> section which contains all the JS logic within that component. The
  <style> section which contains all the component styles. 
categories:
  - category: Javascript
meta:
  description: >
    Single File Components allow us to define the HTML/CSS and JS of a component
    all within a single .vue file. A single-file component is composed of three
    parts: The <template> section which contains the component’s markup in plain
    HTML.The <script> section which contains all the JS logic within that
    component. The <style> section which contains all the component styles. 
  title: '#30daysofVue - Day 16 - Single File Components'
---
Single File Components allow us to define the HTML/CSS and JS of a component all within a single .vue file. 



A single-file component is composed of three parts: 

* **The <template>** section which contains the component’s markup in plain HTML.
* **The <script>** section which contains all the JS logic within that component. 
* **The <style>** section which contains all the component styles. 

Though the structure of a single-file component may look different, everything we’ve discussed thus far with regards to instance/component properties remains the same. We’re able to use all the properties a Vue instance component contains like d**ata, methods, computed properties, lifecycle hooks, etc.** 

The main advantage of using single-file components is how we’re able to neatly define the markup, logic, and styles of a component all within a single file. 

An important note to keep in mind is that single-file components are only made possible due to build tools like **Webpack**. These tools work alongside built Vue packages (like the [vue-loader library](<https://github.com /vuejs/vue-loader>)) to compile **.vue** components to plain JavaScript modules.
