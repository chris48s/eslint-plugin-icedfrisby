# Disallow skipped tests (`icedfrisby/no-skipped-tests`)

⚠️ This rule _warns_ in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

IcedFrisby has a feature that allows you to skip tests by appending `.skip()` to a test-suite or a test-case.
Sometimes tests are skipped as part of a debugging process, and aren't intended to be committed.  This rule reminds you to remove `.skip()` from your tests.

## Rule Details

This rule looks for occurrences of `.skip()` appended to IcedFrisby test cases.

Examples of **incorrect** code for this rule:

```js
frisby.create('test').skip()

t.create('test').skip()

t.create('test')
  .get('/foo/bar')
  .expectJSON({ key: 'value' })
  .skip()

t.create('test')
  .skip()
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

* If you really want to commit skipped tests to your repo, turn this rule off.
* If you use another library which exposes a similar API to IcedFrisby this rule could raise false positives.

## Further Reading

* [`skip()`](https://github.com/IcedFrisby/IcedFrisby/blob/master/API.md#skip)
