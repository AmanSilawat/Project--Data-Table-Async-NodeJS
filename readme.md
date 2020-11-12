# Initial step to make a node server

### Type in terminal

```sh
$ npm init -y
$ npm i express chance shuffle-array
$ npm i --save-dev nodemon
```


### Add some text in package.json
```sh
"scripts": {
    "start": "node index.js",
    ": "nodemon index.js"
}
```

### Create in root directory index.js file
Create a node server.
```sh
const express = require('express');
...
...
```


### Run the server

```sh
$ npm run dev
```
