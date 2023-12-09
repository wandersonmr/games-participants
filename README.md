
* Name: Wanderson Oliveira
* Date: 2023-12-09

# Games

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Install packages
Run `npm install` for download all packages.

## Start Project

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Structure
Folders:

- "feature" - inside this folder we have all pages in the project.
    - "modal-detail" - component modal used by games page
    - each page has a module with the necessary imports and modules
    - the unit test are inside the folder of component
- "shared" - contains codes used for more than one component
    - "**.service" - contains rest layer
    - "models" - contains de intefaces used in the project

HTML/SCSS:
- naming convention used forr the css classes - "BEM (Block, Element and Modifier)"
