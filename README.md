# github-api-search
A app to search a Github user/organisation, list their repositories, and then filter/sort them using React, Redux and Webpack.

Contains:

* a working example of a search form, and filterable table of a Github user's/organisation's repositories.
* ES6 - 7 Support with Babel.
* Redux dev tools to help you keep track of the app's state (install the Chrome plugin).
* Hot module replacement support so you can change modules or react components without having to reload the browser.
* a webpack production config so you can build the app and make it ready for production
* Sass support.
* eslint to keep your js readable.

## Run the app

* Clone the Repo.
* From terminal 'cd' into your folder.
0. ```yarn```
0. ```yarn start```

## Get a Github API Token

Github limits API calls to 10 unless the app is authentication. Click the link below to authenticate the app and get your token. Add it to a '.env' file and label it 'USER_SEARCH_OAUTH'. You can see it being applied in the middleware.

* [Get an API Token](https://github.com/blog/1509-personal-api-tokens)

## Build the app
```yarn build```

This will build the app into the "dist" directory in the root of the project. It contains the index.html along with the minified assets, ready for production.
