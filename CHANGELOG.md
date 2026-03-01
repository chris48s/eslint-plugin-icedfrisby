# Changelog

## 📦 0.3.0

* Upgrade for compatibility with ESLint 10.x
* Require eslint>=9
* Drop compatibility with node <22
* `no-exclusive-tests` now fails on
    ```js
    frisby.create('test').only(null)

    foobar.frisby = frisby
    foobar.frisby.create('test').only()
    ```
* `no-skipped-tests` now fails on
    ```js
    frisby.create('test').skip(null)

    foobar.frisby = frisby
    foobar.frisby.create('test').skip()
    ```

## 📦 0.2.0

* Migrate to flat config
* Require eslint>=8.21.0
* Drop compatibility with node <18

## 📦 0.1.0

* First Release
