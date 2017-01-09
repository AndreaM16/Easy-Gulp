# Easy-Gulp
Gulp Configuration for a Default JS project

##Required
 - node `~7.3.0`
 - npm `~4.0.5`

##Set Up
 - Move `gulpfile.js`, `package.json` and `gulp` inside your project
 - Run `npm install`

##Project's structure
.
|--gulp
|--src
|  |--assets
|  |--css
|  |--img
|  |--js
|  |--partials
|  |--templates
|  |--index.html
|--vendors
|--gulpfile.js
|--package.json

##How to use
 - `gulp`: cleans build if exists, creates build folder, moves all mified js and css + html etc into it, injects the mified files into index, watches the files, runs lint, serves the application at localhosrt:3000
 - `gulp build`: cleans build, creats build folder, moves all mified js and css + html etc into it, injects the mified files into index
 - `gulp clean`: removes build folder
 - `gulp watch`: watches files and runs lint
 - `gulp copy-build`: copies all the files into build folder
 - `gulp inject`: injects css and js files into index
 - `gulp lint`: runs lint to highlight syntax errors into project's files
