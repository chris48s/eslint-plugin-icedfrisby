"use strict";

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow exclusive tests",
      recommended: true,
      url: "https://github.com/chris48s/eslint-plugin-icedfrisby/blob/main/docs/rules/no-exclusive-tests.md",
    },
    messages: {
      unexpectedExclusive: "Unexpected exclusive test",
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    function hasCreateInChain(start) {
      let cur = start;
      while (cur) {
        if (cur.type === "CallExpression") {
          const callee = cur.callee;
          if (callee && callee.type === "MemberExpression") {
            const prop = callee.property;
            if (prop && prop.type === "Identifier" && prop.name === "create") {
              return true;
            }
            cur = callee.object;
            continue;
          }
          break;
        }

        if (cur.type === "MemberExpression") {
          cur = cur.object;
          continue;
        }

        break;
      }
      return false;
    }

    return {
      CallExpression(node) {
        const callee = node.callee;
        if (!callee || callee.type !== "MemberExpression") {
          return;
        }

        const prop = callee.property;
        if (!prop || prop.type !== "Identifier" || prop.name !== "only") {
          return;
        }

        if (hasCreateInChain(callee.object)) {
          context.report({ node, messageId: "unexpectedExclusive" });
        }
      },
    };
  },
};
