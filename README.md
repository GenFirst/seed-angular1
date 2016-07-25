# seed-angular1
Seed project for AngularJS 1.X uses ```npm``` and ```bower``` as package management tools and ```gulp``` as a build tool. 

Included packages comprise: angular-ui-router, angular-bootstrap, angular-animate.

#### Requirements
In order to use gulp gulp-cli needs to be installed globally
```npm install --global gulp-cli```

#### Configuration and usage


Change the project name (*my-project*) in the following places:
 * root directory
 * ```bower.json``` (change other info also)
 * ```package.json``` (change other info also)

Optionally, module name (currently *MainModule*) can be changed in several places. Best option is to search and replace the string in the whole application.

Install initial node modules:
```npm install```

Install initial bower components:
```bower install```

An example component is given that shows a simple message on the home screen. Based on that template, each functionality should be separated into a separate folder under app/components directory. Please consult the following [website](https://scotch.io/tutorials/angularjs-best-practices-directory-structure) for detailed description of the implemented folder structure. Common features should be put in the app/common directory.

Several basic gulp tasks are implemented. They should be adapted to suit a specific project needs. Gulp tasks:
 * *watch* - watches app directory for changes in .js and .html files
 * *watch-des* - specifically developed for designers, watches assets and app directories for changes in .html, .less, .sass and .css files. It also watches the img directory.
 * *build-dev* - builds the application for the development. It creates source maps for both minimized js and css files.
 * *build-prod* - builds the application for the production. It does not create source maps for minimized js and css files.
 * *default* - default task that runs *build-dev* immediately.

#### Defaults
Default ```.gitignore``` file is set up for ignoring:
 * InteliJ project files
 * installed npm and bower components







