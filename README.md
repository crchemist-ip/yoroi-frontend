# Icarus light Cardano wallet - PoC
  
  We use as template for this repository: [React Chrome Extension Boilerplate](https://github.com/jhen0409/react-chrome-extension-boilerplate)

## Features

 - Hot reloading React (Using [Webpack](https://github.com/webpack/webpack) and [React Transform](https://github.com/gaearon/react-transform))
 - Write code with ES2015+ syntax (Using [Babel](https://github.com/babel/babel))
 - E2E tests of Window & Popup & Inject pages (Using [Chrome Driver](https://www.npmjs.com/package/chromedriver), [Selenium Webdriver](https://www.npmjs.com/package/selenium-webdriver))

## Installation

### Prerequisites

- node v8.9.4 (if you are using nvm, just execute: `$ nvm use`)
- [rust version used by rust-cardano-crypto](https://github.com/input-output-hk/rust-cardano-crypto#installation)

```bash
# clone the repository with the submodule rust-cardano-crypto
$ git clone --recursive git@github.com:input-output-hk/icarus-poc.git
# or
$ git submodule update --init --recursive git@github.com:input-output-hk/icarus-poc.git

# Install dependencies
$ npm run setup

```

## Development

* Run script
```bash
# build files to './dev'
# start webpack development server
$ npm run dev
```
* If you're developing Inject page, please allow `https://localhost:3000` connections. (Because `injectpage` injected GitHub (https) pages, so webpack server procotol must be https.)
* [Load unpacked extensions](https://developer.chrome.com/extensions/getstarted#unpacked) 

  Extensions that you download from the Chrome Web Store are packaged up as .crx files, which is great for distribution, but not so great for development. Recognizing this, Chrome gives you a quick way of loading up your working directory for testing. Let's do that now.

  Visit `chrome://extensions` in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars. and select Extensions under the More Tools menu to get to the same place).

  Ensure that the Developer mode checkbox in the top right-hand corner is checked.

  Click Load unpacked extension… to pop up a file-selection dialog.

  Navigate to the directory in which your extension files live (`./dev` folder), and select it.


#### React hot reload

This boilerplate uses `Webpack` and `react-transform`. You can hot reload by editing related files of Popup & Window & Inject page.

## Build

```bash
# build files to './build'
$ npm run build
```

## Compress

```bash
# compress build folder to {manifest.name}.zip and crx
$ npm run build
$ npm run compress -- [options]
```

#### Options

If you want to build `crx` file (auto update), please provide options, and add `update.xml` file url in [manifest.json](https://developer.chrome.com/extensions/autoupdate#update_url manifest.json).

* --app-id: your extension id (can be get it when you first release extension)
* --key: your private key path (default: './key.pem')  
  you can use `npm run compress-keygen` to generate private key `./key.pem`
* --codebase: your `crx` file url

See [autoupdate guide](https://developer.chrome.com/extensions/autoupdate) for more information.

## Test

* `test/app`: React components.
* `test/e2e`: E2E tests (use [chromedriver](https://www.npmjs.com/package/chromedriver), [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver))

```bash
# lint
$ npm run lint
# test/app
$ npm test
$ npm test -- --watch  # watch files
# test/e2e
$ npm run build
$ npm run test-e2e
```

## LICENSE

[MIT](LICENSE)