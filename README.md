# seed-angular1
Seed project for AngularJS 1.X uses ```npm``` and ```bower``` as package management tools and ```gulp``` as a build tool. 

#### Requirements
In order to use gulp please install gulp-cli globally
```npm install --global gulp-cli```

#### Usage
Change the project name (*my-project*) in the following places:
 * root directory
 * bower.json (change other info also)
 * package.json (change other info also)
 
Install initial node modules:
```npm install```

Install initial bower components:
```bower install```

An example component is given that handles user login form. Each functionality should be separated into a separate folder. Please consult the following [website](https://scotch.io/tutorials/angularjs-best-practices-directory-structure) for detailed description of the implemented folder structure. 

#### Defaults
Default ```.gitignore``` file is set up for ignoring:
 * InteliJ project files
 * installed npm and bower components
 
Several basic gulp tasks are implemented. They should be adapted to suit a specific project needs. Gulp tasks:
 * *lint* - checks the code in app directory for the errors as defined in ```.eslintrc.json```
 * *watch* - watches app directory for changes in .js and .html files
 * *watch-des* - specifically developed for designers, watches assets and app directories for changes in .html, .less, .sass and .css files. It also watches the img directory.
 * *default* - default task that runs *watch* immediately.




