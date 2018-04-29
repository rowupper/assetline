#!/usr/bin/env node
'use strict';

const meow = require('meow');
const build = require('./');

const cli = meow(`
  Usage
    $ assetline [file]

  Options
    -V, --verbose  Output more verbose info to stderr.

  File
    File. This is required. The file input is the .scss file that
    will be built into .css. The build automatically looks in the
    node_modules/ directory for any inputs.

  Example
    $ assetline index.scss
`, {
  flags: {
    verbose: {
      type: 'boolean',
      alias: 'V'
    }
  }
});

build(cli)
  .catch(error => {
    console.error(`Unable to build: ${error}`); // eslint-disable-line no-console, max-len

    process.exit(1);
  })
  .then(() => {
    process.exit(0);
  });
