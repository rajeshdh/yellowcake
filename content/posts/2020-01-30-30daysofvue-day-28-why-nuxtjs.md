---
template: SinglePost
title: '#30daysofVue - Day 29 - Dynamic components'
status: Published
date: 2020-01-23T14:59:02.614Z
excerpt: >-
  Today I learned about a feature in Vue.js that allows you to load dynamic
  components or conditionally loading Vue components. A very natural way to do
  this is by using if-else to load components. But Vue provides a better way to
  do this.
categories:
  - category: Javascript
meta:
  description: >-
    Today I learned about a feature in Vue.js that allows you to load dynamic
    components or conditionally loading Vue components. A very natural way to do
    this is by using if-else to load components. But Vue provides a better way
    to do this.
  title: '#30daysofVue - Day 28 - Why NuxtJs'
---
I missed a few days. But here I am back on track. 

Today I learned about a feature in Vue.js that allows you to load dynamic components or conditionally loading Vue components. A very natural way to do this is by using if-else to load components. But Vue provides a better way to do this.

We can use `component` component with `v-bind:is` directive.

```
<component v-bind:is="componentName"></component>
```

Here **componentName** is the name of the component we want to render.

```
<script>
```

```
export default {
```

```
  data() {
```

```
    return {
```

```
      componentName: 'textComponent',
```

```
    }
```

```
  }
```

```
}
```

```
</script>
```

By defining componentName data property we can set it to any component based on our requirement.
