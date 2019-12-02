---
template: SinglePost
title: A Beginner's introduction to Node.js
status: Featured
date: 2019-12-02T15:48:04.969Z
featuredImage: 'https://ucarecdn.com/2b6bf224-854d-4d1b-aeae-f98fac229b27/'
excerpt: >-
  Node.js is not a language or a framework. It is only a JavaScript runtime
  environment based on the Google V8 engine. At the same time, it combines
  JavaScript functions with Libuv to support io, fs and other language-only
  features. So that JavaScript can have both DOM operation (browser) and I / O,
  file reading and writing, database (server-side) and other capabilities, to
  make it the most straightforward full-stack language.
categories:
  - category: Javascript
  - category: Programming
meta:
  description: >-
    Node.js is not a language or a framework. It is only a JavaScript runtime
    environment based on the Google V8 engine. At the same time, it combines
    JavaScript functions with Libuv to support io, fs and other language-only
    features. So that JavaScript can have both DOM operation (browser) and I/O,
    file reading and writing, database (server-side) and other capabilities, to
    make it the most straightforward full-stack language.
  noindex: false
  title: A Beginner's introduction to Node.js
---


According to the [Node Foundation:](https://foundation.nodejs.org/about)



> Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js’ package ecosystem, npm, is the largest ecosystem of open source libraries in the world. As an asynchronous event driven JavaScript runtime, Node is designed to build scalable network applications.



From this definition, We can understand the following things.



* Node.js is not a JavaScript application, and it is not a language (JavaScript is a language). It is not a framework like Rails (Ruby), Laravel (PHP), or Django (Python). It is not a web server. Node.js is a JavaScript runtime environment.
* It is built on Chrome's V8, a popular JavaScript engine. The Chrome V8 engine is mainly C / C ++, which is equivalent of using JavaScript to do C / C ++ calls, which significantly reduces learning costs.
* E**vent-driven, non-blocking I / O model**. In simple terms, each function runs asynchronously. Libuv an event processing library is used to handle the processing of non-blocking I/O operations. It simplifies the concurrent programming model and allows you to write high-performance Web applications quickly.
* It uses npm as a package manager. Currently, npm is the largest open-source library management package eco-powerful, as of December 2019, the number of modules over 350,000.

Node.js is not a language or a framework. It is only a JavaScript runtime environment based on the Google V8 engine. At the same time, it combines JavaScript functions with Libuv to support io, fs and other language-only features. So that JavaScript can have both DOM operation (browser) and I/O, file reading and writing, database (server-side) and other capabilities, to make it the most straightforward full-stack language.

Node.js is usually used to develop low-latency network applications, i.e. applications that need to collect and exchange data in real-time  (APIs, live chat, microservices). Alibaba, Tencent, Qunar, Baidu, PayPal, Dow Jones, Wal-Mart, and LinkedIn all use Node.js framework to build applications.

Most people think that Node.js can only write website background or front-end tools, which is not complete. The goal of Node.js is to make concurrent programming more accessible. It is mainly used in I/O intensive network programming applications. It is open-source, cross-platform, and efficient (especially I/O processing), IBM, Microsoft, Yahoo, SAP, PayPal, Wal-Mart, and GoDaddy are all Node.js users.
