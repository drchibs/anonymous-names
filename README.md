[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

[![npm version](https://badge.fury.io/js/termii-nodejs.svg)](https://badge.fury.io/js/termii-nodejs)
[![GitHub version](https://badge.fury.io/gh/drchibs%2Ftermii-nodejs.svg)](https://badge.fury.io/gh/drchibs%2Ftermii-nodejs)


# Anonymous Names
A small npm package to generate random anonymous names like you see on google docs but with fun twists.

# Installation

You can install the package via npm:

```bash
npm i anonymous-names
```

# Usage:

## Loading and configuring the module

```javascript
const AnonymousNames = require("anonymous-names").AnonymousNames;

//ES6+
import { AnonymousNames } from "anonymous-names";
```

## Creating an Instance of the SDK:

```javascript

const generator = new AnonymousNames();
```

## Basic Usage
```javascript
const request = generator.generateName().then(response => console.log(response));
```

```bash
  // typical response sample
  
  Sanctified Mantis
```
There you go! 🍭
