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

## Support

Library supports below technology stacks:

1. Next.js + Typescript _(Node)_
2. Nest.js + Fastify _(Node)_
3. React.js 17.x + Babel 7.x _(Web)_

### Data fetching

Angotia SDK provides some functions for fetching resources over Internet. To provide support
for web and Node applications, SDK uses _axios_ library internally.

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
