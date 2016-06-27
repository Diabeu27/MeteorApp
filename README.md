
# MeteorApp

## Description

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

## How to run
```
meteor run
```

## JS Conventions
http://jshint.com/  
http://www.w3schools.com/js/js_conventions.asp
- Always use 4 spaces for indentation of code blocks
- we use camelCase for identifier names (variables and functions)
- we use CamelCase for classes
- Always end a simple statement with a semicolon
- Do not end a complex statement with a semicolon
- Don't start names with a $ sign. It will put you in conflict with many JavaScript library names

## Versioning
- Semantic Versioning 2.0.0 http://semver.org/

Given a version number MAJOR.MINOR.PATCH, increment the:  

MAJOR version when you make incompatible API changes,  
MINOR version when you add functionality in a backwards-compatible manner, and  
PATCH version when you make backwards-compatible bug fixes.  
Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

##### FAQ
How should I deal with revisions in the 0.y.z initial development phase?  
>The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

>If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## Markdown
- When you do want to insert a new line using Markdown, you end a line with two or more spaces, then type return

## GIT Commit
- AngularJS Git Commit Message Conventions https://gist.github.com/stephenparish/9941e89d80e2bc58a153

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

## Sign in
## Sign up

## Licence

The MIT License (MIT)
Copyright (c) 2016 STER Project Ścibor Rudnicki

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
