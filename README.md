# angotia-sdk

Angotia SDK is a TypeScript library that provides a common (around Angotia game ecosystem) entities like: _utils, interfaces, models etc_.

## Commands

```bash
# run unit tests
$ npm run test

# watch unit tests
$ npm run test:watch

# full build
$ npm run yalc-publish

# full build + documentation + pushing library to attached locally repos
$ npm run yalc-publish

# generate documentation based on current build
$ npm run doc

# lint a whole library by eslint
$ npm run lint

```

## Turn on internal library logger

To enable library logger, add below variable to `.env` file inside your project:

```bash
# Node.js projects
$ SDK_LOGGER=ENABLED

# Next.js projects
$ NEXT_PUBLIC_SDK_LOGGER=ENABLED

# React.js projects
$ REACT_APP_SDK_LOGGER=ENABLED
```

## Attach SDK to another project

```bash
$ yalc add angotia-sdk
```
