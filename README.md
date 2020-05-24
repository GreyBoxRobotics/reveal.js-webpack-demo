# reveal.js-webpack-demo

A demo of Reveal.js 4.0 bundled with webpack. This repository is a toned down bare minimum of [reveal.js-webpack-kit](https://github.com/gcalmettes/reveal.js-webpack-kit).

## Setup
Download this repository, change to its directory and:

```console
npm install
npm run build
npm start
```
A webpack-dev-server will be started at http://localhost:8080 with this demo presentation.

## Project structure

```
reveal.js-webpack-demo/
├── src/
|   ├── reveal-config.js        # Configuration for reveal
|   ├── main.scss               # All style files linked to this scss file
|   ├── index.js                # Main entry point of webpack
├── public/
|   ├── index.html              # Presentation deck
|   ├── dist/                   # Place where webpack will emit files
└── webpack.config.js           # Build configuration for webpack
```

## Contributions
Pull requests to this repository can be opened for any features/fixes.
