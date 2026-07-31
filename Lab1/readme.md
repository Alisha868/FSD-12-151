# EventLoop

JS is a synchronous and single threaded by default.

## There can be async behaviour
- with BrowserAPI - setTimeout, setInterval, setImmediate,nextTick
- with promises
- with event handlers

# Promise

A function not executed immediately but it must be executed after a while.
It has some status during the execution. At final it may be resolve(success) and reject(unsuccess).

## Call back function =>
that pass as arguement or the parameter to another function

## Modern javascript is divided into two categories 
 1. CommonJS (.cjs)-> supports OOPS-> require
  - priority (nextTick, Promise, setImmediate/setTimeout)
 2. ModuleJS (.mjs)-> follow modular approach -> import
  - priority (Promise, nextTick, setImmediate/setTimeout)321
  