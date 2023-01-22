"use strict";

const requireIndex = require("requireindex");

module.exports = {
  rules: requireIndex(__dirname + "/rules"),
  configs: {
    recommended: {
      plugins: ["icedfrisby"],
      rules: {
        "icedfrisby/no-exclusive-tests": "error",
        "icedfrisby/no-skipped-tests": "warn",
      },
    },
  },
};
