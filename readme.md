# react-mod-gen

Automatically generate ESmodules quickly with react boilerplate code with [prop-types](https://www.npmjs.com/package/prop-types) and [emotionjs](https://emotion.sh/docs/introduction)

`mod-gen Header component` command generates a directory that looks like this:

- Header
  - index.js
  - Header.component.js

## installation

Probably best to install globally, so `npm install -g react-mod-gen`. Then you can generate modules inside any project on your machine.

### usage

`mod-gen` takes 3 arguments: name of directory, type of feature, _optional_ path to directory

so... if your repo looks like this:

- src
  - components

you can run `mod-gen Header component src/components`
and create

- src
  - components
    - Header
      - index.js
      - Header.component.js

OR you can `cd` into src/components and just run `mod-gen Header component`
