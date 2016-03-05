# UtilityJS

[![Build Status](https://travis-ci.org/faressoft/utilityjs.svg?branch=master)](https://travis-ci.org/faressoft/utilityjs)
[![Coverage Status](https://coveralls.io/repos/github/faressoft/utilityjs/badge.svg?branch=master)](https://coveralls.io/github/faressoft/utilityjs?branch=master)
[![npm](https://img.shields.io/npm/v/utilityjs.svg)](https://www.npmjs.com/package/utilityjs)
[![Join the chat at https://gitter.im/faressoft/utilityjs](https://badges.gitter.im/faressoft/utilityjs.svg)](https://gitter.im/faressoft/utilityjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm](https://img.shields.io/npm/l/utilityjs.svg)](https://github.com/faressoft/utilityjs/blob/master/LICENSE)

The missing utility functions for JavaScript. Inspired by the built-in functions of
- PHP
- Ruby
- Python

# Installation
You have many options to install UtilityJS
##### Using NPM
```
$ npm install utilityjs --save
```

##### Using Bower
```
$ bower install utilityjs --save
```

##### Using Git
```
$ git clone "https://github.com/faressoft/utilityjs.git"
```

# Usage
Can be used with node.js, amd and in the browser.
##### Node.js
```js
var u = require('utilityjs');
```

##### AMD (RequireJS)
```js
require(['lib/utilityjs.js'], function(u) {
    // Do your magic here
});
```

##### Browser
- You have to include UtilityJS in your document.
- Then you can use its api through the object `u`.
```html
<script src="lib/utilityjs.js" type="text/javascript"></script>
```

# Testing
To run tests use the following command, but make sure you that all the `devDependencies` are installed.
```
$ npm test
```

# License
MIT © Mohammad Fares