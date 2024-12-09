"use strict";

const requireIndex = require("requireindex");

const plugin = {
  configs: {},
  rules: requireIndex(__dirname + "/rules"),
  processors: {},
};

Object.assign(plugin.configs, {
  recommended: {
    plugins: {
      icedfrisby: plugin,
    },
    rules: {
      "icedfrisby/no-exclusive-tests": "error",
      "icedfrisby/no-skipped-tests": "warn",
    },
  },
});

module.exports = plugin;
