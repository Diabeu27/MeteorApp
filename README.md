# MeteorApp

This is an example of Module Meteor Application on angular2-now with packages below
- angular babel,
- angular material design,
- material design iconic font,
- angular-templates,
- angular formly types defined,
- angular ui router,
- necolas normalize.css - https://github.com/necolas/normalize.css/,
- Sass for Meteor,
- PostCSS-SCSS,
- AutoPrefixer,
- Meteor Simple Schema - A simple, reactive schema validation smart package for Meteor,

## Versioning
- Semantic Versioning 2.0.0 http://semver.org/

## Writing code
- upper camel case, a.k.a. PascalCase: ThisIsAnExample. thisIsNotAnExample

## GIT Commit
- AngularJS Git Commit Message Conventions https://gist.github.com/stephenparish/9941e89d80e2bc58a153

## Install
```
meteor remove ecmascript blaze-html-templates
meteor npm install --save-dev angular angular-meteor angular-ui-router angular2-now
meteor remove standard-minifier-css
meteor add juliancwirko:postcss
npm install autoprefixer postcss-scss normalize.css --save-dev
meteor add modules angular-templates pbastowski:angular-babel angularui:angular-ui-router angular:angular-material
meteor add angular:angular-messages formly:angular-formly wieldo:api-check aldeed:collection2
meteor add ixdi:material-design-iconic-font fourseven:scss
```

## File structure
```
/client
/imports
  /api
  /modules
    /forms
    /todo
  /navigation
  /startup
    /client
      /app
    /server
  /ui
    /forms
      /docs
      /lib
      /types
    /md
    /scss
    /sidenav
/server
package.js
```

## Road map

### Forms
angular formly type examples:
- [ ] checkbox
- [ ] chips
- [ ] datepicker
- [x] input
- [ ] radio
- [ ] select
- [ ] switch
- [ ] textarea

angular formly types:
- [x] checkbox
- [ ] chips
- [x] datepicker
- [x] input
- [ ] radio
- [ ] select
- [ ] switch
- [ ] textarea

### Todo
Collections
- [x] List
- [x] Edit
- [x] Update
- [x] Remove

### Sign in
### Sign up
