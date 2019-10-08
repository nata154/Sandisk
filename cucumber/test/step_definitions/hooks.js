"use strict";
const { After, Before, Status } = require('cucumber');
const fs = require('fs');
const { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
