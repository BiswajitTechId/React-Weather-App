React Weather App: State of the Art Web Development
===============================================

A dependency--not a boilerplate--to make your React project a delight to
develop.

## Node/NPM Versions

I'm running node v5.7.0 and npm v3.6.0 as I tinker, there's no plan to
support older versions at the moment.




## Getting Started

The quickest way to get started is to use `create-react-project`.

```sh
npm install
npm start
```


Now open [http://localhost:3000](http://localhost:3000).

Go edit a file, notice the app reloads, you can enable hot module
replacement by adding `AUTO_RELOAD=hot` to `.env`.

Also:

```
npm test
```

Also:

```
NODE_ENV=production npm start
```


## Features

- [React][react]
  - [React Router][router]
- Modern JavaScript with [Babel][babel]
  - [ES2015][es2015]
  - [React preset][react-preset] (JSX)
  - [Stage 1 proposals preset][stage1] (gotta have that `{ ...awesome, stuff }`)
  - [configurable][babelrc] with `.babelrc`
  - Polyfills
    - [ES5 Shims][es5]
    - [Promise][promise]
    - [fetch][fetch] (server and client)
- [Express][express] server rendering
- [Server-only routes][serverroute] (what?)
- [Document titles][documenttitle]
- [Code Splitting][splitting]
  - vendor/app initial bundles
  - [lazy route config loading][lazy]
  - [lazy route component loading][lazy]
- Auto Reload
  - Refresh (entire page)
  - [Hot Module Replacement][hmr] (just the changed components)
  - None (let you refresh when you're ready)
- [Webpack loaders][loaders]
  - [babel][babel-loader]
  - [CSS Modules][cssmodules]
  - [json][jsonloader]
  - [url][urlloader] Fonts / images
- Optimized production build
  - [gzip][compression]
  - [Minification][uglify]
  - [long-term asset caching][caching]
  - [base64][urlloader] inlined images/fonts/svg < 10k
- Test Runner
  - [Karma][karma]
  - [Mocha][mocha]


## API

### npm scripts

After running `ReactWeatherApp` your package.json will have some new tasks.

#### `npm start`

Starts the server. It's smart enough to know which `NODE_ENV` you're in.
If `NODE_ENV=production` you'll get the full production build. If you're
shipping to heroku, for instance, deploying is just `git push heroku master`.
It'll create a production build up there.

#### `npm test`
