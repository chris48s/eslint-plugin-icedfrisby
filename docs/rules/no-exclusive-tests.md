# Disallow exclusive tests (`icedfrisby/no-exclusive-tests`)

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

IcedFrisby has a feature that allows you to run tests exclusively by appending `.only()` to a test-suite or a test-case.
This feature is really helpful to debug a failing test, so you don’t have to execute all of your tests.
After you have fixed your test and before committing the changes you have to remove `.only()` to ensure all tests are executed on your build system.

This rule reminds you to remove `.only()` from your tests by raising a warning whenever you are using the exclusivity feature.

## Rule Details

This rule looks for occurrences of `.only()` appended to IcedFrisby test cases.

Examples of **incorrect** code for this rule:

```js
frisby.create('test').only()

t.create('test').only()

t.create('test')
  .get('/foo/bar')
  .expectJSON({ key: 'value' })
  .only()

t.create('test')
  .only()
  .get('/foo/bar')
  .expectJSON({ key: 'value' })
```

Examples of **correct** code for this rule:

```js
frisby.create('test')

t.create('test')

t.create('test')
  .get('/foo/bar')
  .expectJSON({ key: 'value' })
```

## When Not To Use It

* If you really want to execute only one test-suite or test-case because all other tests should not be executed, turn this rule off.
* If you use another library which exposes a similar API to IcedFrisby this rule could raise false positives.

## Further Reading

* [`only()`](https://github.com/IcedFrisby/IcedFrisby/blob/master/API.md#only)
