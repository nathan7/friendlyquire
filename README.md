# friendlyquire

  wrap require to make package-root-relative requires nicer

## Installation

    npm install --save friendlyquire

## Usage

  friendlyquire replaces regular require, and gives you `~` as a prefix to require something local. Just `~` refers to your package root.

```javascript
require = require('friendlyquire')(require)
var something = require('something')
  , localStuff = require('~/stuff')
```

## Is this a good idea?

  I haven't got the slightest clue.

