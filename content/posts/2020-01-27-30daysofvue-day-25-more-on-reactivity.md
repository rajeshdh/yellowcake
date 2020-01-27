---
template: SinglePost
title: '#30daysofVue - Day 25 - More on Reactivity'
status: Published
date: 2020-01-27T16:44:11.741Z
excerpt: >-
  Today I studied a bit more about Reactivity in Vue. I wanted to know more
  about when does it fail and how to fix that.Reactivity doesn't work for
  dynamically added properties for an object.And for arrays it doesn't work
  when:When we directly set an item with the index, e.g. vm.items[indexOfItem] =
  newValueWhen we modify the length of the array, e.g. vm.items.length =
  newLength
categories:
  - category: Javascript
meta:
  description: >-
    Today I studied a bit more about Reactivity in Vue. I wanted to know more
    about when does it fail and how to fix that.Reactivity doesn't work for
    dynamically added properties for an object.And for arrays it doesn't work
    when:When we directly set an item with the index, e.g. vm.items[indexOfItem]
    = newValueWhen we modify the length of the array, e.g. vm.items.length =
    newLength
  title: '#30daysofVue - Day 25 - More on Reactivity'
---
Today I studied a bit more about Reactivity in **Vue**. I wanted to know more about when does it fail and how to fix that.

Reactivity doesn't work for dynamically added properties for an object.

And for arrays it doesn't work when:

When we directly set an item with the index, e.g. `vm.items[indexOfItem] = newValue`

When we modify the length of the array, e.g.` vm.items.length = newLength`

We can fix this by using `Vue.set or this.$set` to add new properties to the objects. Or if we are adding multiple properties, we can return a new object with properties from both the original object and the mixin object:

```
// instead of `Object.assign(this.someObject, { a: 1, b: 2 })`
```

```
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
```



**Similarly for arrays**

we can also use the` vm.$set` instance method, which is an alias for the global `Vue.set:`

`vm.$set(vm.items, indexOfItem, newValue)`

To deal with caveat 2, i.e. to modify the length of the array, we can use splice:

`vm.items.splice(newLength)`
