# Post CSS

- Post css is a software development tool that uses javascript based plugins to automate routine css operations.
- Post css is a framework to develop CSS tools. it can be used to develop a template language such as Sass and LESS.

How to create package.json

- `npm init -y`

How to install post css and postcss CLI

- `npm i --save-dev postcss postcss-cli`
- change package.json scripts to
  `  "scripts": {
    "build:css": "postcss style.css --dir dest"
  },`
