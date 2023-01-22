"use strict";

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow skipped tests",
      recommended: true,
      url: "https://github.com/chris48s/eslint-plugin-icedfrisby/blob/main/docs/rules/no-skipped-tests.md",
    },
    messages: {
      unexpectedSkip: "Unexpected skipped test",
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    return {
      CallExpression(node) {
        const head = context.getSourceCode().getFirstTokens(node, 4);
        const isFrisby =
          head[1].type === "Punctuator" &&
          head[1].value === "." &&
          head[2].type === "Identifier" &&
          head[2].value === "create" &&
          head[3].type === "Punctuator" &&
          head[3].value === "(";

        const tail = context.getSourceCode().getLastTokens(node, 3);
        const hasSkip =
          tail[0].type === "Identifier" &&
          tail[0].value === "skip" &&
          tail[1].type === "Punctuator" &&
          tail[1].value === "(" &&
          tail[2].type === "Punctuator" &&
          tail[2].value === ")";

        if (isFrisby && hasSkip) {
          context.report({ node, messageId: "unexpectedSkip" });
        }
      },
    };
  },
};
