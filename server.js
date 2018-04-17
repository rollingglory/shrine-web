#!/usr/bin/env node
'use strict';

const debug = require('debug')('raneto');
const raneto = require('./');
const config = require('./config');
const app = raneto(config);

const server = app.listen(process.env.PORT || 8000, () => {
  debug('Express HTTP server listening on port ' + server.address().port);
});
