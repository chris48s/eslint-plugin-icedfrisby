"use strict";

const rule = require("../../../lib/rules/no-exclusive-tests"),
  RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();
ruleTester.run("no-exclusive-tests", rule, {
  valid: [
    "frisby.create('test')",
    "t.create('test').get('/foo/bar').expectBadge({ key: 'value' })",
    "t.create('test').get('/foo/bar').expectBadge({ key: 'value' }).skip()",
    "frisby.only()",
    "frisby.create('only')",
    "describe().only()",
    "it().only()",
    "only",
    "only()",
    "foobar.only()",
  ],

  invalid: [
    {
      code: "frisby.create('test').only()",
      errors: [{ messageId: "unexpectedExclusive" }],
    },
    {
      code: "t.create('test').only()",
      errors: [{ messageId: "unexpectedExclusive" }],
    },
    {
      code: "t.create('test').get('/foo/bar').expectBadge({ key: 'value' }).only()",
      errors: [{ messageId: "unexpectedExclusive" }],
    },
    {
      code: `t.create('test').only().get('/foo/bar').expectBadge({ key: 'value' })`,
      errors: [{ messageId: "unexpectedExclusive" }],
    },
    {
      code: "frisby.create('test').only (  ).only ()",
      errors: [
        { messageId: "unexpectedExclusive" },
        { messageId: "unexpectedExclusive" },
      ],
    },
  ],
});
