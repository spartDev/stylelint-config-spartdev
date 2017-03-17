# stylelint-config-spartdev
[![Build Status](https://travis-ci.org/spartDev/stylelint-config-spartdev.svg?branch=master)](https://travis-ci.org/Spartdev/stylelint-config-spartdev)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/Spartdev/stylelint-config-spartdev/master/LICENSE)
> A simple stylelint config for your project.

## Installation

```console
$ npm install stylelint-config-spartdev --save-dev
```

or

```console
$ yarn add stylelint-config-spartdev -D
```

## Usage

Create a .stylelintrc file with the following basic configuration:

```json
{
  "extends": "stylelint-config-spartdev"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:


```json
{
  "extends": "stylelint-config-spartdev",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
