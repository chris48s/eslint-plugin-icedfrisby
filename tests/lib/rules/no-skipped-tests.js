"use strict";

const rule = require("../../../lib/rules/no-skipped-tests"),
  RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();
ruleTester.run("no-skipped-tests", rule, {
  valid: [
    "frisby.create('test')",
    "t.create('test').get('/foo/bar').expectBadge({ key: 'value' })",
    "t.create('test').get('/foo/bar').expectBadge({ key: 'value' }).only()",
    "frisby.skip()",
    "frisby.create('skip')",
    "describe().skip()",
    "it().skip()",
    "skip",
    "skip()",
    "foobar.skip()",
  ],

  invalid: [
    {
      code: "frisby.create('test').skip()",
      errors: [{ messageId: "unexpectedSkip" }],
    },
    {
      code: "t.create('test').skip()",
      errors: [{ messageId: "unexpectedSkip" }],
    },
    {
      code: "t.create('test').get('/foo/bar').expectBadge({ key: 'value' }).skip()",
      errors: [{ messageId: "unexpectedSkip" }],
    },
    {
      code: `t.create('test').skip().get('/foo/bar').expectBadge({ key: 'value' })`,
      errors: [{ messageId: "unexpectedSkip" }],
    },
    {
      code: "frisby.create('test').skip (  ).skip ()",
      errors: [
        { messageId: "unexpectedSkip" },
        { messageId: "unexpectedSkip" },
      ],
    },
  ],
});
